import { Container } from '@/components/common/container.component'
import { Divider } from '@/components/common/divider.component'
import { CONTACT_EMAIL, DOMAIN, SITE_NAME } from '@/config/constants'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Privacy Policy',
    description: 'Privacy Policy',
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  }
}

const Page = async () => {
  return (
    <Container>
      <div className="mx-auto w-full px-4 py-8 pb-[200px] xl:container xl:px-0">
        <Divider align="left">
          <h1 className="text-lg font-semibold uppercase">Privacy Policy</h1>
        </Divider>
        <div className="prose prose-lg dark:prose-invert [&_h2]:font-display [&_h3]:font-display m-8 space-y-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold">
          <p>
            <strong>Last Updated:</strong> 25.04.2025
          </p>

          <p>
            Your privacy is important to us at {SITE_NAME} (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). This Privacy Policy explains
            how we handle information collected through our website {DOMAIN}
            (the &quot;Site&quot;).
          </p>

          <h2>Information We Collect</h2>
          <p>
            As our Site does not offer user accounts or login functionality, we
            do not directly collect personal information like your name, email
            address, or account details.
          </p>
          <p>
            However, we utilize third-party analytics and performance monitoring
            services that collect information automatically when you visit our
            Site. This includes:
          </p>
          <ul>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with the Site, such as pages visited, time spent on pages, links
              clicked, and general navigation patterns.
            </li>
            <li>
              <strong>Device and Browser Information:</strong> Data about the
              device and browser you use to access the Site, including IP
              address (often anonymized or used to derive approximate location),
              device type, operating system, browser type, screen resolution,
              and language preferences.
            </li>
            <li>
              <strong>Referral Information:</strong> Information about the
              source that led you to our Site (e.g., a search engine or a link
              from another site).
            </li>
          </ul>
          <p>
            This information is collected through technologies employed by our
            service providers: Google Analytics, Vercel Analytics, and Hotjar,
            as detailed in our <Link href="/cookies">Cookie Policy</Link>.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            The information collected through our analytics providers is used
            solely for the following purposes:
          </p>
          <ul>
            <li>
              To understand how visitors use our Site and identify popular
              content or areas for improvement.
            </li>
            <li>To analyze website traffic patterns and sources.</li>
            <li>
              To monitor website performance, speed, and technical
              functionality.
            </li>
            <li>
              To analyze user behavior (like clicks and scrolling via Hotjar) in
              aggregate to improve site layout and user experience.
            </li>
          </ul>
          <p>
            We analyze this data in an aggregated or anonymized form to make
            informed decisions about enhancing the Site.
          </p>

          <h2>Legal Basis for Processing</h2>
          <p>
            We rely on your **consent**, obtained via our cookie consent banner,
            as the legal basis for collecting and processing information through
            the third-party analytics and tracking technologies (Google
            Analytics, Vercel Analytics, Hotjar) used on our Site.
          </p>

          <h2>Information Sharing and Third Parties</h2>
          <p>
            We do not sell or rent your personal information to third parties.
          </p>
          <p>
            However, to provide the analytics and site monitoring services
            mentioned, we share the collected usage, device, and browser
            information with our third-party service providers:
          </p>
          <ul>
            <li>
              <strong>Google (for Google Analytics):</strong> Data is processed
              according to Google&apos;s Privacy Policy.
            </li>
            <li>
              <strong>Vercel (for Vercel Analytics):</strong> Data is processed
              according to Vercel&apos;s Privacy Policy.
            </li>
            <li>
              <strong>Hotjar:</strong> Data is processed according to
              Hotjar&apos;s Privacy Policy.
            </li>
          </ul>
          <p>
            These providers process data on our behalf based on our instructions
            and according to their respective privacy policies and data
            processing agreements. They are prohibited from using the
            information for their own independent purposes beyond providing the
            service to us, except potentially for their own service improvement
            in aggregated/anonymized forms as outlined in their policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We rely on the security measures implemented by our third-party
            service providers (Google, Vercel, Hotjar) to protect the data they
            collect on our behalf. While they employ various security measures,
            please be aware that no method of transmission over the Internet or
            electronic storage is 100% secure.
          </p>

          <h2>Data Retention</h2>
          <p>
            We do not directly store the raw personal data collected by our
            analytics providers for extended periods. The data is held and
            processed by Google Analytics, Vercel Analytics, and Hotjar
            according to their own data retention policies. We typically access
            aggregated or anonymized reports generated from this data.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Using global services like Google Analytics, Vercel, and Hotjar
            involves transferring the collected information outside of your
            country of residence, potentially to countries with different data
            protection laws (like the United States). We rely on the safeguards
            provided by these service providers, such as Standard Contractual
            Clauses (SCCs) or other approved mechanisms, to ensure an adequate
            level of data protection for these transfers.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location and applicable data protection laws (like
            GDPR), you may have certain rights regarding your personal
            information, such as the right to access, rectify, erase, or object
            to the processing of your data. You also have the right to withdraw
            your consent for analytics tracking at any time (e.g., by rejecting
            cookies via our consent banner or managing browser settings).
          </p>
          <p>
            To exercise any rights you may have or if you have questions, please
            contact us using the details below. You may also need to contact the
            third-party providers directly regarding the data they hold.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage
            you to review this policy periodically for any changes. Your
            continued use of the Site after any changes constitutes your
            acceptance of the new policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at {CONTACT_EMAIL}.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Page
