export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm text-[#0592D1] tracking-wide">
                  SENIOR UX & CX RESEARCHER
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0C2050] leading-tight">
                Strategic research that drives decisions
              </h1>
              <p className="text-lg text-[#0D162E] leading-relaxed max-w-xl">
                I help European research boutiques, agencies, and product studios uncover insights that inform design, strategy, and product direction.
              </p>
              <div className="pt-4">
                <a
                  href="#book-call"
                  className="inline-block bg-[#0592D1] text-white px-8 py-3.5 rounded-md hover:bg-[#047AB5] transition-colors"
                >
                  Book a Call
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md aspect-[3/4] bg-[#DCE1E5] rounded-lg flex items-center justify-center">
                <span className="text-[#0D162E] text-sm">Portrait Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl text-[#0C2050]">
              Collaborative by design
            </h2>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              I partner with teams to design research that answers real questions—whether it's validating a concept, understanding user behavior, or mapping the customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="w-2 h-2 rounded-full bg-[#BF5A4C]"></div>
              <h3 className="text-xl text-[#0C2050]">Research design</h3>
              <p className="text-[#0D162E] leading-relaxed">
                Tailored methodologies that match your timeline, budget, and business goals.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-2 rounded-full bg-[#BF5A4C]"></div>
              <h3 className="text-xl text-[#0C2050]">Fieldwork & analysis</h3>
              <p className="text-[#0D162E] leading-relaxed">
                From interviews to usability tests, I handle the fieldwork and turn findings into clear insights.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-2 h-2 rounded-full bg-[#BF5A4C]"></div>
              <h3 className="text-xl text-[#0C2050]">Strategic synthesis</h3>
              <p className="text-[#0D162E] leading-relaxed">
                Actionable recommendations that inform product decisions and design direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#0C2050] mb-12">
              Who I work with
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-[#0592D1] pl-6">
                <h3 className="text-xl text-[#0C2050] mb-2">
                  European research boutiques
                </h3>
                <p className="text-[#0D162E] leading-relaxed">
                  Steady project partnerships for research design, fieldwork, and analysis across UX and CX initiatives.
                </p>
              </div>

              <div className="border-l-2 border-[#DCE1E5] pl-6">
                <h3 className="text-xl text-[#0C2050] mb-2">
                  Digital agencies & product studios
                </h3>
                <p className="text-[#0D162E] leading-relaxed">
                  Research support for client projects—from discovery to validation.
                </p>
              </div>

              <div className="border-l-2 border-[#DCE1E5] pl-6">
                <h3 className="text-xl text-[#0C2050] mb-2">
                  Global research networks
                </h3>
                <p className="text-[#0D162E] leading-relaxed">
                  On-demand research capacity for larger, distributed projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl text-[#0C2050]">
              Let's discuss your project
            </h2>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              Whether you need research design, fieldwork support, or strategic insight, I'd be glad to explore how we can work together.
            </p>
            <div className="pt-4">
              <a
                href="#book-call"
                className="inline-block bg-[#0592D1] text-white px-8 py-3.5 rounded-md hover:bg-[#047AB5] transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
