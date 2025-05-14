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
    getExperienceItemValemobiTitle(): string {
        return "Valemobi - Desenvolvedor Mobile"
    }
    getExperienceItemValemobiPeriod(): string {
        return "Janeiro 2022 - Dezembro 2023"
    }
    getExperienceItemValemobiDescription(): string {
        return "Comecei como estagiário de Flutter na Trademap em janeiro de 2022. Após 1,5 anos, fui promovido para trabalhar com Android Nativo em aplicações B2B. Liderei a integração do Design System com o Figma usando FigmaTokens e TokenDictionary, aumentando significativamente a produtividade dos times de Design e Mobile com temas dinâmicos. Trabalhei em aplicativos para instituições financeiras como a Ágora Investimentos, onde desenvolvi uma PoC utilizando Jetpack Compose que reduziu consideravelmente o tempo de desenvolvimento de UI."
    }
    getExperienceItemBBTitle(): string {
        return "Banco do Brasil - Desenvolvedor Mobile"
    }
    getExperienceItemBBPeriod(): string {
        return "Dezembro 2023 - Presente"
    }
    getExperienceItemBBDescription(): string {
        return "Trabalhando com Android Nativo e React Native no aplicativo do Banco do Brasil. Como parte do time de segurança, aprimorei sistemas de autenticação com tokens JWT, reduzi falhas de requisições API através da refatoração com OkHttp3 e estou ajudando na implementação do protocolo FIDO para autenticação sem senha. Recentemente expandi meu conjunto de habilidades para incluir desenvolvimento iOS (Swift e Objective-C)."
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
    
    // Enhanced About Me section
    getAboutMeEnhancedDescription(): string {
        return "Sou um desenvolvedor mobile apaixonado por criar aplicações eficientes e amigáveis que entregam valor mensurável ao negócio. Minha jornada técnica começou em 2022, e desde então desenvolvi expertise em múltiplas plataformas e frameworks. Comunicador eficaz, proativo em equipes multidisciplinares e comprometido com aprimoramento contínuo."
    }
    getAboutMeProfileLabel(): string {
        return "Meu Perfil"
    }
    getAboutMeTechnicalProfile(): string {
        return "Técnico e estratégico, com paixão por otimização de performance, experiências de usuário intuitivas e arquitetura limpa. Destaco-me em encontrar soluções elegantes para problemas complexos, reduzindo dívida técnica e construindo aplicações escaláveis que evoluem com as necessidades do negócio."
    }
    getAboutMeCollaborationProfile(): string {
        return "Prospero em ambientes colaborativos, mantendo foco profundo quando necessário. Acredito no equilíbrio entre sinergia de equipe e produtividade individual, consistentemente entregando resultados que superam expectativas através de comunicação eficaz e adaptabilidade."
    }
    getAboutMeCareerGoals(): string {
        return "Atualmente buscando oportunidades em projetos freelance, bem como posições nacionais e internacionais onde possa aproveitar minha expertise e continuar crescendo como desenvolvedor. Portfólio disponível em português e inglês. Ansioso para contribuir com equipes globais."
    }
    
    // Enhanced Projects section
    getProjectsEnhancedDescription(): string {
        return "Aqui estão projetos destacados que demonstram minha expertise técnica e abordagem de resolução de problemas com resultados significativos:"
    }
    getProjectDesignSystemEnhancedTitle(): string {
        return "Integração de Design System no Trademap"
    }
    getProjectDesignSystemEnhancedDescription(): string {
        return "Otimizando a colaboração entre design e desenvolvimento usando um sistema baseado em tokens"
    }
    getProjectDesignSystemContext(): string {
        return "Contexto: O Trademap precisava otimizar o fluxo de design para desenvolvimento e garantir consistência em dois aplicativos financeiros: TradeMap (plataforma de investimentos) e GranaMap (aplicativo de gestão financeira pessoal)."
    }
    getProjectDesignSystemChallenges(): string {
        return "Desafios: A implementação manual de estilos estava levando a inconsistências, retardando o desenvolvimento e dificultando mudanças de tema."
    }
    getProjectDesignSystemSolutions(): string {
        return "Soluções: Liderei a integração do Design System com o Figma usando FigmaTokens e TokenDictionary, criando um pipeline contínuo do design ao código que reduziu expressivamente os erros de implementação."
    }
    getProjectDesignSystemResults(): string {
        return "Resultados: Aumentei substancialmente a produtividade dos times de Design e Mobile, habilitei temas dinâmicos que reduziram drasticamente o tempo de desenvolvimento de troca de temas, e diminuí o tempo geral de implementação de design, economizando muitas horas de desenvolvimento por sprint."
    }
    getProjectDesignSystemStack(): string {
        return "Stack: Flutter, FigmaTokens, TokenDictionary, Design Systems"
    }
    
    getProjectJetpackComposeEnhancedTitle(): string {
        return "PoC com Jetpack Compose para Ágora Investimentos"
    }
    getProjectJetpackComposeEnhancedDescription(): string {
        return "Modernizando interfaces de aplicativos financeiros com UI declarativa para experiência aprimorada do usuário"
    }
    getProjectJetpackComposeContext(): string {
        return "Contexto: A Ágora Investimentos precisava modernizar seu aplicativo Android e avaliar o Jetpack Compose para desenvolvimento futuro de UI."
    }
    getProjectJetpackComposeChallenges(): string {
        return "Desafios: O aplicativo existente usava layouts XML tradicionais, tornando atualizações demoradas e limitando capacidades de animação."
    }
    getProjectJetpackComposeSolutions(): string {
        return "Soluções: Desenvolvi uma Prova de Conceito usando Jetpack Compose para demonstrar melhor velocidade de desenvolvimento, legibilidade de código e recursos aprimorados de UI com significativamente menos código."
    }
    getProjectJetpackComposeResults(): string {
        return "Resultados: Demonstrei com sucesso os benefícios do Jetpack Compose, levando à sua adoção para desenvolvimento de novos recursos e um plano gradual de migração que reduziu expressivamente o tempo de desenvolvimento de UI e os relatos de bugs."
    }
    getProjectJetpackComposeStack(): string {
        return "Stack: Android, Kotlin, Jetpack Compose, Material Design"
    }
    
    getProjectSecurityEnhancedTitle(): string {
        return "Melhorias de Segurança no Banco do Brasil"
    }
    getProjectSecurityEnhancedDescription(): string {
        return "Fortalecendo a segurança do mobile banking com protocolos avançados mantendo a performance"
    }
    getProjectSecurityContext(): string {
        return "Contexto: Como parte do time de segurança do Banco do Brasil, trabalhei na melhoria dos sistemas de autenticação e proteção de dados no aplicativo móvel utilizado por milhões de clientes."
    }
    getProjectSecurityChallenges(): string {
        return "Desafios: O aplicativo precisava de medidas de segurança aprimoradas mantendo boa performance e experiência do usuário para uma base de usuários em larga escala."
    }
    getProjectSecuritySolutions(): string {
        return "Soluções: Implementei manipulação de tokens JWT para autenticação segura, refatorei a construção de requisições de rede com OkHttp3 melhorando tempos de resposta, e contribuí com a implementação do protocolo FIDO."
    }
    getProjectSecurityResults(): string {
        return "Resultados: Melhorei a postura de segurança do aplicativo, reduzi problemas relacionados à autenticação, e preparei o app para autenticação sem senha com FIDO, aprimorando tanto a segurança quanto a experiência do usuário para milhões de usuários."
    }
    getProjectSecurityStack(): string {
        return "Stack: Android Nativo, React Native, JWT, OkHttp3, FIDO, iOS (Swift/Objective-C)"
    }
    
    // Technical Skills section
    getSkillsTitle(): string {
        return "Habilidades Técnicas"
    }
    getMobileSkillsTitle(): string {
        return "Desenvolvimento Mobile"
    }
    getMobileSkillsDescription(): string {
        return "Flutter, Android (Java/Kotlin), React Native, iOS (Swift/Objective-C)"
    }
    getDesignTokensTitle(): string {
        return "Design Tokens e Temas"
    }
    getDesignTokensDescription(): string {
        return "FigmaTokens, TokenDictionary, Design Systems"
    }
    getSecuritySkillsTitle(): string {
        return "Segurança"
    }
    getSecuritySkillsDescription(): string {
        return "JWT, protocolo FIDO, Sistemas de autenticação"
    }
    getNetworkingTitle(): string {
        return "Redes"
    }
    getNetworkingDescription(): string {
        return "Retrofit, OkHttp3, APIs RESTful"
    }
    getToolsTitle(): string {
        return "Ferramentas"
    }
    getToolsDescription(): string {
        return "Git, GitHub, pipelines de CI/CD"
    }
    getMethodologiesTitle(): string {
        return "Metodologias"
    }
    getMethodologiesDescription(): string {
        return "Scrum, Kanban, Desenvolvimento Ágil"
    }
    
    // Contact section
    getContactDescription(): string {
        return "Interessado em discutir um projeto ou oportunidade? Estou aberto a colaborações tanto locais quanto internacionais. Sinta-se à vontade para entrar em contato por qualquer um destes canais:"
    }
}

export default Portuguese