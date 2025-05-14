import Intl from "../language";

class Portuguese implements Intl {
    getTitle(): string {
        return "Iaee!"
    }
    getDescription(): string {
        return "Meu nome é Guilherme e esse é o meu site! Sou desenvolvedor Mobile com expertise em Android Nativo, React Native, Flutter e iOS, com experiência desde 2022. Tenho perfil técnico e estratégico, gosto de trabalhar em equipe, mas também valorizo tempo de foco em código."
    }
    getMyMainTechnologies(): string {
        return "Minhas principais tecnologias são:"
    }
    getChangeLanguageLabel(): string {
        return "Trocar linguagem"
    }
    getChangeThemeLabel(): string {
        return "Trocar tema"
    }
    getFirstTechLabel(): string {
        return "Android Nativo (Kotlin/Java) - 2+ anos"
    }
    getSecondTechLabel(): string {
        return "React Native - 1+ ano"
    }
    getThirdTechLabel(): string {
        return "Flutter - 1,5 anos"
    }
    getFourthTechLabel(): string {
        return "iOS (Swift/Objective-C) - Experiência recente"
    }
    getAboutMeLabel(): string {
        return "Sobre mim"
    }
    getMyExperienceLabel(): string {
        return "Minha Experiência"
    }
    getMyProjectsLabel(): string {
        return "Meus projetos"
    }
    getTooltipOnImageLabel(): string {
        return "Literalmente eu!"
    }
    getExperienceItemTrademapTitle(): string {
        return "Trademap - Desenvolvedor Mobile"
    }
    getExperienceItemTrademapPeriod(): string {
        return "Janeiro 2022 - Dezembro 2023"
    }
    getExperienceItemTrademapDescription(): string {
        return "Comecei como estagiário em Flutter, depois migrei para desenvolvimento Android Nativo em aplicações B2B. Liderei a integração do Design System com o Figma usando FigmaTokens e TokenDictionary, aumentando a produtividade dos times de Design e Mobile com temas dinâmicos. Trabalhei em aplicativos para instituições financeiras como a Ágora Investimentos, onde desenvolvi uma PoC utilizando Jetpack Compose."
    }
    getExperienceItemBBTitle(): string {
        return "Banco do Brasil - Desenvolvedor Mobile"
    }
    getExperienceItemBBPeriod(): string {
        return "Dezembro 2023 - Presente"
    }
    getExperienceItemBBDescription(): string {
        return "Trabalhando com Android Nativo e React Native no aplicativo do Banco do Brasil. Como parte do time de segurança, trabalhei com tokens JWT, refatorei a montagem de requisições com OkHttp3 e estou ajudando na implementação do protocolo FIDO. Recentemente comecei a trabalhar também com iOS (Swift e Objective-C)."
    }
    getContactMeLabel(): string {
        return "Entre em Contato"
    }
    getProjectsDescription(): string {
        return "Aqui estão alguns projetos importantes em que trabalhei:"
    }
    getProjectDesignSystemTitle(): string {
        return "Integração do Design System"
    }
    getProjectDesignSystemDescription(): string {
        return "Liderei a integração entre Design System e Figma usando FigmaTokens e TokenDictionary, aumentando a produtividade com temas dinâmicos."
    }
    getProjectJetpackComposeTitle(): string {
        return "PoC com Jetpack Compose"
    }
    getProjectJetpackComposeDescription(): string {
        return "Desenvolvi uma Prova de Conceito utilizando Jetpack Compose para a Ágora Investimentos."
    }
    getProjectSecurityTitle(): string {
        return "Melhorias de Segurança"
    }
    getProjectSecurityDescription(): string {
        return "Trabalhei em implementações de segurança incluindo manipulação de tokens JWT, otimização de requisições com OkHttp3 e implementação do protocolo FIDO."
    }
}

export default Portuguese