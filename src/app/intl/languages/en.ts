import Intl from "../language";

class English implements Intl {
    getTitle(): string {
        return "Hey, there!"
    }
    getDescription(): string {
        return "My name is Guilherme and this is my website!\nI am a mobile developer with expertise in Android Native, React Native, Flutter, and iOS, with experience since 2022. I'm both technically skilled and strategic, enjoying team collaboration while valuing focused coding time."
    }
    getMyMainTechnologies(): string {
        return "My main technologies are:"
    }
    getChangeLanguageLabel(): string {
        return "Change language"
    }
    getChangeThemeLabel(): string {
        return "Change theme"
    }
    getFirstTechLabel(): string {
        return "Android Native (Kotlin/Java) - 2+ years"
    }
    getSecondTechLabel(): string {
        return "React Native - 1+ year"
    }
    getThirdTechLabel(): string {
        return "Flutter - 1.5 years"
    }
    getFourthTechLabel(): string {
        return "iOS (Swift/Objective-C) - Recent experience"
    }
    getAboutMeLabel(): string {
        return "About me"
    }
    getMyExperienceLabel(): string {
        return "My Experience"
    }
    getMyProjectsLabel(): string {
        return "My Achievements"
    }
    getTooltipOnImageLabel(): string {
        return "Literally me!"
    }
    getExperienceItemValemobiTitle(): string {
        return "Valemobi - Mobile Developer"
    }
    getExperienceItemValemobiPeriod(): string {
        return "January 2022 - December 2023"
    }
    getExperienceItemValemobiDescription(): string {
        return "Started as a Flutter intern at Trademap in January 2022. After 1.5 years, I was promoted to work with Native Android for B2B applications. Led the integration of Design System with Figma using FigmaTokens and TokenDictionary, significantly increasing productivity of Design and Mobile teams with dynamic themes. Worked on applications for financial institutions like Ágora Investimentos, where I developed a PoC using Jetpack Compose that substantially reduced UI development time."
    }
    getExperienceItemBBTitle(): string {
        return "Banco do Brasil - Mobile Developer"
    }
    getExperienceItemBBPeriod(): string {
        return "December 2023 - Present"
    }
    getExperienceItemBBDescription(): string {
        return "Working with both Android Native and React Native on the Banco do Brasil app. Part of the security team, I've enhanced authentication systems with JWT tokens, reduced API request failures through OkHttp3 refactoring, and am helping implement the FIDO protocol for passwordless authentication. Recently expanded my skill set to include iOS development (Swift and Objective-C)."
    }
    getContactMeLabel(): string {
        return "Contact Me"
    }
    getProjectsDescription(): string {
        return "Here are some key projects I've worked on:"
    }
    getProjectDesignSystemTitle(): string {
        return "Design System Integration"
    }
    getProjectDesignSystemDescription(): string {
        return "Led the integration between Design System and Figma using FigmaTokens and TokenDictionary, enhancing productivity with dynamic themes."
    }
    getProjectJetpackComposeTitle(): string {
        return "Jetpack Compose PoC"
    }
    getProjectJetpackComposeDescription(): string {
        return "Developed a Proof of Concept using Jetpack Compose for Ágora Investimentos."
    }
    getProjectSecurityTitle(): string {
        return "Security Enhancements"
    }
    getProjectSecurityDescription(): string {
        return "Worked on security implementations including JWT token handling, OkHttp3 request optimization, and FIDO protocol implementation."
    }
    
