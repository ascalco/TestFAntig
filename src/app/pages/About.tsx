export function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-[#0C2050] mb-6">
              About
            </h1>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              I'm a Senior UX & CX Researcher with a background in design, business, and behavioral science—bringing a multidisciplinary lens to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-6">
                Background
              </h2>
              <div className="space-y-4 text-[#0D162E] leading-relaxed">
                <p>
                  I've spent years working across research boutiques, agencies, and in-house teams—designing and delivering studies that inform product strategy, service design, and customer experience.
                </p>
                <p>
                  My work combines qualitative and quantitative methods, and I'm comfortable working independently or embedded within your team. I approach research as a collaborative process, always focused on answering the questions that matter most to your business.
                </p>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5] pt-12">
              <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-6">
                Approach
              </h2>
              <div className="space-y-4 text-[#0D162E] leading-relaxed">
                <p>
                  Good research starts with good questions. I work with stakeholders to clarify objectives, then design methods that deliver credible, actionable insights—whether that's through interviews, usability testing, journey mapping, or mixed-methods studies.
                </p>
                <p>
                  I believe research should be accessible and collaborative, not locked away in lengthy reports. I deliver findings in formats that work for your team—workshops, presentations, or documentation—so insights translate into decisions.
                </p>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5] pt-12">
              <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-6">
                Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Methods</h3>
                  <ul className="space-y-1 text-[#0D162E]">
                    <li>User interviews</li>
                    <li>Usability testing</li>
                    <li>Journey mapping</li>
                    <li>Concept testing</li>
                    <li>Diary studies</li>
                    <li>Workshops & co-design</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Domains</h3>
                  <ul className="space-y-1 text-[#0D162E]">
                    <li>Digital products & services</li>
                    <li>E-commerce & retail</li>
                    <li>Financial services</li>
                    <li>Healthcare & wellbeing</li>
                    <li>SaaS & B2B platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-8">
              How I work
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#BF5A4C] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg text-[#0C2050] mb-1">Collaborative</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Research is most effective when it's a partnership. I work closely with teams to align on goals and ensure findings are actionable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#BF5A4C] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg text-[#0C2050] mb-1">Pragmatic</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    I design research that fits real-world constraints—timelines, budgets, and team capacity—without sacrificing rigor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#BF5A4C] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg text-[#0C2050] mb-1">Clear</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    I communicate findings in plain language, focusing on what matters and what to do next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-[#0C2050]">
              Let's connect
            </h2>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              I'm always happy to discuss research opportunities and explore how we can work together.
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
