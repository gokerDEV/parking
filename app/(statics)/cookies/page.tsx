import { Container } from '@/components/common/container.component'
import { Divider } from '@/components/common/divider.component'
import { CONTACT_EMAIL, DOMAIN, SITE_NAME } from '@/config/constants'

export async function generateMetadata() {
  return {
    title: 'Cookie Policy',
    description: 'Cookie Policy',
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
          <h1 className="text-lg font-semibold uppercase">Cookie Policy</h1>
        </Divider>
        <div className="prose prose-lg dark:prose-invert [&_h2]:font-display [&_h3]:font-display m-8 space-y-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-4">
          <p>
            <strong>Last Updated:</strong> 25.04.2025
          </p>

          <p>
            This Cookie Policy explains how {SITE_NAME} (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies on the {DOMAIN} website (the &quot;Site&quot;).
          </p>

          <h2>What are Cookies and Similar Technologies?</h2>
          <p>
            Cookies are small text files placed on your device (computer,
            tablet, mobile phone) when you visit a website. Similar
            technologies, like pixels, local storage, or session storage,
            perform comparable functions. They help websites recognize your
            device and remember information about your visit, preferences, or
            actions over time.
          </p>

          <h2>How We Use Cookies and Similar Technologies</h2>
          <p>
            Since our Site does not require user logins or have complex features
            needing essential session management beyond basic web protocols, we
            primarily use cookies and similar technologies provided by
            third-party services for analytics and website improvement purposes.
            Specifically, we use:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to
              collect anonymized information about how visitors use our Site.
              This includes data like the number of visitors, the pages they
              visit, the time spent on the site, approximate geographic
              location, and the type of device and browser used. This helps us
              understand traffic patterns and improve the Site&apos;s content
              and structure. Google has its own privacy policy regarding how it
              uses this information.
            </li>
            <li>
              <strong>Vercel Analytics:</strong> As our hosting provider, Vercel
              may collect anonymous analytics data to measure website
              performance and visitor statistics. This helps us understand site
              speed and general usage patterns. Vercel&apos;s data collection is
              subject to its own privacy policy.
            </li>
            <li>
              <strong>Hotjar:</strong> We use Hotjar to better understand our
              users&apos; needs and optimize this service and experience. Hotjar
              is a technology service that helps us understand our users&apos;
              experience (e.g., how much time they spend on which pages, which
              links they choose to click, what users do and don&apos;t like,
              etc.), enabling us to build and maintain our service with user
              feedback. Hotjar uses cookies and other technologies to collect
              data on our users&apos; behavior and their devices (including
              device&apos;s IP address [captured and stored only in anonymized
              form], device screen size, device type [unique device
              identifiers], browser information, geographic location [country
              only], and the preferred language used to display our website).
              Hotjar stores this information on our behalf in a pseudonymized
              user profile. Hotjar is contractually forbidden to sell any of the
              data collected on our behalf. For further details, please see the
              &quot;about Hotjar&quot; section of{' '}
              <a
                href="https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotjar&apos;s support site
              </a>
              .
            </li>
          </ul>
          <p>
            These tools help us analyze aggregate usage patterns and make
            improvements to the Site.
          </p>

          <h2>Your Choices Regarding Cookies</h2>
          <p>
            When you first visit our Site, you will be presented with a consent
            banner asking for your permission to use the analytics technologies
            described above. You can accept or reject their use.
          </p>
          <ul>
            <li>
              <strong>Accept:</strong> If you accept, the analytics scripts from
              Google Analytics, Vercel Analytics, and Hotjar will load and begin
              collecting data during your session.
            </li>
            <li>
              <strong>Reject:</strong> If you reject, these non-essential
              analytics scripts will not load, and the associated data
              collection will not occur for your visit.
            </li>
          </ul>
          <p>
            You can typically manage cookie preferences through your web browser
            settings as well. Most browsers allow you to block or delete
            cookies. However, blocking all cookies might impact website
            functionality, though it&apos;s less likely on our site given its
            nature.
          </p>
          {/* Optional: Add a link/button here to re-open the consent manager if you implement one */}
          {/* <p>You can change your consent preferences at any time by visiting our [Cookie Settings Page](link).</p> */}

          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We encourage you
            to review this policy periodically for any changes. Your continued
            use of the Site after any changes constitutes your acceptance of the
            new policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us at {CONTACT_EMAIL}.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Page
