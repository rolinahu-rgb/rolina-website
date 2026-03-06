export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-white/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
            Rolina Hu
          </a>
          <div className="flex gap-6 text-sm font-medium text-muted">
            <a href="#about" className="transition-colors hover:text-purple">About</a>
            <a href="#education" className="transition-colors hover:text-purple">Education</a>
            <a href="#experience" className="transition-colors hover:text-purple">Experience</a>
            <a href="#publications" className="transition-colors hover:text-purple">Publications</a>
            <a href="#projects" className="transition-colors hover:text-purple">Projects</a>
            <a href="#skills" className="transition-colors hover:text-purple">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden pt-32 pb-20">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-violet/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Avatar circle */}
            <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple to-blue animate-float">
              <span className="text-4xl font-bold text-white">R</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-dark via-purple to-blue bg-clip-text text-transparent animate-gradient">
                Jinqiu (Rolina) Hu
              </span>
            </h1>
            <p className="mb-2 text-xl font-medium text-purple">
              PhD Researcher | Chemical Engineer
            </p>
            <p className="mb-8 max-w-xl text-muted leading-relaxed">
              Researching the synthesis and applications of nitrogen-rich porous wood-derived carbon materials
              at Griffith University. Passionate about sustainable materials, nanotechnology, and environmental chemistry.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:rolinahu@gmail.com"
                className="rounded-full bg-gradient-to-r from-purple to-blue px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple/25 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="#publications"
                className="rounded-full border border-purple/30 px-6 py-3 text-sm font-medium text-purple transition-all hover:bg-purple/5 hover:-translate-y-0.5"
              >
                View Publications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6">
            <TimelineCard
              period="Oct 2025 - Present"
              title="Doctor of Philosophy"
              subtitle="Griffith University, Gold Coast, Australia"
              details={[
                "Research topic: Synthesis and Applications of Nitrogen-Rich Porous Wood Derived Carbon Materials",
              ]}
            />
            <TimelineCard
              period="Sep 2021 - Dec 2022"
              title="Master of Chemical Engineering (M.S.)"
              subtitle="University of California San Diego, United States (QS #37)"
              details={[
                "GPA: 3.15/4",
                "Key courses: Nanoengineering, Chemical Reaction Engineering, Matlab, Phase Transformations, Python",
              ]}
            />
            <TimelineCard
              period="Sep 2017 - Jun 2021"
              title="Bachelor of Chemical Engineering (B.Ch.E.)"
              subtitle="Qingdao University of Science and Technology, China"
              details={[
                "GPA: 3.27/5",
                "Key courses: Chemical Process Simulation, Bioresource Chemical Engineering, AutoCAD, Synthesis of Fine Chemicals",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-6">
            <TimelineCard
              period="Jul 2023 - Apr 2025"
              title="Operator"
              subtitle="Yulin Chemical Co., LTD, China"
              details={[
                "Monitored operations and adjusted process parameters",
                "Identified and evaluated emerging technologies for potential industrial applications",
                "Represented the company in communications with third parties",
              ]}
            />
            <TimelineCard
              period="May 2023 - Feb 2024"
              title="Teaching Assistant"
              subtitle="Beijing Jisi Internet Education Technology Co., LTD, China"
              details={[
                "Assisted professors with managing classroom activities",
                "Taught office hours and offered extra help to struggling students",
                "Collaborated with teachers and admission staff",
              ]}
            />
            <TimelineCard
              period="Mar 2021 - Jun 2021"
              title="Lab Assistant"
              subtitle="Qingdao Institution of Biomass Energy and Bioprocess Technology, China"
              details={[
                "Performed laboratory tests and recorded data",
                "Prepared samples and ensured adherence to health and safety protocols",
                "Assisted scientists in experiments",
              ]}
            />
            <TimelineCard
              period="Nov 2020"
              title="Trainee"
              subtitle="Shandong Weifang Runfeng Chemical Co. LTD, China"
              details={[
                "Studied the production process and equipment of Picloram at the first operation site",
              ]}
            />
            <TimelineCard
              period="Feb 2018 - Jul 2018"
              title="Sales Associate"
              subtitle="Uniqlo, China"
              details={[
                "Understood client needs and provided product information",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Publications</SectionTitle>
          <div className="space-y-4">
            <PublicationCard
              authors="Jinqiu HU"
              title="Degradation Mechanism of Degradable Plastics and Factors Affecting Degradation Processes"
              journal="China Science and Technology Journal Database Industry A"
              year="2024"
              volume="03, 132-135"
            />
            <PublicationCard
              authors="Jinqiu HU"
              title="Dissolution and Regeneration of Cellulose and Chitosan in Molten Salt Hydrate"
              journal="2nd International Conference on Food Biotechnology and Environmental Technology: Highlights in Science, Engineering and Technology"
              year="2024"
              volume="91, 12-18"
            />
            <PublicationCard
              authors="Qiong Wu, Jinqiu HU, Shuangshuang Cao, Shitao Yu, Lang Huang"
              title="Heteroatom-doped hierarchical porous carbon aerogels from chitosan for high performance supercapacitors"
              journal="International Journal of Biological Macromolecules"
              year="2020"
              volume="155, 131-141"
              badge="JIF: 7.7 | Q1"
            />
            <PublicationCard
              authors="Qiong Wu, Mingming Gao, Shuangshuang Cao, Jinqiu HU, Lang Huang, Shitao Yu, Arthur J. Ragauskas"
              title="Chitosan-based layered carbon materials prepared via ionic-liquid-assisted hydrothermal carbonization and their performance study"
              journal="Journal of the Taiwan Institute of Chemical Engineers"
              year="2019"
              volume="101, 231-243"
              badge="JIF: 5.5 | Q1"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Research Projects</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard
              period="Jan - Dec 2024"
              title="Degradation Mechanism of Degradable Plastics"
              description="Explained the degradation mechanism of several typical degradable plastics and their market prospects in China."
            />
            <ProjectCard
              period="Sep - Nov 2023"
              title="Nanomaterials in Heavy Metal Water Treatment"
              description="Analyzed and compared the adsorption capacity of biobased materials for heavy metal ions in water."
            />
            <ProjectCard
              period="Mar - Jun 2021"
              title="Cellulose & Chitosan in Molten Salt Hydrate"
              description="Prepared composite biomass nanomaterials then characterized materials using SEM, IR, ICP-MS, etc."
            />
            <ProjectCard
              period="Jul 2020 - Mar 2021"
              title="Phloroglucinol from Cellulose via Hydrothermal Catalysis"
              description="National college student innovation training project (Lead). Processed raw materials and analyzed data to optimize reaction conditions."
              highlight
            />
            <ProjectCard
              period="Apr 2019 - Apr 2020"
              title="Electrocatalytic Properties of Wood-Based Carbon"
              description="Prepared carbon electrode material and analyzed electrochemical properties using Origin software."
            />
            <ProjectCard
              period="Sep 2018 - Mar 2019"
              title="Nitrogen-Rich Porous Woody Carbon Materials"
              description="Responsible for pre-treatment of raw materials including pre-carbonized ball grinding, activation at different temperatures, and product washing."
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Skills & Certifications</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-6 transition-all">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-purple-dark">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple/10 text-sm">
                  &#x1f4dc;
                </span>
                Certifications
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                  Project Management Professional (PMP)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                  National Industrial and Information Application Talent Assessment Certificate
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                  AutoCAD and Informatization Office Certificates
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 transition-all">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-purple-dark">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10 text-sm">
                  &#x1f4bb;
                </span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "MATLAB", "Microsoft Office", "AutoCAD", "Origin", "Project Management"].map((skill) => (
                  <span key={skill} className="rounded-full bg-gradient-to-r from-purple/10 to-blue/10 px-3 py-1 text-sm font-medium text-purple-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 transition-all">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-purple-dark">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet/10 text-sm">
                  &#x1f52c;
                </span>
                Lab Experience
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SEM", "LC", "ICP-MS", "BET", "Spectrophotometer", "IR"].map((skill) => (
                  <span key={skill} className="rounded-full border border-purple/20 px-3 py-1 text-sm font-medium text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 transition-all">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-purple-dark">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple/10 text-sm">
                  &#x1f310;
                </span>
                Languages
              </h3>
              <div className="space-y-3">
                <LanguageBar label="Mandarin" level="Native" percent={100} />
                <LanguageBar label="English" level="Fluent" percent={85} />
                <LanguageBar label="French" level="Beginner" percent={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="mb-8 text-muted">
            Feel free to reach out for collaborations, research opportunities, or just a friendly chat!
          </p>
          <a
            href="mailto:rolinahu@gmail.com"
            className="inline-block rounded-full bg-gradient-to-r from-purple to-blue px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple/25 hover:-translate-y-0.5"
          >
            rolinahu@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted">
          <p>Jinqiu (Rolina) Hu &middot; PhD Researcher &middot; Griffith University</p>
        </div>
      </footer>
    </div>
  );
}

/* ── Reusable Components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-foreground">{children}</h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-purple to-blue" />
    </div>
  );
}

function TimelineCard({
  period,
  title,
  subtitle,
  details,
}: {
  period: string;
  title: string;
  subtitle: string;
  details: string[];
}) {
  return (
    <div className="glass-card rounded-2xl p-6 transition-all">
      <span className="mb-2 inline-block rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple">
        {period}
      </span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-3 text-sm text-purple-light font-medium">{subtitle}</p>
      <ul className="space-y-1.5">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationCard({
  authors,
  title,
  journal,
  year,
  volume,
  badge,
}: {
  authors: string;
  title: string;
  journal: string;
  year: string;
  volume: string;
  badge?: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-foreground leading-snug">{title}</h3>
          <p className="mb-1 text-sm text-muted">{authors}</p>
          <p className="text-sm text-purple-light">
            <span className="italic">{journal}</span>, {year}, {volume}.
          </p>
        </div>
        {badge && (
          <span className="flex-shrink-0 rounded-full bg-gradient-to-r from-purple to-blue px-3 py-1 text-xs font-bold text-white">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  period,
  title,
  description,
  highlight,
}: {
  period: string;
  title: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div className={`glass-card rounded-2xl p-6 transition-all ${highlight ? "ring-2 ring-purple/30" : ""}`}>
      <span className="mb-2 inline-block text-xs font-medium text-blue">{period}</span>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
      {highlight && (
        <span className="mt-3 inline-block rounded-full bg-purple/10 px-2 py-0.5 text-xs font-medium text-purple">
          Lead Researcher
        </span>
      )}
    </div>
  );
}

function LanguageBar({ label, level, percent }: { label: string; level: string; percent: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted">{level}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-purple/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple to-blue"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
