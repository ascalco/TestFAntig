export function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-[#0C2050] mb-6">
              Contact
            </h1>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              I'm available for research projects, consulting partnerships, and collaborative work across European time zones.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Primary CTA */}
            <div className="bg-[#DCE1E5] rounded-lg p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl text-[#0C2050]">
                Book a call
              </h2>
              <p className="text-[#0D162E] leading-relaxed max-w-xl mx-auto">
                The best way to start is with a conversation. We'll discuss your project, timeline, and how I can support your research needs.
              </p>
              <div className="pt-4">
                <a
                  href="#book-call"
                  className="inline-block bg-[#0592D1] text-white px-8 py-3.5 rounded-md hover:bg-[#047AB5] transition-colors"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="space-y-6">
              <h2 className="text-2xl text-[#0C2050]">
                Prefer email?
              </h2>
              <p className="text-[#0D162E] leading-relaxed">
                Feel free to reach out directly at{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-[#0592D1] hover:underline"
                >
                  hello@example.com
                </a>
              </p>
              <p className="text-[#0D162E] leading-relaxed">
                Please include a brief description of your project, timeline, and any specific questions you have. I typically respond within 24 hours.
              </p>
            </div>

            {/* Working With */}
            <div className="border-t border-[#DCE1E5] pt-12 space-y-6">
              <h2 className="text-2xl text-[#0C2050]">
                Working arrangements
              </h2>
              <div className="space-y-4 text-[#0D162E] leading-relaxed">
                <p>
                  I work remotely with clients across Europe, and I'm comfortable with various engagement models—project-based, retainer arrangements, or embedded team support.
                </p>
                <p>
                  I typically work across CET/CEST time zones and can adapt to your team's schedule and collaboration tools.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="border-t border-[#DCE1E5] pt-12 space-y-6">
              <h2 className="text-2xl text-[#0C2050]">
                Availability
              </h2>
              <p className="text-[#0D162E] leading-relaxed">
                I'm currently accepting new projects starting in Q3 2026. For urgent or short-term work, please mention this in your initial message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[#0D162E] leading-relaxed">
              Looking forward to hearing about your project and exploring how we can work together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
