import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const CAPABILITIES = [
  { title: "Project Management", desc: "End-to-end oversight of complex projects from initiation through delivery." },
  { title: "Strategic Consulting", desc: "Tailored advice and roadmaps to drive operational efficiency and growth." },
  { title: "Marketing & Administration", desc: "Brand positioning, outreach coordination, and back-office support." },
  { title: "Sourcing & Coordination", desc: "Connecting clients with the right vendors, partners, and resources." },
  { title: "Operational Oversight", desc: "Process improvement and workflow management across service-based environments." },
  { title: "Syndication Support", desc: "Facilitating deals and partnerships in real estate and adjacent sectors." },
];

const CALENDLY_URL = "https://calendly.com/cindy-437";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(215,25%,15%)] font-sans">

      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 bg-[hsl(215,60%,28%)] shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg tracking-wide">CEP Consulting Services</span>
            <span className="text-[hsl(210,80%,85%)] text-xs tracking-widest uppercase font-medium">LLC</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors">
                {label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-[hsl(38,80%,50%)] hover:bg-[hsl(38,80%,44%)] text-white text-sm font-semibold rounded transition-colors"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[hsl(215,60%,22%)] px-6 py-4 flex flex-col gap-4 border-t border-white/10">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/80 hover:text-white text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-5 py-2 bg-[hsl(38,80%,50%)] text-white text-sm font-semibold rounded text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[hsl(215,60%,28%)] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Strategic Consulting.<br />
            <span className="text-[hsl(38,80%,65%)]">Delivered with Precision.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            CEP Consulting Services, LLC helps businesses streamline operations, improve performance, and execute complex projects efficiently — connecting clients with the right resources to drive lasting results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[hsl(38,80%,50%)] hover:bg-[hsl(38,80%,44%)] text-white font-semibold rounded transition-colors"
            >
              Book a Free Consultation
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded border border-white/20 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[hsl(215,60%,28%)] text-sm font-semibold tracking-widest uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold">Management Consulting Built for Results</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[hsl(215,15%,40%)] leading-relaxed mb-4">
                CEP Consulting Services, LLC is a management consulting firm specializing in project management and strategic advisory services. We help businesses of all sizes streamline their operations, improve performance, and execute complex initiatives with confidence.
              </p>
              <p className="text-[hsl(215,15%,40%)] leading-relaxed mb-4">
                We are particularly experienced in real estate, construction-adjacent services, property management, and government contracting environments — connecting clients with the right resources and managing workflows to support sustainable growth.
              </p>
              <p className="text-[hsl(215,15%,40%)] leading-relaxed">
                As a legally established LLC with SAM.gov registration, we are positioned to support federal and commercial engagements with the structure and accountability your business demands.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[hsl(215,20%,90%)]">
              <h3 className="font-bold text-lg mb-6 text-[hsl(215,60%,28%)]">Areas of Focus</h3>
              <ul className="space-y-3">
                {[
                  "Real Estate & Property Management",
                  "Construction-Adjacent Services",
                  "Government Contracting",
                  "Business Operations & Workflow",
                  "Vendor & Resource Sourcing",
                  "One-Off Strategic Advisory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-[hsl(38,80%,50%)]" />
                    <span className="text-[hsl(215,15%,35%)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-[hsl(210,15%,96%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[hsl(215,60%,28%)] text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-[hsl(215,20%,90%)] hover:shadow-md transition-shadow">
                <div className="w-10 h-1 bg-[hsl(38,80%,50%)] rounded mb-4" />
                <h3 className="font-semibold text-[hsl(215,60%,28%)] mb-2">{title}</h3>
                <p className="text-[hsl(215,15%,45%)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[hsl(215,60%,28%)] text-sm font-semibold tracking-widest uppercase mb-2">Let's Connect</p>
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-[hsl(215,15%,45%)] text-lg">
              Ready to discuss your project or consulting needs? We'd love to hear from you.
            </p>
          </div>

          {/* Book a Consultation CTA */}
          <div className="bg-[hsl(215,60%,28%)] rounded-2xl p-8 text-center mb-8">
            <h3 className="text-white font-bold text-xl mb-2">Schedule a Free Consultation</h3>
            <p className="text-white/70 text-sm mb-6">Pick a time that works for you. No commitment required.</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[hsl(38,80%,50%)] hover:bg-[hsl(38,80%,44%)] text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book on Calendly
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <a
              href="mailto:cepconsultingservicesllc@gmail.com"
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-[hsl(215,20%,90%)] hover:border-[hsl(215,60%,50%)] transition-colors group"
            >
              <div className="w-12 h-12 bg-[hsl(215,60%,28%)] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[hsl(215,15%,50%)] font-medium uppercase tracking-wide mb-1">Email</p>
                <p className="text-[hsl(215,60%,28%)] font-medium group-hover:underline text-sm break-all">
                  cepconsultingservicesllc@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+15625522607"
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-[hsl(215,20%,90%)] hover:border-[hsl(215,60%,50%)] transition-colors group"
            >
              <div className="w-12 h-12 bg-[hsl(215,60%,28%)] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[hsl(215,15%,50%)] font-medium uppercase tracking-wide mb-1">Phone</p>
                <p className="text-[hsl(215,60%,28%)] font-medium group-hover:underline">
                  (562) 552-2607
                </p>
              </div>
            </a>
          </div>

          {/* Social */}
          <div className="text-center">
            <p className="text-[hsl(215,15%,50%)] text-sm mb-4">Follow us on Instagram</p>
            <a
              href="https://www.instagram.com/cep.consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @cep.consulting
            </a>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY */}
      <section id="privacy" className="py-16 px-6 bg-[hsl(210,15%,96%)]">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setPrivacyOpen(!privacyOpen)}
            className="w-full flex items-center justify-between text-left group"
          >
            <div>
              <p className="text-[hsl(215,60%,28%)] text-sm font-semibold tracking-widest uppercase mb-1">Legal</p>
              <h2 className="text-2xl font-bold group-hover:text-[hsl(215,60%,35%)] transition-colors">Privacy Policy</h2>
            </div>
            <svg
              className={`w-6 h-6 text-[hsl(215,60%,28%)] transition-transform flex-shrink-0 ml-4 ${privacyOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {privacyOpen && (
            <div className="mt-8 space-y-6 text-[hsl(215,15%,40%)] text-sm leading-relaxed">
              <p className="text-xs text-[hsl(215,15%,55%)]">Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: April 2026</p>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">1. Introduction</h3>
                <p>CEP Consulting Services, LLC ("we," "us," or "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our consulting services.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">2. Information We Collect</h3>
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li><strong>Contact Information:</strong> Name, email address, and phone number when you contact us or book a consultation.</li>
                  <li><strong>Business Information:</strong> Details about your organization, project needs, or consulting inquiries you voluntarily provide.</li>
                  <li><strong>Usage Data:</strong> General website analytics such as pages visited and time on site (collected anonymously).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">3. How We Use Your Information</h3>
                <p className="mb-2">We use the information collected to:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Respond to inquiries and schedule consultations.</li>
                  <li>Provide and improve our consulting services.</li>
                  <li>Communicate updates relevant to your engagement with us.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
                <p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">4. Payment Processing</h3>
                <p>If you engage our services and payment is processed, we use secure third-party payment processors (such as Stripe). We do not store credit card or banking details on our systems. All payment data is handled in accordance with the processor's privacy policy and PCI DSS standards.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">5. Data Security</h3>
                <p>We take reasonable administrative and technical measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">6. Third-Party Links</h3>
                <p>Our website may contain links to third-party services (such as Calendly or Instagram). We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">7. Your Rights</h3>
                <p>You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at <a href="mailto:cepconsultingservicesllc@gmail.com" className="text-[hsl(215,60%,35%)] hover:underline">cepconsultingservicesllc@gmail.com</a>.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">8. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[hsl(215,25%,20%)] mb-2">9. Contact Us</h3>
                <p>For privacy-related questions, please contact:<br />
                  <strong>CEP Consulting Services, LLC</strong><br />
                  Email: <a href="mailto:cepconsultingservicesllc@gmail.com" className="text-[hsl(215,60%,35%)] hover:underline">cepconsultingservicesllc@gmail.com</a><br />
                  Phone: (562) 552-2607
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(215,60%,20%)] text-white/60 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} CEP Consulting Services, LLC. All rights reserved.</p>
          <button
            onClick={() => {
              setPrivacyOpen(true);
              document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </button>
        </div>
      </footer>
    </div>
  );
}
