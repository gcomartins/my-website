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
        return "My projects"
    }
    getTooltipOnImageLabel(): string {
        return "Literally me!"
    }
    getExperienceItemTrademapTitle(): string {
        return "Trademap - Mobile Developer"
    }
    getExperienceItemTrademapPeriod(): string {
        return "January 2022 - December 2023"
    }
    getExperienceItemTrademapDescription(): string {
        return "Started as a Flutter intern, later moved to Native Android development for B2B applications. Led the integration of Design System with Figma using FigmaTokens and TokenDictionary, increasing productivity of Design and Mobile teams with dynamic themes. Worked on applications for financial institutions like Ágora Investimentos, where I developed a PoC using Jetpack Compose."
    }
    getExperienceItemBBTitle(): string {
        return "Banco do Brasil - Mobile Developer"
    }
    getExperienceItemBBPeriod(): string {
        return "December 2023 - Present"
    }
    getExperienceItemBBDescription(): string {
        return "Working with both Android Native and React Native on the Banco do Brasil app. Part of the security team, I've worked with JWT tokens, refactored request building with OkHttp3, and am helping implement the FIDO protocol. Recently started working with iOS (Swift and Objective-C)."
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
        return "I'm a mobile developer with a passion for crafting efficient, user-friendly applications. My technical journey began in 2022, and I've since developed expertise across multiple platforms and frameworks."
    }
    getAboutMeProfileLabel(): string {
        return "My Profile"
    }
    getAboutMeTechnicalProfile(): string {
        return "Technical and strategic, with a passion for performance, usability, and clean architecture. I enjoy finding elegant solutions to complex problems and building applications that scale."
    }
    getAboutMeCollaborationProfile(): string {
        return "I thrive in collaborative environments but also value deep focus time for coding. I believe in balancing team synergy with individual productivity to achieve optimal results."
    }
    getAboutMeCareerGoals(): string {
        return "Currently seeking opportunities in freelance projects, as well as national and international positions where I can leverage my expertise and continue growing as a developer."
    }
    
    // Enhanced Projects section
    getProjectsEnhancedDescription(): string {
        return "Here are highlighted projects that showcase my technical expertise and problem-solving approach:"
    }
    getProjectDesignSystemEnhancedTitle(): string {
        return "Design System Integration at Trademap"
    }
    getProjectDesignSystemEnhancedDescription(): string {
        return "Bridging design and development with an integrated token system"
    }
    getProjectDesignSystemContext(): string {
        return "Context: Trademap needed to streamline the design-to-development workflow and ensure consistency across financial applications."
    }
    getProjectDesignSystemChallenges(): string {
        return "Challenges: Manual style implementation was leading to inconsistencies, slowing down development, and making theme changes difficult to implement."
    }
    getProjectDesignSystemSolutions(): string {
        return "Solutions: Led the integration of Design System with Figma using FigmaTokens and TokenDictionary, creating a seamless pipeline from design to code."
    }
    getProjectDesignSystemResults(): string {
        return "Results: Significantly increased productivity of both Design and Mobile teams, enabled dynamic themes, and reduced design implementation time by approximately 40%."
    }
    getProjectDesignSystemStack(): string {
        return "Stack: Flutter, FigmaTokens, TokenDictionary, Design Systems"
    }
    
    getProjectJetpackComposeEnhancedTitle(): string {
        return "Jetpack Compose PoC for Ágora Investimentos"
    }
    getProjectJetpackComposeEnhancedDescription(): string {
        return "Modernizing financial app interfaces with declarative UI"
    }
    getProjectJetpackComposeContext(): string {
        return "Context: Ágora Investimentos needed to modernize their Android application and evaluate Jetpack Compose for future UI development."
    }
    getProjectJetpackComposeChallenges(): string {
        return "Challenges: The existing application used traditional XML layouts, making updates time-consuming and limiting animation capabilities."
    }
    getProjectJetpackComposeSolutions(): string {
        return "Solutions: Developed a Proof of Concept using Jetpack Compose to demonstrate improved development speed, code readability, and enhanced UI capabilities."
    }
    getProjectJetpackComposeResults(): string {
        return "Results: Successfully showcased the benefits of Jetpack Compose, leading to its adoption for new feature development and gradual migration plan."
    }
    getProjectJetpackComposeStack(): string {
        return "Stack: Android, Kotlin, Jetpack Compose, Material Design"
    }
    
    getProjectSecurityEnhancedTitle(): string {
        return "Security Enhancements at Banco do Brasil"
    }
    getProjectSecurityEnhancedDescription(): string {
        return "Strengthening mobile banking security with advanced protocols"
    }
    getProjectSecurityContext(): string {
        return "Context: As part of the security team at Banco do Brasil, I worked on improving the authentication and data protection systems in the mobile app."
    }
    getProjectSecurityChallenges(): string {
        return "Challenges: The app needed enhanced security measures while maintaining good performance and user experience."
    }
    getProjectSecuritySolutions(): string {
        return "Solutions: Implemented JWT token handling for secure authentication, refactored network request building with OkHttp3, and contributed to the FIDO protocol implementation."
    }
    getProjectSecurityResults(): string {
        return "Results: Improved app security posture, reduced authentication-related issues, and prepared the app for passwordless authentication with FIDO."
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
        return "Interested in discussing a project or opportunity? Feel free to reach out through any of these channels:"
    }
}

export default English