'use client'
import Script from 'next/script'

// https://zippystarter.com/blog/blog-starter/integrate-hotjar-with-nextjs
const HotJar = ({
  hjid,
  hjsv = 6,
  nonce,
}: {
  hjid?: string
  hjsv?: number
  nonce?: string
}) => {
  if (process.env.NODE_ENV === 'production' && hjid) {
    return (
      <Script id="hotjar" {...(nonce ? { nonce } : {})}>
        {`
          (function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                // eslint-disable-next-line prefer-rest-params
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: ${hjid}, hjsv: ${hjsv} };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
        `}
      </Script>
    )
  }
  return null
}

export { HotJar }
