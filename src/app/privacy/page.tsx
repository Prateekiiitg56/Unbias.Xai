import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Unbias.Xai",
  description:
    "How Unbias.Xai collects, stores, and uses your data. Learn about our commitment to transparency and your rights.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Meshes */}
      <div className="mesh-bg-1" />
      <div className="mesh-bg-3" />

      {/* Hero / Header */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="bg-dotgrid" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-accent transition-colors font-mono mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 font-display">
            Privacy Policy
          </h1>
          <p className="text-white/40 font-mono text-sm tracking-wide">
            Last updated — August 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 px-6">
        <div className="bg-finegrid" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-16">

          {/* Intro */}
          <div className="glass rounded-2xl p-8 md:p-10 space-y-4">
            <p className="text-white/70 leading-relaxed">
              At <span className="text-white font-semibold">Unbias.Xai</span>, we believe in full transparency about the data we handle. This policy explains what information we collect, how we use it, and your rights — in plain language, not buried in legal jargon.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              This policy applies to visitors of{" "}
              <span className="text-accent font-medium">unbias.xai</span>,
              clients who engage our services, and recipients of our outreach
              communications.
            </p>
          </div>

          {/* What We Collect */}
          <PolicySection number="01" title="What We Collect">
            <p className="text-white/60 leading-relaxed mb-6">
              We collect and process different types of information depending on how you interact with us:
            </p>
            <div className="space-y-5">
              <DataCategory
                label="Lead Generation Data"
                description="Business names, phone numbers, and addresses sourced via the Google Places API. This is publicly available business information used to identify potential clients."
              />
              <DataCategory
                label="Outreach Data"
                description="WhatsApp Business messages sent to prospective clients as part of our outreach workflow. This includes message content and delivery status."
              />
              <DataCategory
                label="Contact &amp; Inquiry Data"
                description="Information you submit through our website contact form or booking form — including your name, email address, project details, and any other details you choose to share."
              />
              <DataCategory
                label="Website Analytics"
                description="Basic usage data such as page views and referral sources, collected to improve our site. We do not use invasive tracking or fingerprinting."
              />
            </div>
          </PolicySection>

          {/* How We Store It */}
          <PolicySection number="02" title="How We Store It">
            <p className="text-white/60 leading-relaxed mb-4">
              Your data is stored securely using the following infrastructure:
            </p>
            <ul className="space-y-3">
              <StorageItem text="Google Sheets — used for lead tracking, outreach logs, and contact form submissions." />
              <StorageItem text="Our own infrastructure — internal tools, databases, and automation pipelines hosted on secure cloud services." />
            </ul>
            <p className="text-white/50 text-sm leading-relaxed mt-5">
              We limit access to stored data to authorised team members only and review our storage practices regularly.
            </p>
          </PolicySection>

          {/* How We Use It */}
          <PolicySection number="03" title="How We Use It">
            <p className="text-white/60 leading-relaxed mb-4">
              The data we collect serves two core purposes:
            </p>
            <ul className="space-y-3">
              <StorageItem text="Outreach — contacting prospective clients who may benefit from our web design and automation services." />
              <StorageItem text="Service Delivery — fulfilling project work, communicating with active clients, and providing ongoing support." />
            </ul>
            <p className="text-white/50 text-sm leading-relaxed mt-5">
              We never use your data for purposes unrelated to the above without your explicit consent.
            </p>
          </PolicySection>

          {/* Third Parties */}
          <PolicySection number="04" title="Third-Party Sharing">
            <div className="glass rounded-xl p-6 border-accent/10 border">
              <p className="text-white/70 leading-relaxed">
                <span className="text-accent font-bold">We do not sell, rent, or trade your personal data to third parties.</span>{" "}
                Your information is only shared with third-party services (like Google Sheets or WhatsApp Business) as necessary to operate our workflows — never for advertising or data brokering purposes.
              </p>
            </div>
          </PolicySection>

          {/* Data Deletion */}
          <PolicySection number="05" title="Data Deletion Requests">
            <p className="text-white/60 leading-relaxed mb-6">
              You have the right to request deletion of any personal data we hold about you. To make a request, email us at:
            </p>
            <a
              href="mailto:unbias.xai@gmail.com"
              className="inline-flex items-center gap-3 glass rounded-xl px-6 py-4 text-accent font-mono text-sm hover:border-accent/30 transition-colors group"
            >
              unbias.xai@gmail.com
              <ExternalLink className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mt-5">
              We&apos;ll process your request within 30 days and confirm deletion via email. If we are legally required to retain certain data, we&apos;ll let you know.
            </p>
          </PolicySection>

          {/* Scope */}
          <PolicySection number="06" title="Who This Applies To">
            <ul className="space-y-3">
              <StorageItem text="Visitors to the unbias.xai website." />
              <StorageItem text="Recipients of our WhatsApp Business outreach messages." />
              <StorageItem text="Anyone who submits information through our contact or booking forms." />
              <StorageItem text="Clients who engage our web design or automation services." />
            </ul>
          </PolicySection>

          {/* Changes */}
          <PolicySection number="07" title="Changes to This Policy">
            <p className="text-white/60 leading-relaxed">
              We may update this privacy policy from time to time. When we do, we&apos;ll update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this page periodically to stay informed.
            </p>
          </PolicySection>

          {/* Contact */}
          <div className="glass rounded-2xl p-8 md:p-10 text-center space-y-4">
            <h3 className="text-lg font-bold text-white font-display">
              Questions?
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
              If you have any questions about this policy or how we handle your data, reach out at{" "}
              <a
                href="mailto:unbias.xai@gmail.com"
                className="text-accent hover:underline"
              >
                unbias.xai@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 py-12 relative z-10 px-6 overflow-hidden">
        <div className="bg-crosshatch" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-sm font-mono text-white/30">
            Unbias.Xai © 2026. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-xs font-mono text-white/30">
            <Link href="/" className="hover:text-accent transition-colors">
              HOME
            </Link>
            <a
              href="https://instagram.com/unbias.xai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              INSTAGRAM <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ─── Sub-Components ─── */

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <span className="text-accent/40 font-mono text-xs tracking-widest">
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-display">
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-12">{children}</div>
    </div>
  );
}

function DataCategory({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="glass rounded-xl p-5 space-y-2">
      <h3 className="text-sm font-bold text-white/90 font-mono uppercase tracking-wider">
        {label}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StorageItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
      {text}
    </li>
  );
}
