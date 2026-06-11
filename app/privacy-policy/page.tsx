import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — License Master | Geek Brain Studio",
  description:
    "Privacy Policy for License Master, a Swedish Driving License Test Prep app by muaz.dev / Geek Brain Studio.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to <strong>License Master</strong>, a Swedish Driving License
          Test Prep application developed by <strong>muaz.dev</strong>. We are
          committed to protecting your privacy. This Privacy Policy explains how
          information is collected, used, and disclosed when you use our app.
        </p>
        <p className="mt-3">
          By using License Master, you agree to the terms described in this
          policy. If you do not agree, please discontinue use of the app.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          License Master does <strong>not</strong> require you to create an
          account, and we do <strong>not</strong> collect any personally
          identifiable information (such as your name, email address, or phone
          number) directly.
        </p>
        <p className="mt-3">
          However, the following data may be collected automatically through
          third-party SDKs:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            <strong>App usage and interaction data</strong> — via Google
            Firebase Analytics (e.g., screens viewed, features used)
          </li>
          <li>
            <strong>Device identifiers</strong> — via Google AdMob for
            advertising purposes (e.g., Advertising ID)
          </li>
          <li>
            <strong>App configuration data</strong> — via Firebase Remote
            Config to deliver updated content
          </li>
        </ul>
        <div className="mt-4 border-l-2 border-black pl-4 py-1 bg-[#f5f5f5] text-sm text-[#525252]">
          We do <strong>not</strong> collect location, contacts, camera,
          microphone, financial, or health data.
        </div>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>
          The data collected through third-party SDKs is used for the following
          purposes:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            <strong>Analytics:</strong> To understand how users interact with
            the app and improve the user experience.
          </li>
          <li>
            <strong>Advertising:</strong> To display relevant ads through Google
            AdMob.
          </li>
          <li>
            <strong>App Configuration:</strong> To remotely update quiz content
            and app settings via Firebase Remote Config.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Third-Party Services",
    content: (
      <>
        <p>
          License Master uses the following third-party services that may
          collect data independently:
        </p>
        <div className="mt-4 space-y-4">
          {[
            {
              name: "Google Firebase Analytics",
              badge: "Analytics",
              url: "https://firebase.google.com/support/privacy",
            },
            {
              name: "Google AdMob",
              badge: "Advertising",
              url: "https://support.google.com/admob/answer/6128543",
            },
            {
              name: "Firebase Remote Config",
              badge: "Configuration",
              url: "https://firebase.google.com/support/privacy",
            },
          ].map(({ name, badge, url }) => (
            <div key={name} className="border-b border-[#e5e5e5] pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-black">{name}</span>
                <span className="text-xs font-medium border border-[#e5e5e5] px-2 py-0.5 text-[#525252]">
                  {badge}
                </span>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#525252] underline underline-offset-2 hover:text-black transition-colors"
              >
                {url}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#525252]">
          These services operate under their own privacy policies and we
          encourage you to review them. All data transmitted to these services
          is encrypted in transit via HTTPS.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Sharing",
    content: (
      <p>
        We do <strong>not</strong> sell, trade, or rent your personal
        information to third parties. Data collected by third-party SDKs
        (Firebase, AdMob) is governed by Google&apos;s privacy policies and may
        be processed by Google on their servers.
      </p>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <>
        <p>
          License Master does not store any user data on its own servers. Any
          data collected by third-party SDKs is retained according to their
          respective data retention policies.
        </p>
        <p className="mt-3">
          Locally stored data (e.g., app preferences and theme settings saved
          via Android DataStore) is stored only on your device and can be
          cleared at any time by uninstalling the app.
        </p>
      </>
    ),
  },
  {
    title: "7. Children's Privacy",
    content: (
      <p>
        License Master is not directed to children under the age of 13. We do
        not knowingly collect personal information from children. If you believe
        a child has provided personal information through the app, please
        contact us and we will take steps to delete such information.
      </p>
    ),
  },
  {
    title: "8. Security",
    content: (
      <p>
        All data transmitted by the app to third-party services is encrypted
        using industry-standard HTTPS/TLS protocols. We take reasonable
        technical measures to safeguard any data processed by the app.
      </p>
    ),
  },
  {
    title: "9. Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            Access information collected about you by third-party services
          </li>
          <li>
            Request deletion of data held by third-party services (via their
            opt-out tools)
          </li>
          <li>
            Opt out of personalized advertising via your device&apos;s
            advertising settings
          </li>
        </ul>
        <p className="mt-3">
          On Android, you can reset or opt out of interest-based ads by going
          to: <strong>Settings → Google → Ads</strong>.
        </p>
      </>
    ),
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated effective date. We encourage you
        to review this policy periodically. Continued use of the app after any
        changes constitutes your acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    content: (
      <>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#525252]">
          <li>
            <strong>Developer:</strong> muaz.dev
          </li>
          <li>
            <strong>App:</strong> License Master
          </li>
          <li>
            <strong>Google Play:</strong>{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.kms.dlquiz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              play.google.com/store/apps/details?id=com.kms.dlquiz
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Minimal header */}
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
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[#525252]">
            License Master &nbsp;·&nbsp; Effective Date: June 10, 2026
          </p>
        </div>
      </div>

      {/* Sections */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-12 space-y-0">
        {sections.map((section, i) => (
          <div
            key={i}
            className="py-8 border-b border-[#e5e5e5] last:border-0"
          >
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
            © {new Date().getFullYear()} muaz.dev · License Master
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

