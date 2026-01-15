"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./white-paper.css";

// SVG Icons (replacing emojis)
const RocketIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const TrainIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="16" rx="2" />
        <path d="M4 11h16" />
        <path d="M12 3v8" />
        <path d="m8 19-2 3" />
        <path d="m18 22-2-3" />
        <path d="M8 15h0" />
        <path d="M16 15h0" />
    </svg>
);

const LightbulbIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
    </svg>
);

// Award Icons
const BestPaperIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="award-icon best-paper">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
    </svg>
);

const HonorableMentionIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="award-icon honorable-mention">
        <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14l-3 8 6-3 6 3-3-8" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

// Table of Contents sections
const sections = [
    { id: "abstract", title: "Abstract" },
    { id: "search", title: "1. Search" },
    { id: "map", title: "2. Map" },
    { id: "adapt", title: "3. Adapt" },
    { id: "refine", title: "4. Refine" },
    { id: "test", title: "5. Test" },
    { id: "pipeline", title: "Innovation Pipeline" },
    { id: "collaboration", title: "Collaboration" },
    { id: "references", title: "References" },
];

export default function ResearchPage() {
    const [activeSection, setActiveSection] = useState("abstract");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -50% 0px" }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="research-page">
            {/* Subtle paper texture background */}
            <div className="page-texture" />

            {/* Header Navigation */}
            <header className="research-header">
                <Link href="/" className="back-link">
                    <span className="back-arrow">←</span>
                    <span>Back to Home</span>
                </Link>
                <div className="header-meta">
                    <span className="badge">White Paper</span>
                </div>
            </header>

            {/* Sticky Table of Contents */}
            <nav className="toc">
                <div className="toc-label">Contents</div>
                {sections.map(({ id, title }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`toc-item ${activeSection === id ? "active" : ""}`}
                    >
                        {title}
                    </a>
                ))}
            </nav>

            {/* Main Content */}
            <main className="research-content">
                {/* Title Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title-block"
                >
                    <h1 className="main-title">Scaling Serendipity</h1>
                    <p className="subtitle-line">A S.M.A.R.T Framework for AI-Augmented Innovation</p>
                    <p className="affiliation-line">
                        HCI Institute · Carnegie Mellon University
                    </p>
                </motion.div>

                {/* Abstract */}
                <section id="abstract" className="paper-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Abstract</h2>
                        <p className="lead-text">
                            Despite record investments in R&D, <a href="https://www.nature.com/articles/s41586-022-05543-x" target="_blank" rel="noopener noreferrer" className="inline-link">scientific and technological breakthroughs are becoming
                                less frequent</a>, and <a href="https://www.aeaweb.org/articles?id=10.1257/aer.20180338" target="_blank" rel="noopener noreferrer" className="inline-link">ideas are getting harder to find</a>.
                        </p>
                        <p>
                            One of the most pervasive barriers is <strong>cognitive fixation</strong>: as experts become
                            increasingly specialized, this can paradoxically narrow creative vision and make it difficult
                            to look beyond low-hanging fruit. Even when teams manage to identify a promising inspiration,
                            transferring its underlying principles to developing concepts in a new context presents a
                            second major obstacle. Finally, bold ideas frequently die in the so-called &quot;fuzzy front end&quot;
                            of R&D because they are not systematically de-risked.
                        </p>
                        <p>
                            History consistently shows that the most transformative innovations emerge not from deeper
                            digging within a single field, but from <strong>unexpected connections across domains</strong>:
                        </p>

                        <div className="insight-cards">
                            <div className="insight-card">
                                <div className="insight-icon">
                                    <RocketIcon />
                                </div>
                                <p><a href="https://www.jpl.nasa.gov/news/what-looks-good-on-paper-may-look-good-in-space/" target="_blank" rel="noopener noreferrer" className="inline-link">NASA engineers</a> turned to <strong>origami principles</strong> to fit a massive solar array into a narrow rocket.</p>
                            </div>
                            <div className="insight-card">
                                <div className="insight-icon">
                                    <TrainIcon />
                                </div>
                                <p>The streamlined beak of a <a href="https://asknature.org/innovation/high-speed-train-inspired-by-the-kingfisher/" target="_blank" rel="noopener noreferrer" className="inline-link"><strong>kingfisher</strong></a> inspired the design that eliminated sonic booms from high-speed trains.</p>
                            </div>
                            <div className="insight-card">
                                <div className="insight-icon">
                                    <LightbulbIcon />
                                </div>
                                <p>A car mechanic adapted a YouTube party trick for removing wine corks to create the <a href="https://www.nytimes.com/2013/11/14/health/new-tool-to-ease-difficult-births-a-plastic-bag.html" target="_blank" rel="noopener noreferrer" className="inline-link"><strong>Odón device</strong></a> for difficult childbirths.</p>
                            </div>
                        </div>

                        <p>
                            Despite its power, analogical reasoning remains one of the most underutilized tools in innovation.
                            Because the process is cognitively demanding and highly sensitive to fixation, it too often depends
                            on chance—emerging from rare moments of serendipity rather than systematic discovery.
                        </p>

                        <div className="callout-box">
                            <p>
                                This white paper introduces <strong>SMART</strong>—<span className="smart-letter">S</span>earch,
                                <span className="smart-letter">M</span>ap, <span className="smart-letter">A</span>dapt,
                                <span className="smart-letter">R</span>efine, and <span className="smart-letter">T</span>est—a
                                human-AI collaborative framework that turns analogical discovery from serendipity into a
                                systematic, end-to-end process.
                            </p>
                        </div>

                        <p>
                            The impact of our framework has been validated in peer-reviewed research, enterprise collaborations,
                            and global innovation challenges, including multiple awards in top-tier HCI and machine learning
                            venues (CHI, CSCW, KDD) and publications in top journals such as <em>Proceedings of the National
                                Academy of Sciences</em>.
                        </p>
                    </motion.div>
                </section>

                {/* SMART Framework Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="framework-divider"
                >
                    <span className="divider-text">The SMART Framework</span>
                </motion.div>

                {/* 1. Search at Scale */}
                <section id="search" className="paper-section smart-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <span className="section-letter">S</span>
                            <h2>Search at Scale</h2>
                        </div>
                        <p>
                            Experts face a fundamental challenge in searching for analogical solutions from distant fields:
                            the same expertise that fuels insight can trap them in familiar approaches. Existing computational
                            approaches face similar challenges: keyword or embedding-based search methods rely on surface
                            co-occurrences, while analogies require looking beyond to deep structural similarities,
                            and LLM-based approaches suffer from mode collapse resulting in homogeneous ideas over time.
                        </p>
                        <p>
                            We introduced a new way of learning analogous structure at scale through <strong>purpose–mechanism schemas</strong>:
                            learning different vector embeddings for the purpose a system is trying to achieve versus the
                            mechanism it uses to achieve that purpose.
                        </p>

                        <div className="example-highlight">
                            <p>
                                A yogurt maker&apos;s <em>purpose</em> is to make yogurt while its <em>mechanism</em> involves
                                using a vacuum cooled drum. Looking for other ideas with similar purposes but different
                                mechanisms results in analogous inspirations like sharkskin microgrooves for
                                &quot;reducing friction without lubricants.&quot;
                            </p>
                        </div>

                        <p>
                            In controlled studies, this method doubled the number of high-quality ideas generated,
                            and can unlock the value of millions of unstructured ideas functionally relevant to a
                            target problem.
                        </p>

                        <div className="figure-group">
                            <figure className="paper-figure">
                                <img src="/white_paper/purpose_mechanism_1.png" alt="Purpose-Mechanism Schema overview" />
                                <figcaption>
                                    <strong>Figure 1a.</strong> The system breaks down ideas into dual vector embedding
                                    representations using deep learning with siamese networks.
                                </figcaption>
                            </figure>
                            <figure className="paper-figure">
                                <img src="/white_paper/purpose_mechanism_2.png" alt="Purpose-Mechanism search results" />
                                <figcaption>
                                    <strong>Figure 1b.</strong> Given a Purpose, the system can search for diverse,
                                    analogous Mechanisms from outside the user&apos;s domain to break cognitive fixation.
                                </figcaption>
                            </figure>
                        </div>
                    </motion.div>
                </section>

                {/* 2. Map to Target Domain */}
                <section id="map" className="paper-section smart-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <span className="section-letter">M</span>
                            <h2>Map to Target Domain</h2>
                        </div>
                        <p>
                            Simply finding a novel analogy is not enough; R&D teams often struggle to &quot;map&quot; the abstract
                            concept to their specific, real-world problem. This cognitive gap is where most analogical
                            innovation fails.
                        </p>
                        <p>
                            We developed <strong>BioSpark</strong>, a system that computationally bridges this gap.
                            It not only finds inspirations but automatically transfers them to the target domain, generating
                            specific application scenarios and suggesting concrete, manufacturable materials.
                        </p>

                        <div className="example-highlight">
                            <p>
                                A designer working on a bike rack struggles with &quot;snail mucus&quot; as inspiration.
                                BioSpark translates this into: how the snail&apos;s adaptive adhesion could become a
                                hydrogel-based clamp for varied bike frames, including specific hydrogels that remain
                                pliable in winter conditions.
                            </p>
                        </div>

                        <p>
                            In studies, designers using this system explored a wider design space and produced
                            significantly more creative ideas than those using standard generative AI.
                        </p>

                        <div className="figure-group">
                            <figure className="paper-figure">
                                <img src="/white_paper/biospark_1.png" alt="BioSpark system interface" />
                                <figcaption>
                                    <strong>Figure 2a.</strong> BioSpark bridges the &quot;transfer gap&quot; by translating
                                    abstract biological inspirations into concrete engineering concepts.
                                </figcaption>
                            </figure>
                            <figure className="paper-figure">
                                <img src="/white_paper/biospark_2.png" alt="BioSpark results" />
                                <figcaption>
                                    <strong>Figure 2b.</strong> Users generated more ideas with higher creative quality
                                    compared to a generative AI baseline.
                                </figcaption>
                            </figure>
                        </div>
                    </motion.div>
                </section>

                {/* 3. Adapt with Human Expertise */}
                <section id="adapt" className="paper-section smart-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <span className="section-letter">A</span>
                            <h2>Adapt with Human Expertise</h2>
                        </div>
                        <p>
                            Breakthroughs rarely come from adopting an external idea wholesale; they come from experts
                            adapting an idea&apos;s core principle using their deep domain knowledge. The Wright brothers,
                            for instance, adapted the <em>principle</em> of shear from a cardboard box, not the material itself.
                        </p>
                        <p>
                            Our research focuses on computationally facilitating this expert adaptation. We found that
                            feeding experts targeted analogical ideas (e.g., a &quot;fin structure&quot;) prompts creative leaps
                            (e.g., to &quot;nanoscale fins&quot; for chip cooling).
                        </p>
                        <p>
                            We also applied this in collaborative settings with organizations like Conservation X Labs,
                            developing algorithms to match teams from diverse domains that share a deep structural problem.
                            After refining our matching algorithm to find the &quot;sweet spot&quot; of cognitive distance, teams showed
                            significant improvements in idea novelty and usefulness.
                        </p>

                        <div className="figure-group">
                            <figure className="paper-figure">
                                <img src="/white_paper/adaptation_1.png" alt="Creative adaptation process" />
                                <figcaption>
                                    <strong>Figure 3a.</strong> Creative adaptation relies on bringing in expert tacit knowledge,
                                    like the Wright brothers translating cardboard box shearing to a pulley system for wing control.
                                </figcaption>
                            </figure>
                            <figure className="paper-figure">
                                <img src="/white_paper/adaptation_2.png" alt="Adaptation results" />
                                <figcaption>
                                    <strong>Figure 3b.</strong> Our systems lead to 5x+ more frequent creative adaptations
                                    versus traditional approaches.
                                </figcaption>
                            </figure>
                        </div>
                    </motion.div>
                </section>

                {/* 4. Refine and Iterate */}
                <section id="refine" className="paper-section smart-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <span className="section-letter">R</span>
                            <h2>Refine and Iterate</h2>
                        </div>
                        <p>
                            Innovation is not a single &quot;lightning strike&quot; but a complex, branching process of refinement.
                            Dyson&apos;s vacuum, for example, required 5,000 iterations to solve the cascade of sub-problems.
                            Standard AI tools, with their linear, conversational interfaces, are fundamentally mismatched
                            to this non-linear exploration, causing users to abandon paths prematurely.
                        </p>
                        <p>
                            We developed <strong>Flexmind</strong>, a system that provides a non-linear canvas where an AI partner
                            actively helps the user explore and solve emergent sub-problems. This &quot;tool for thought&quot;
                            mirrors the branching nature of R&D.
                        </p>
                        <p>
                            We found that users of Flexmind explored many more solutions in greater depth,
                            and statistical analysis confirmed that this deeper exploration leads to higher-quality ideas,
                            as rated by senior R&D leaders.
                        </p>

                        <div className="figure-group">
                            <figure className="paper-figure">
                                <img src="/white_paper/flexmind_1.png" alt="Flexmind interface" />
                                <figcaption>
                                    <strong>Figure 4a.</strong> Flexmind enables deep, branching exploration required for
                                    real R&D. Its visual canvas encourages pursuing multiple sub-problems.
                                </figcaption>
                            </figure>
                            <figure className="paper-figure">
                                <img src="/white_paper/flexmind_2.png" alt="Flexmind exploration patterns" />
                                <figcaption>
                                    <strong>Figure 4b.</strong> Unlike linear chat interfaces, Flexmind results in richer
                                    idea structures that lead to breakthroughs.
                                </figcaption>
                            </figure>
                        </div>
                    </motion.div>
                </section>

                {/* 5. Test Viability */}
                <section id="test" className="paper-section smart-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header">
                            <span className="section-letter">T</span>
                            <h2>Test Viability</h2>
                        </div>
                        <p>
                            Turning inspiration into impact requires more than imagination—it demands evidence that an
                            idea can work and a path to prove it. Our latest work-in-progress, <strong>Inspyral</strong>, extends
                            this capability by mapping early ideas to analogous solutions across domains to help teams
                            evaluate viability, identifying potential collaborators and implementation partners, and
                            estimating technology readiness and potential impact.
                        </p>

                        <div className="example-highlight">
                            <p>
                                When exploring novel flossing technologies, Inspyral surfaces analogs in
                                soft-robotic cleaning systems that use magnetic actuation to navigate confined spaces—offering
                                concrete cues about materials, control strategies, and feasible validation steps.
                                It connects these insights to potential partners and next-step experiments.
                            </p>
                        </div>

                        {/* Interactive Figure 5 - Video Demo */}
                        <figure className="paper-figure video-figure">
                            <div className="video-wrapper">
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="demo-video"
                                >
                                    <source src="/white_paper/executive_briefing.mov" type="video/quicktime" />
                                    <source src="/white_paper/executive_briefing.mov" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <figcaption>
                                <strong>Figure 5.</strong> An example executive briefing generated by our system for a novel
                                &quot;Self-Healing Vitrimer Dome Field&quot; concept—a bio-based interior surface that uses textured
                                domes to intercept damage and ambient solar heat to erase scratches. The system automatically
                                synthesizes cross-domain evidence, validates technical claims, identifies breakthrough potential,
                                and generates a complete validation workflow with phased development recommendations.
                            </figcaption>
                        </figure>
                    </motion.div>
                </section>

                {/* Building Your Innovation Pipeline */}
                <section id="pipeline" className="paper-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Building Your Innovation Pipeline</h2>
                        <p>
                            Our research has established a computational framework for making innovation a scalable,
                            evidence-driven process. We are now operationalizing this work into an end-to-end, human-AI
                            collaborative platform that accelerates the full journey from idea to impact.
                        </p>
                        <p>
                            This system unites systematic <strong className="smart-term">Search</strong>, guided <strong className="smart-term">Mapping</strong>,
                            expert <strong className="smart-term">Adaptation</strong>, iterative <strong className="smart-term">Refinement</strong>, and rapid <strong className="smart-term">Testing</strong> into a cohesive ecosystem. At its core, the platform is designed
                            to augment—not replace—human expertise, while leveraging AI in a way that avoids
                            the risk of linear thinking and homogeneity.
                        </p>

                        <div className="callout-box accent">
                            <p>
                                We are now inviting forward-looking R&D partners to collaborate on pilot deployments,
                                helping shape the next generation of innovation systems.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Collaborative User Study */}
                <section id="collaboration" className="paper-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Collaborative Study with R&D Teams</h2>
                        <p>
                            To tailor this platform to your specific needs, one way of engaging may
                            include a &quot;white glove&quot; co-design partnership. Our proposed collaboration follows
                            a structured, multi-phase approach:
                        </p>

                        <div className="phases-grid">
                            <div className="phase-card">
                                <div className="phase-header">
                                    <span className="phase-number">Phase 1</span>
                                    <span className="phase-duration">2 weeks</span>
                                </div>
                                <h3>Discovery & Scoping</h3>
                                <p>
                                    Deep-dive discussions to map your innovation pipeline and identify a high-impact
                                    R&D problem with clear success metrics.
                                </p>
                            </div>

                            <div className="phase-card">
                                <div className="phase-header">
                                    <span className="phase-number">Phase 2</span>
                                    <span className="phase-duration">2 weeks</span>
                                </div>
                                <h3>Co-Design & Iteration</h3>
                                <p>
                                    Work directly alongside your experts as co-design partners, deploying our engine
                                    and rapidly iterating based on real-time feedback.
                                </p>
                            </div>

                            <div className="phase-card">
                                <div className="phase-header">
                                    <span className="phase-number">Phase 3</span>
                                    <span className="phase-duration">2+ weeks</span>
                                </div>
                                <h3>Pilot & Validation</h3>
                                <p>
                                    A structured pilot study on real R&D tasks, followed by month-long deployment
                                    to assess sustained impact and long-term value.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* References */}
                <section id="references" className="paper-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>References</h2>
                        <ol className="references-list">
                            <li>
                                <a href="https://www.pnas.org/doi/abs/10.1073/pnas.1807185116" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Scaling up analogical innovation with crowds and AI</span>
                                </a>
                                <span className="ref-authors">Kittur, Aniket, Lixiu Yu, Tom Hope, Joel Chan, Hila Lifshitz-Assaf, Karni Gilon, Felicia Ng, Robert E. Kraut, and Dafna Shahaf.</span>
                                <span className="ref-venue">Proceedings of the National Academy of Sciences 116, no. 6 (2019): 1870-1877.</span>
                            </li>
                            <li className="has-award">
                                <a href="https://dl.acm.org/doi/abs/10.1145/3097983.3098038" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Accelerating innovation through analogy mining</span>
                                </a>
                                <span className="ref-award best-paper"><BestPaperIcon /> Best Paper Award</span>
                                <span className="ref-authors">Hope, Tom, Joel Chan, Aniket Kittur, and Dafna Shahaf.</span>
                                <span className="ref-venue">In Proceedings of the 23rd ACM SIGKDD international conference on knowledge discovery and data mining, pp. 235-243. 2017.</span>
                            </li>
                            <li>
                                <a href="https://dl.acm.org/doi/abs/10.1145/3274300" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Solvent: A mixed initiative system for finding analogies between research papers</span>
                                </a>
                                <span className="ref-authors">Chan, Joel, Joseph Chee Chang, Tom Hope, Dafna Shahaf, and Aniket Kittur.</span>
                                <span className="ref-venue">Proceedings of the ACM on Human-Computer Interaction 2, no. CSCW (2018): 1-21.</span>
                            </li>
                            <li>
                                <a href="https://dl.acm.org/doi/abs/10.1145/3491102.3517434" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Scaling creative inspiration with fine-grained functional aspects of ideas</span>
                                </a>
                                <span className="ref-authors">Hope, Tom, Ronen Tamari, Daniel Hershcovich, Hyeonsu B. Kang, Joel Chan, Aniket Kittur, and Dafna Shahaf.</span>
                                <span className="ref-venue">In Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems, pp. 1-15. 2022.</span>
                            </li>
                            <li>
                                <a href="https://dl.acm.org/doi/full/10.1145/3530013" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Augmenting scientific creativity with an analogical search engine</span>
                                </a>
                                <span className="ref-authors">Kang, Hyeonsu B., Xin Qian, Tom Hope, Dafna Shahaf, Joel Chan, and Aniket Kittur.</span>
                                <span className="ref-venue">ACM Transactions on Computer-Human Interaction 29, no. 6 (2022): 1-36.</span>
                            </li>
                            <li>
                                <a href="https://dl.acm.org/doi/abs/10.1145/3173574.3173695" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Analogy mining for specific design needs</span>
                                </a>
                                <span className="ref-authors">Gilon, Karni, Joel Chan, Felicia Y. Ng, Hila Liifshitz-Assaf, Aniket Kittur, and Dafna Shahaf.</span>
                                <span className="ref-venue">In Proceedings of the 2018 CHI conference on human factors in computing systems, pp. 1-11. 2018.</span>
                            </li>
                            <li className="has-award">
                                <a href="https://dl.acm.org/doi/full/10.1145/3706598.3714053" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">BioSpark: Beyond Analogical Inspiration to LLM-augmented Transfer</span>
                                </a>
                                <span className="ref-award honorable-mention"><HonorableMentionIcon /> Honorable Mention Award</span>
                                <span className="ref-authors">Kang, Hyeonsu B., David Chuan-En Lin, Yan-Ying Chen, Matthew K. Hong, Nikolas Martelaro, and Aniket Kittur.</span>
                                <span className="ref-venue">In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, pp. 1-29. 2025.</span>
                            </li>
                            <li>
                                <a href="https://dl.acm.org/doi/full/10.1145/3706598.3713397" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">Inkspire: supporting design exploration with generative ai through analogical sketching</span>
                                </a>
                                <span className="ref-authors">Lin, David Chuan-En, Hyeonsu B. Kang, Nikolas Martelaro, Aniket Kittur, Yan-Ying Chen, and Matthew K. Hong.</span>
                                <span className="ref-venue">In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, pp. 1-18. 2025.</span>
                            </li>
                            <li>
                                <a href="https://arxiv.org/abs/2509.21685" target="_blank" rel="noopener noreferrer" className="ref-link">
                                    <span className="ref-title">FlexMind: Supporting Deeper Creative Thinking with LLMs</span>
                                </a>
                                <span className="ref-authors">Yang, Yaqing, Vikram Mohanty, Yan-Ying Chen, Matthew K. Hong, Nikolas Martelaro, and Aniket Kittur.</span>
                                <span className="ref-venue">arXiv preprint arXiv:2509.21685 (2025).</span>
                            </li>
                        </ol>
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="paper-footer">
                    <Link href="/" className="cta-button">
                        ← Back to Analogical Engines
                    </Link>
                </footer>
            </main>
        </div>
    );
}
