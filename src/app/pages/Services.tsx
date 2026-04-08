export function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-[#0C2050] mb-6">
              Services
            </h1>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              I design and deliver research that answers strategic questions and informs product decisions—tailored to your timeline, scope, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Research Design & Execution */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-6">
                Research design & execution
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Discovery research</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Understanding user needs, behaviors, and pain points at the start of a project.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Usability testing</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Evaluating prototypes, flows, and interfaces to identify friction and optimize experiences.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Customer journey mapping</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Mapping touchpoints and emotions across the full customer experience.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Concept validation</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Testing product concepts and features before development.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5] pt-12">
              <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-6">
                Research support
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Fieldwork & moderation</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Conducting interviews, focus groups, and usability sessions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Analysis & synthesis</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Turning raw data into clear, actionable insights.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg text-[#0C2050]">Research ops</h3>
                  <p className="text-[#0D162E] leading-relaxed">
                    Participant recruitment, scheduling, and project coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-[#0C2050] mb-8">
              How I work
            </h2>
            <div className="space-y-6">
              <p className="text-[#0D162E] leading-relaxed">
                Every project starts with a conversation about your goals, constraints, and questions. From there, I design a research approach that fits your context—whether it's a quick validation study or a multi-phase discovery project.
              </p>
              <p className="text-[#0D162E] leading-relaxed">
                I work remotely across European time zones and am comfortable with agile, collaborative environments. I integrate with your team's tools and workflows, and deliver findings in formats that work for you—presentations, workshops, or written reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-[#0C2050]">
              Ready to start a project?
            </h2>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              Let's discuss your research needs and how I can support your team.
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