    // Enhanced About Me section
    getAboutMeEnhancedDescription(): string {
        return "I'm a passionate mobile developer focused on creating efficient, user-friendly applications that deliver measurable business value. My technical journey began in 2022, and I've since developed expertise across multiple platforms and frameworks. Strong communicator, proactive in cross-functional teams, and committed to continuous improvement."
    }
    getAboutMeProfileLabel(): string {
        return "My Profile"
    }
    getAboutMeTechnicalProfile(): string {
        return "Technical and strategic, with a passion for performance optimization, intuitive user experiences, and clean architecture. I excel at finding elegant solutions to complex problems, reducing technical debt, and building scalable applications that evolve with business needs."
    }
    getAboutMeCollaborationProfile(): string {
        return "I thrive in collaborative environments while maintaining deep focus when needed. I believe in balancing team synergy with individual productivity, consistently delivering results that exceed expectations through effective communication and adaptability."
    }
    getAboutMeCareerGoals(): string {
        return "Currently seeking opportunities in freelance projects, as well as national and international positions where I can leverage my expertise and continue growing as a developer. Portfolio available in English and Portuguese. Looking forward to contributing to global teams."
    }
    
    // Enhanced Projects section
    getProjectsEnhancedDescription(): string {
        return "Here are highlighted projects that showcase my technical expertise and problem-solving approach with meaningful results:"
    }
    getProjectDesignSystemEnhancedTitle(): string {
        return "Design System Integration at Trademap"
    }
    getProjectDesignSystemEnhancedDescription(): string {
        return "Streamlining collaboration between design and development using a token-based system"
    }
    getProjectDesignSystemContext(): string {
        return "Context: Trademap needed to streamline the design-to-development workflow and ensure consistency across two financial applications: TradeMap (investment platform) and GranaMap (personal finance management app)."
    }
    getProjectDesignSystemChallenges(): string {
        return "Challenges: Manual style implementation was leading to inconsistencies, slowing down development, and making theme changes difficult to implement."
    }
    getProjectDesignSystemSolutions(): string {
        return "Solutions: Led the integration of Design System with Figma using FigmaTokens and TokenDictionary, creating a seamless pipeline from design to code that significantly reduced implementation errors."
    }
    getProjectDesignSystemResults(): string {
        return "Results: Substantially increased productivity of both Design and Mobile teams, enabled dynamic themes that dramatically cut theme switching development time, and reduced overall design implementation time, saving many development hours per sprint."
    }
    getProjectDesignSystemStack(): string {
        return "Stack: Flutter, FigmaTokens, TokenDictionary, Design Systems"
    }
    
    getProjectJetpackComposeEnhancedTitle(): string {
        return "Jetpack Compose PoC for Ágora Investimentos"
    }
    getProjectJetpackComposeEnhancedDescription(): string {
        return "Modernizing financial app interfaces with declarative UI for enhanced user experience"
    }
    getProjectJetpackComposeContext(): string {
        return "Context: Ágora Investimentos needed to modernize their Android application and evaluate Jetpack Compose for future UI development."
    }
    getProjectJetpackComposeChallenges(): string {
        return "Challenges: The existing application used traditional XML layouts, making updates time-consuming and limiting animation capabilities."
    }
    getProjectJetpackComposeSolutions(): string {
        return "Solutions: Developed a Proof of Concept using Jetpack Compose to demonstrate improved development speed, code readability, and enhanced UI capabilities with considerably less code."
    }
    getProjectJetpackComposeResults(): string {
        return "Results: Successfully showcased the benefits of Jetpack Compose, leading to its adoption for new feature development and a gradual migration plan that significantly reduced UI development time and bug reports."
    }
    getProjectJetpackComposeStack(): string {
        return "Stack: Android, Kotlin, Jetpack Compose, Material Design"
    }
    
    getProjectSecurityEnhancedTitle(): string {
        return "Security Enhancements at Banco do Brasil"
    }
    getProjectSecurityEnhancedDescription(): string {
        return "Strengthening mobile banking security with advanced protocols while maintaining performance"
    }
    getProjectSecurityContext(): string {
        return "Context: As part of the security team at Banco do Brasil, I worked on improving the authentication and data protection systems in the mobile app used by millions of customers."
    }
    getProjectSecurityChallenges(): string {
        return "Challenges: The app needed enhanced security measures while maintaining good performance and user experience for a large-scale user base."
    }
    getProjectSecuritySolutions(): string {
        return "Solutions: Implemented JWT token handling for secure authentication, refactored network request building with OkHttp3 improving response times, and contributed to the FIDO protocol implementation."
    }
    getProjectSecurityResults(): string {
        return "Results: Improved app security posture, reduced authentication-related issues, and prepared the app for passwordless authentication with FIDO, enhancing both security and user experience for millions of users."
    }
    getProjectSecurityStack(): string {
        return "Stack: Android Native, React Native, JWT, OkHttp3, FIDO, iOS (Swift/Objective-C)"
    }
    
