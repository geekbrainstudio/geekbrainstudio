import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Privacy Policy — Geek Brain Studio",
  description:
    "Privacy Policy for the Geek Brain Studio website — what data we collect, how we use it, and your GDPR rights.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how <strong>Geek Brain Studio</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
          uses, and protects information when you visit{" "}
          <strong>geekbrainstudio.com</strong> (the &ldquo;Website&rdquo;).
        </p>
        <p className="mt-3">
          We are committed to protecting your privacy and complying with the
          EU General Data Protection Regulation (GDPR) and other applicable
          data protection laws.
        </p>
      </>
    ),
  },
  {
    title: "2. Data Controller",
    content: (
      <>
        <p>The data controller for this website is:</p>
        <div className="mt-3 border-l-2 border-black pl-4 py-1 bg-[#f5f5f5] text-sm text-[#525252]">
          <strong>Geek Brain Studio</strong> — muaz.dev
          <br />
          Contact:{" "}
          <a
            href="mailto:geekbrainstudio@gmail.com"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            geekbrainstudio@gmail.com
          </a>
        </div>
      </>
    ),
  },
  {
    title: "3. What Data We Collect",
    content: (
      <>
        <p>
          This website does <strong>not</strong> collect any personally
          identifiable information directly. We do <strong>not</strong> operate
          any user accounts, registration forms, or payment systems.
        </p>
        <p className="mt-3">
          The following data may be collected automatically or via third-party
          services:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            <strong>Browser & device information</strong> — type, version,
            operating system, screen resolution (via hosting/CDN logs)
          </li>
          <li>
            <strong>IP address</strong> — collected by GitHub Pages (our
            hosting provider) for security and abuse prevention
          </li>
          <li>
            <strong>Referring URL & pages visited</strong> — standard server
            access logs
          </li>
          <li>
            <strong>Cookie consent preference</strong> — stored locally in your
            browser via <code>localStorage</code> (never sent to any server)
          </li>
        </ul>
        <div className="mt-4 border-l-2 border-black pl-4 py-1 bg-[#f5f5f5] text-sm text-[#525252]">
          We do <strong>not</strong> use advertising cookies, tracking pixels,
          or cross-site trackers on this website.
        </div>
      </>
    ),
  },
  {
    title: "4. Cookies",
    content: (
      <>
        <p>
          This website uses a minimal set of browser storage:
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm text-[#525252] border-collapse">
            <thead>
              <tr className="border-b border-[#e5e5e5]">
                <th className="text-left py-2 pr-4 font-semibold text-black">Name</th>
                <th className="text-left py-2 pr-4 font-semibold text-black">Type</th>
                <th className="text-left py-2 pr-4 font-semibold text-black">Purpose</th>
                <th className="text-left py-2 font-semibold text-black">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#f5f5f5]">
                <td className="py-2 pr-4 font-mono text-xs">gbs_cookie_consent</td>
                <td className="py-2 pr-4">localStorage</td>
                <td className="py-2 pr-4">Stores your cookie consent choice (accepted / declined)</td>
                <td className="py-2">Persistent (until cleared)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          No third-party cookies are set. The consent value is stored only in
          your own browser and is never transmitted to us or any third party.
        </p>
        <p className="mt-3">
          You can clear this at any time via your browser settings:{" "}
          <strong>Settings → Privacy → Clear browsing data</strong>, or by
          clearing <code>localStorage</code> for this site in DevTools.
        </p>
      </>
    ),
  },
  {
    title: "5. How We Use Your Information",
    content: (
      <ul className="space-y-2 list-disc list-inside text-[#525252]">
        <li>To serve the website and ensure its technical operation</li>
        <li>To protect against abuse and unauthorised access (via hosting logs)</li>
        <li>To remember your cookie consent preference (locally in your browser)</li>
      </ul>
    ),
  },
  {
    title: "6. Third-Party Services",
    content: (
      <>
        <p>
          This website is hosted on <strong>GitHub Pages</strong>, operated by
          GitHub, Inc. GitHub may collect server logs including IP addresses.
          Please review GitHub&apos;s privacy policy for details:
        </p>
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-[#525252] underline underline-offset-2 hover:text-black transition-colors"
        >
          github.com/privacy
        </a>
        <p className="mt-4">
          Fonts are loaded via <strong>Google Fonts</strong> (Inter typeface).
          When your browser requests font files, Google may log your IP address.
          See Google&apos;s privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "7. Legal Basis for Processing (GDPR)",
    content: (
      <>
        <p>
          Under GDPR, we rely on the following legal bases for processing:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            <strong>Legitimate interests (Art. 6(1)(f))</strong> — server logs
            for security and abuse prevention
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a))</strong> — any optional analytics
            or cookies you accept via the cookie banner
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Data Retention",
    content: (
      <p>
        Server access logs held by GitHub Pages are retained according to
        GitHub&apos;s own retention policies (typically 90 days). We do not
        store any personal data on our own servers. Your cookie consent
        preference is kept in your browser&apos;s <code>localStorage</code>{" "}
        indefinitely until you clear it.
      </p>
    ),
  },
  {
    title: "9. Your Rights Under GDPR",
    content: (
      <>
        <p>
          If you are located in the European Economic Area (EEA), you have the
          following rights:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li><strong>Right of access</strong> — request a copy of any data we hold about you</li>
          <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
          <li><strong>Right to erasure</strong> — request deletion of your data</li>
          <li><strong>Right to restrict processing</strong> — request we limit how we use your data</li>
          <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
          <li><strong>Right to withdraw consent</strong> — withdraw cookie consent at any time (clear <code>localStorage</code> in your browser)</li>
          <li><strong>Right to lodge a complaint</strong> — with your local data protection authority</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:geekbrainstudio@gmail.com"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            geekbrainstudio@gmail.com
          </a>
          . We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        This website is not directed at children under the age of 16. We do
        not knowingly collect personal data from children. If you believe a
        child has submitted personal information via this website, please
        contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        the website after any changes constitutes acceptance of the updated
        policy.
      </p>
    ),
  },
  {
    title: "12. Contact",
    content: (
      <ul className="space-y-2 list-disc list-inside text-[#525252]">
        <li><strong>Website:</strong> geekbrainstudio.com</li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:geekbrainstudio@gmail.com"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            geekbrainstudio@gmail.com
          </a>
        </li>
      </ul>
    ),
  },
];

export default function WebsitePrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-black hover:text-[#525252] transition-colors duration-200"
          >
            Geek Brain Studio
          </Link>
          <Link
            href="/"
            className="text-sm text-[#525252] hover:text-black transition-colors duration-200"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a3a3a3] mb-3">
            Legal · Website
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Website Privacy Policy
          </h1>
          <p className="mt-3 text-[#525252]">
            Geek Brain Studio &nbsp;·&nbsp; Effective Date: June 11, 2026
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-xs text-[#a3a3a3]">Also see:</span>
            <Link
              href="/privacy-policy"
              className="text-xs border border-[#e5e5e5] px-3 py-1 text-[#525252] hover:border-black hover:text-black transition-colors"
            >
              License Master App Privacy Policy →
            </Link>
          </div>
        </div>
      </div>

      {/* Sections */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        {sections.map((section, i) => (
          <div key={i} className="py-8 border-b border-[#e5e5e5] last:border-0">
            <h2 className="text-base font-semibold text-black mb-4">
              {section.title}
            </h2>
            <div className="text-sm text-[#525252] leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-[#a3a3a3]">
            © {new Date().getFullYear()} Geek Brain Studio
          </span>
          <Link
            href="/"
            className="text-sm text-[#a3a3a3] hover:text-black transition-colors"
          >
            geekbrainstudio.com
          </Link>
        </div>
      </footer>
    </div>
  );
}

