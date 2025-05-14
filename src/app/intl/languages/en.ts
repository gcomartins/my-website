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
}

export default English