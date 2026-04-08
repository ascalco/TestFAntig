export function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-[#0C2050] mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              Selected projects demonstrating research design, execution, and strategic impact across various industries and contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Project 1 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] bg-[#DCE1E5] rounded-lg mb-4"></div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl text-[#0C2050]">
                  E-commerce checkout optimization
                </h2>
                <p className="text-[#0D162E] leading-relaxed">
                  Usability testing and journey mapping to identify friction points in a multi-step checkout flow. Recommendations led to a 23% reduction in cart abandonment.
                </p>
                <div className="pt-2">
                  <span className="text-sm text-[#0592D1]">Usability Testing, Journey Mapping</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5]"></div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] bg-[#DCE1E5] rounded-lg mb-4"></div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl text-[#0C2050]">
                  SaaS platform discovery research
                </h2>
                <p className="text-[#0D162E] leading-relaxed">
                  In-depth interviews with B2B users to understand workflows, pain points, and feature priorities. Insights shaped the product roadmap for the following year.
                </p>
                <div className="pt-2">
                  <span className="text-sm text-[#0592D1]">User Interviews, Discovery Research</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5]"></div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] bg-[#DCE1E5] rounded-lg mb-4"></div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl text-[#0C2050]">
                  Healthcare service design
                </h2>
                <p className="text-[#0D162E] leading-relaxed">
                  Mixed-methods study combining interviews, diary studies, and journey mapping to understand patient experiences across digital and physical touchpoints.
                </p>
                <div className="pt-2">
                  <span className="text-sm text-[#0592D1]">Service Design, Diary Studies, Journey Mapping</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5]"></div>

            {/* Project 4 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] bg-[#DCE1E5] rounded-lg mb-4"></div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl text-[#0C2050]">
                  Financial services concept validation
                </h2>
                <p className="text-[#0D162E] leading-relaxed">
                  Testing early-stage product concepts with target users to assess viability, comprehension, and value proposition before development.
                </p>
                <div className="pt-2">
                  <span className="text-sm text-[#0592D1]">Concept Testing, User Interviews</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#DCE1E5]"></div>

            {/* Project 5 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] bg-[#DCE1E5] rounded-lg mb-4"></div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl text-[#0C2050]">
                  Mobile app navigation redesign
                </h2>
                <p className="text-[#0D162E] leading-relaxed">
                  Usability testing across multiple iterations to evaluate navigation patterns and information architecture. Final design improved task success rates by 35%.
                </p>
                <div className="pt-2">
                  <span className="text-sm text-[#0592D1]">Usability Testing, Information Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="bg-[#DCE1E5]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[#0D162E] leading-relaxed">
              Due to confidentiality agreements, I can't share full case studies for all projects. I'm happy to discuss my work and methodology in more detail during a call.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-[#0C2050]">
              Discuss your project
            </h2>
            <p className="text-lg text-[#0D162E] leading-relaxed">
              Let's talk about your research needs and how I can help.
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