    // Technical Skills section
    getSkillsTitle(): string {
        return "Technical Skills"
    }
    getMobileSkillsTitle(): string {
        return "Mobile Development"
    }
    getMobileSkillsDescription(): string {
        return "Flutter, Android (Java/Kotlin), React Native, iOS (Swift/Objective-C)"
    }
    getDesignTokensTitle(): string {
        return "Design Tokens & Themes"
    }
    getDesignTokensDescription(): string {
        return "FigmaTokens, TokenDictionary, Design Systems"
    }
    getSecuritySkillsTitle(): string {
        return "Security"
    }
    getSecuritySkillsDescription(): string {
        return "JWT, FIDO protocol, Authentication systems"
    }
    getNetworkingTitle(): string {
        return "Networking"
    }
    getNetworkingDescription(): string {
        return "Retrofit, OkHttp3, RESTful APIs"
    }
    getToolsTitle(): string {
        return "Tools"
    }
    getToolsDescription(): string {
        return "Git, GitHub, CI/CD pipelines"
    }
    getMethodologiesTitle(): string {
        return "Methodologies"
    }
    getMethodologiesDescription(): string {
        return "Scrum, Kanban, Agile development"
    }
    
    // Contact section
    getContactDescription(): string {
        return "Interested in discussing a project or opportunity? I'm open to both local and international collaborations. Feel free to reach out through any of these channels:"
    }

    // CapivaraHosting Collaborative Work section
    getCollaborativeWorkLabel(): string {
        return "Collaborative Work"
    }

    getCollaborativeWorkDescription(): string {
        return "Projects developed in collaboration with other developers at the CapivaraHosting organization:"
    }

    getCapivaraHostingTitle(): string {
        return "CapivaraHosting - Collaborative Projects"
    }

    getCapivaraHostingDescription(): string {
        return "Working together with Matheu5Leone on hosting solutions and web applications."
    }

    getCapivaraProject1Title(): string {
        return "Web Hosting System"
    }

    getCapivaraProject1Description(): string {
        return "Development of a scalable and easy-to-maintain web hosting platform"
    }

    getCapivaraProject1Context(): string {
        return "Context: We identified the need for a more accessible and flexible hosting solution for independent developers and small businesses."
    }

    getCapivaraProject1Challenges(): string {
        return "Challenges: Implementing a secure and scalable infrastructure with limited resources, maintaining affordable costs, and ensuring high availability."
    }

    getCapivaraProject1Solutions(): string {
        return "Solutions: We created a container-based architecture, automated deployment processes with CI/CD, and implemented real-time monitoring."
    }

    getCapivaraProject1Results(): string {
        return "Results: We developed a stable platform that supports multiple projects simultaneously, with minimal downtime and quick recovery from failures."
    }

    getCapivaraProject1Stack(): string {
        return "Stack: Docker, Kubernetes, Nginx, GitHub Actions, Node.js, Prometheus"
    }

    getCapivaraProject2Title(): string {
        return "RESTful APIs for Integrations"
    }

    getCapivaraProject2Description(): string {
        return "Creation of APIs for integration between client systems and our infrastructure"
    }

    getCapivaraProject2Context(): string {
        return "Context: Our clients needed ways to integrate their systems with our infrastructure programmatically and securely."
    }

    getCapivaraProject2Challenges(): string {
        return "Challenges: Developing flexible, well-documented, secure APIs with adequate performance for different use cases."
    }

