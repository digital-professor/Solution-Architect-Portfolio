import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Vision } from "./components/Vision";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { AnimatedSection } from "./components/AnimatedSection";
import type { PortfolioData } from "./types";
import { PlaceHolderImages } from "./lib/placeholder-images";
import { Linkedin, Mail, Twitter, Workflow, Layers, CheckCircle, Search, Library, Rocket, Users, FileCode, GitBranch, Shield } from "lucide-react";

export default function App() {
  const portfolioData: PortfolioData = {
    name: "Yasser Riaz",
    initials: "YR",
    title: "Solutions Architect | Enterprise Architecture",
    // Subtitle: Secure, scalable, Higher Ed focus, SPAR + Accessibility
    subtitle: "I design secure, scalable solutions in Higher Education, bridging classic IT and user-centred product design. From hybrid architectures to AI governance, I deliver end-to-end designs shaped by non-functional requirements including security, performance, accessibility, availability and reliability.",
    profileImage: {
      src: PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageUrl || 'https://picsum.photos/400/400',
      width: 400,
      height: 400,
      hint: PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageHint || 'Profile',
    },
    about: {
      title: "My Approach: Domain-Led Solutions Architecture",
      // EA proof point + British English
      description: `**Student Success Technical Design Authority.**\n\nI bridge operational requirements with enterprise IT strategy. I established the domain's architectural practice, using ArchiMate and TOGAF to formalise the technology stack and define target-state roadmaps. My focus is delivering secure, highly available cloud and hybrid solutions that align with institutional standards. \n\n*All portfolio examples use anonymised or synthetic data.*`,
      technicalProficiencies: {
        frameworks: [
          "ArchiMate 3.1",
          "TOGAF ADM",
          "BPMN 2.0"
        ],
        tools: [
          "Microsoft Power Platform",
          "Microsoft 365 / SharePoint",
          "Lucidchart / Visio",
          "Power BI"
        ],
        specializations: [
          "Event-Driven Architecture",
          "Hybrid Cloud Integration",
          "Privacy-by-Design / GDPR",
          "Low-Code Orchestration"
        ]
      }
    },
    impact: {
      metrics: [
        { value: "£900k", label: "At-risk portfolio addressed" },
        { value: "82%", label: "Process efficiency gain" },
        { value: "£700k", label: "Emergency aid distributed" },
        // Unambiguous safety claim
        { value: "Zero", label: "Production PII used in prototypes" },
      ]
    },
    skills: [
      { name: "Design", description: "Translate business needs into technical specifications using ArchiMate and BPMN artifacts.", icon: Layers },
      { name: "Integrate", description: "Architect hybrid patterns bridging cloud-native tools with legacy on-premise systems.", icon: GitBranch },
      { name: "Validate", description: "Secure senior stakeholder buy-in via data-driven business cases and ROI analysis.", icon: CheckCircle },
      { name: "Govern", description: "Define architectural standards and security principles to manage institutional risk.", icon: Shield },
      { name: "Evaluate", description: "Drive vendor assessments and RFIs to ensure alignment with enterprise architecture.", icon: Search },
    ],
    projects: [
      {
        title: "Hybrid Cloud Architecture: Automated Triage System",
        subtitle: "Designing an event-driven architecture to replace a high-friction manual process.",
        summary: "Architected a hybrid cloud solution to address a £900k revenue risk. Designed an event-driven pattern connecting a cloud intake layer with a backend logic engine, achieving an 82% efficiency gain with an available, auditable design.",
        description: `
**The Architectural Challenge:**
The "As-Is" process was a manual bottleneck. The target design reduced manual effort by 82%, saving 36.75 hours per cohort. The challenge was to architect a scalable, automated solution to address a £900k revenue risk.

**Solution Design (Hybrid Pattern):**
I designed an **Event-Driven Architecture** prioritising data integrity and performance.
1.  **Ingestion Layer:** Cloud-native intake (Microsoft Forms).
2.  **Logic Layer:** Encapsulated rules/decision engine.
3.  **Integration Pattern:** Designed a secure batch transfer into the legacy finance ledger, with controls to protect data integrity and auditability.

**Artefacts & NFRs:**
* **Artefacts:** Produced ArchiMate High-Level Designs (HLDs) and BPMN process flows.
* **NFRs:** Data Integrity, Performance, Availability.
`,
        businessCase: "Demonstrated 'Pragmatic Architecture' by using available low-code tools to deliver immediate enterprise value. The architectural documentation I produced provided the baseline to secure IT resources for a Phase 2 full-cloud migration.",
        technicalSpec: "Framework: ArchiMate 3.1 | Pattern: Event-Driven / Hybrid Cloud | NFRs: Data Integrity, Performance, Availability | Governance: Privacy-by-Design",
        image: {
          src: PlaceHolderImages.find(p => p.id === 'project-showcase-1')?.imageUrl || 'https://picsum.photos/800/600',
          width: 800,
          height: 600,
          hint: "ArchiMate diagram showing the Hybrid Cloud integration pattern.",
        },
        // UPDATED: Added Performance and Availability tags for perfect symmetry
        tags: ["ArchiMate", "Hybrid Cloud", "NFR: Data Integrity", "NFR: Performance", "NFR: Availability"],
        link: "#",
      },
      {
        title: "Service Optimisation: Callback Workflow Architecture",
        subtitle: "Designing operational resilience for institutional CRM deployment.",
        summary: "Designed a resilient callback workflow to close an availability gap in a new Salesforce process. Standardised availability capture and introduced retry/rollover and fail-safe paths to reduce missed callbacks and manual chasing.",
        description: `
**The Challenge:**
The new Salesforce withdrawals/interruptions process created a logic gap regarding student availability.

**Solution (Service Architecture):**
I designed a **Service Resilience Workflow** focused on Availability and Resilience (NFRs).
1.  **Availability Profiling:** Capturing windows pre-callback.
2.  **Continuous Cycle Logic:** 'Rollover Protocol' for dynamic routing.
3.  **Safety Net Logic:** Multi-layer fail-safe for manual intervention.

**Outcome:**
Improved service reliability during rollout by reducing failed callback attempts and giving teams a clear operational fallback when automation could not complete.

**Artefacts & NFRs:**
* **Artefacts:** Produced a comprehensive Operational Design Document (8-page SOP) containing BPMN swimlane diagrams, logic decision trees, and a failure-mode risk analysis (FMEA).
* **NFRs:** Availability, Resilience.
`,
        businessCase: "Demonstrates ability to produce professional architecture documentation. I identified a system risk pre-launch and architected a process-based solution to mitigate it.",
        technicalSpec: "Modelling: BPMN | Artefacts: FMEA Risk Analysis, SOP | NFRs: Availability, Resilience",
        image: {
          src: PlaceHolderImages.find(p => p.id === 'project-showcase-4')?.imageUrl || 'https://picsum.photos/600/400',
          width: 600,
          height: 400,
          hint: "Visual workflow diagram showing the Callback Safety Net logic.",
        },
        // UPDATED: Added Availability and Resilience tags for perfect symmetry
        tags: ["Service Design", "BPMN", "FMEA Analysis", "NFR: Availability", "NFR: Resilience"],
        link: "#",
      },
      {
        title: "Composable Architecture: Fee Logic Engine",
        subtitle: "Encapsulating complex business rules into a modular service.",
        summary: "To eliminate compliance risk from manual fee advice, I architected a modular 'Fee Checker' tool. This solution encapsulated complex SFE funding policy into a standalone logic engine, integrated as a modular service.",
        description: `
**The Challenge:**
Manual cross-referencing of complex PDF policies created a high risk of compliance failure.

**Solution (Composable Architecture):**
I architected a standalone 'Fee Engine' that codified the statutory regulations into **rules-based decision logic**. This demonstrates a **Composable Architecture** approach: building small, focused services that can be updated independently as regulations change, without breaking the core platform.

**NFRs:**
* **Compliance:** Strict adherence to SFE statutory regulations.
* **Maintainability:** Modular design allows rapid updates when laws change.
`,
        businessCase: "Validates the 'Composable' strategy for the Advisor Toolkit. By decoupling the Fee Logic from the main CRM, we ensured agility in regulatory response.",
        technicalSpec: "Pattern: Composable Architecture | NFRs: Compliance, Maintainability | Logic: Rules-based Decision Logic",
        image: {
          src: PlaceHolderImages.find(p => p.id === 'project-showcase-2')?.imageUrl || 'https://picsum.photos/600/400',
          width: 600,
          height: 400,
          hint: "Logic flow diagram showing the Fee Calculation algorithm.",
        },
        tags: ["Composable Architecture", "Business Logic", "NFR: Compliance", "Modular Design"],
        link: "#",
      },
      {
        title: "Architectural Spike: AI for Financial Wellbeing",
        subtitle: "Feasibility assessment for emerging technology integration.",
        summary: "An architectural spike to evaluate the feasibility of providing personalised budgeting advice using AI. The prototype validated that AI-driven personalisation is technically viable while maintaining strict privacy and governance controls.",
        description: `
**The Challenge:**
Current financial advice lacks personalisation, but using AI carries high privacy risks.

**Solution (Privacy Architecture):**
Architectural focus was on **Data Sovereignty, Security, and Privacy (NFRs)**. I designed an anonymisation layer that stripped PII before data entered the LLM prompt/input.

**NFRs:**
* **Security:** Data sanitisation before processing.
* **Privacy:** GDPR compliance via anonymisation.
* **Feasibility:** Technical proof-of-concept.

(Note: Used anonymised/synthetic data; no production PII).
`,
        businessCase: "Demonstrates responsible evaluation of emerging tech. Proved the architectural patterns needed for safe AI deployment (Sanitisation Layers) within a regulated environment.",
        technicalSpec: "Pattern: Architectural Spike | NFRs: Security, Privacy | Tech: Enterprise LLM, Data Sanitisation",
        image: {
          src: PlaceHolderImages.find(p => p.id === 'project-showcase-3')?.imageUrl || 'https://picsum.photos/600/400',
          width: 600,
          height: 400,
          hint: "Data flow diagram showing the Anonymisation Layer.",
        },
        tags: ["Architectural Spike", "AI Governance", "Privacy-by-Design", "NFR: Security"],
        link: "#",
      },
    ],
    vision: {
      title: "The Student Advisor Toolkit: A Composable Architecture",
      description: "These modules form the foundation of an integrated Student Advisor Toolkit: a composable architecture where each service operates independently but integrates seamlessly. The two-phase roadmap includes creating initial tools and scaling this into a fully integrated system: an embedded MS Teams app providing a unified interface, a GenAI-powered chatbot, and analytics to quantify advisory impact. This modular approach supports incremental delivery and change, and it informed the Phase 2 investment case and target-state design I presented to senior stakeholders.",
      features: [
        {
          name: "Integrated Suite",
          description: "A single MS Teams app providing seamless advisor access to all tools, including AI Triage, Fee/Funding Checker, and CPR tracker for managing at-risk student cases.",
          icon: Layers,
        },
        {
          name: "Centralised Knowledge",
          description: "A central knowledge repository, informed by all modules, becoming the single source of truth and process guidance for student support.",
          icon: Library,
        },
         {
          name: "Enhanced Efficiency",
          description: "The toolkit streamlines workflows, automates routine tasks, and provides instant access to information, empowering advisors to focus on high-impact student support.",
          icon: Rocket,
        },
      ]
    },
    contact: {
      title: "Get in Touch",
      description: "I'm currently open to new opportunities in Solutions Architecture and Enterprise Systems. Feel free to reach out.",
    },
    socials: [
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "Email", url: "mailto:yasser.riaz@example.com", icon: Mail },
    ],
  };

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg')?.imageUrl || '';

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header initials={portfolioData.initials} name={portfolioData.name} />
      <main className="flex-1">
        <Hero 
          title={portfolioData.title} 
          subtitle={portfolioData.subtitle} 
          backgroundImage={heroImage}
        />
        
        <div className="relative z-10 bg-background mesh-bg border-t border-white/10 shadow-2xl">
          
          {/* 1) Impact Metrics */}
          <AnimatedSection>
            <ImpactMetrics metrics={portfolioData.impact.metrics} />
          </AnimatedSection>

          {/* 2) ABOUT MOVED UP: My Approach + Technical Proficiencies + Skills */}
          <AnimatedSection>
            <About
              title={portfolioData.about.title}
              description={portfolioData.about.description}
              imageUrl={portfolioData.profileImage.src}
              imageHint={portfolioData.profileImage.hint}
              skills={portfolioData.skills}
              technicalProficiencies={portfolioData.about.technicalProficiencies}
            />
          </AnimatedSection>
          
          {/* 3) Case Studies Heading */}
          <AnimatedSection>
            <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-24">
              <div className="max-w-6xl mx-auto mb-8 text-left">
                
                {/* Main Title & Subtitle */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
                  Solution Architecture
                  <span className="block text-slate-500 mt-2 text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">Case Studies</span>
                </h2>

                {/* Accent Badge - MOVED BELOW */}
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">
                      Selected Works
                    </p>
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* 4) Projects */}
          <Projects projects={portfolioData.projects} />
          
          {/* 5) Vision */}
          <AnimatedSection>
            <Vision 
              id="vision"
              title={portfolioData.vision.title}
              description={portfolioData.vision.description}
              features={portfolioData.vision.features}
            />
          </AnimatedSection>
          
          {/* 6) Contact */}
          <AnimatedSection>
            <Contact
              title={portfolioData.contact.title}
              description={portfolioData.contact.description}
              socials={portfolioData.socials}
            />
          </AnimatedSection>
          
          <Footer name="Yasser Riaz" />
        </div>
      </main>
    </div>
  );
}