    getCapivaraProject2Solutions(): string {
        return "Solutions: We implemented a microservices architecture with JWT authentication, automatic documentation with Swagger, and rate limiting for protection against abuse."
    }

    getCapivaraProject2Results(): string {
        return "Results: The APIs allowed clients to automate deployment, monitoring, and resource management processes, reducing manual interventions and improving system reliability."
    }

    getCapivaraProject2Stack(): string {
        return "Stack: Node.js, Express, MongoDB, JWT, Swagger, Redis"
    }

    // Vibe Coding Projects section
    getVibeCodingLabel(): string {
        return "Vibe Coding Projects"
    }

    getVibeCodingDescription(): string {
        return "Personal projects developed with passion for code and user experience:"
    }

    getVibeProject1Title(): string {
        return "Finne - Personal Finance Manager"
    }

    getVibeProject1Description(): string {
        return "Web application for intelligent personal finance management"
    }

    getVibeProject1Context(): string {
        return "Context: I identified the need for a modern and simple solution for personal finance management, focusing on usability and useful insights."
    }

    getVibeProject1Challenges(): string {
        return "Challenges: Developing an intuitive interface that simplified the visualization of complex financial data and creating an automatic transaction categorization system."
    }

    getVibeProject1Solutions(): string {
        return "Solutions: I implemented a modern architecture with React and Firebase, using interactive graphical visualizations and a categorization system based on text patterns."
    }

    getVibeProject1Results(): string {
        return "Results: Finne helps users manage their daily finances, offering insights into spending patterns and saving opportunities."
    }

    getVibeProject1Stack(): string {
        return "Stack: React, Firebase, Material UI, Chart.js, TypeScript"
    }

    getVibeProject1Url(): string {
        return "https://finne-ai-agent.firebaseapp.com/"
    }

    getVibeProject2Title(): string {
        return "Personal Portfolio"
    }

    getVibeProject2Description(): string {
        return "Website for professional display of skills and experiences"
    }

    getVibeProject2Context(): string {
        return "Context: I needed an elegant and functional way to present my professional experience, projects, and technical skills."
    }

    getVibeProject2Challenges(): string {
        return "Challenges: Creating a responsive, minimalist, and easily updatable design with support for multiple languages and themes."
    }

    getVibeProject2Solutions(): string {
        return "Solutions: I developed the site with Next.js, implementing reusable components, theme switching system, and support for multiple languages."
    }

    getVibeProject2Results(): string {
        return "Results: An elegant and modern portfolio that efficiently highlights my skills and projects for potential employers and clients."
    }

    getVibeProject2Stack(): string {
        return "Stack: Next.js, React, TypeScript, CSS-in-JS"
    }

    getVibeProject2Url(): string {
        return "https://gcomartins.github.io/my-website/"
    }

    getVibeProject3Title(): string {
        return "Two Guys - Audiovisual Studio Portfolio"
    }

    getVibeProject3Description(): string {
        return "Website for audiovisual production studio to showcase their services and projects"
    }

    getVibeProject3Context(): string {
        return "Context: An audiovisual production studio needed a professional online presence to showcase their work and attract new clients."
    }

    getVibeProject3Challenges(): string {
        return "Challenges: Creating a visually impactful design that highlighted the studio's audiovisual work while maintaining good performance and user experience."
    }

    getVibeProject3Solutions(): string {
        return "Solutions: I developed a visually appealing layout with subtle animations, video integration, and responsive project gallery."
    }

    getVibeProject3Results(): string {
        return "Results: The site helped the studio establish its online presence, showcasing their portfolio to agencies and potential clients like BAND, Jovem Pan, and Nubank."
    }

    getVibeProject3Stack(): string {
        return "Stack: React, HTML5, CSS3, JavaScript"
    }

    getVibeProject3Url(): string {
        return "https://gcomartins.github.io/two-guys-webapp/"
    }
}

export default English