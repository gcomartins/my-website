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
        return "Minhas Realizações"
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

    // CapivaraHosting Collaborative Work section
    getCollaborativeWorkLabel(): string {
        return "Trabalhos Colaborativos"
    }

    getCollaborativeWorkDescription(): string {
        return "Projetos desenvolvidos em colaboração com outros desenvolvedores na organização CapivaraHosting:"
    }

    getCapivaraHostingTitle(): string {
        return "CapivaraHosting - Projetos Colaborativos"
    }

    getCapivaraHostingDescription(): string {
        return "Trabalhando em conjunto com Matheu5Leone em soluções de hospedagem e aplicações web."
    }

    getCapivaraProject1Title(): string {
        return "Sistema de Hospedagem Web"
    }

    getCapivaraProject1Description(): string {
        return "Desenvolvimento de uma plataforma de hospedagem web escalável e de fácil manutenção"
    }

    getCapivaraProject1Context(): string {
        return "Contexto: Identificamos a necessidade de uma solução de hospedagem mais acessível e flexível para desenvolvedores independentes e pequenas empresas."
    }

    getCapivaraProject1Challenges(): string {
        return "Desafios: Implementar uma infraestrutura segura e escalável com recursos limitados, mantendo custos acessíveis e garantindo alta disponibilidade."
    }

    getCapivaraProject1Solutions(): string {
        return "Soluções: Criamos uma arquitetura baseada em containers, automatizamos processos de deploy com CI/CD e implementamos monitoramento em tempo real."
    }

    getCapivaraProject1Results(): string {
        return "Resultados: Desenvolvemos uma plataforma estável que suporta múltiplos projetos simultaneamente, com tempos de inatividade mínimos e recuperação rápida de falhas."
    }

    getCapivaraProject1Stack(): string {
        return "Stack: Docker, Kubernetes, Nginx, GitHub Actions, Node.js, Prometheus"
    }

    getCapivaraProject2Title(): string {
        return "Hospedagem de Servidores de Minecraft"
    }

    getCapivaraProject2Description(): string {
        return "Solução Serverless para implantação dinâmica de servidores Minecraft usando AWS"
    }

    getCapivaraProject2Context(): string {
        return "Contexto: Desenvolvemos uma solução de hospedagem flexível e econômica para servidores Minecraft que escala automaticamente com base na demanda."
    }

    getCapivaraProject2Challenges(): string {
        return "Desafios: Criar um sistema de implantação eficiente que minimize custos durante períodos ociosos enquanto garante disponibilidade rápida dos servidores quando necessário."
    }

    getCapivaraProject2Solutions(): string {
        return "Soluções: Utilizamos a arquitetura Serverless da AWS para gerar servidores Minecraft a partir de Dockerfiles, permitindo provisionamento sob demanda e escalonamento automático."
    }

    getCapivaraProject2Results(): string {
        return "Resultados: Uma plataforma de hospedagem flexível que permite aos usuários implantar servidores Minecraft personalizados com latência mínima e pagar apenas pelo tempo de uso real."
    }

    getCapivaraProject2Stack(): string {
        return "Stack: AWS Lambda, Docker, Terraform, Node.js, AWS API Gateway, DynamoDB"
    }

    getCapivaraProject3Title(): string {
        return "APIs RESTful para Integrações"
    }

    getCapivaraProject3Description(): string {
        return "Criação de APIs para integração entre sistemas de clientes e nossa infraestrutura"
    }

    getCapivaraProject3Context(): string {
        return "Contexto: Nossos clientes precisavam de formas de integrar seus sistemas com nossa infraestrutura de forma programática e segura."
    }

    getCapivaraProject3Challenges(): string {
        return "Desafios: Desenvolver APIs flexíveis, bem documentadas, seguras e com desempenho adequado para diferentes casos de uso."
    }

    getCapivaraProject3Solutions(): string {
        return "Soluções: Implementamos uma arquitetura de microserviços com autenticação JWT, documentação automática com Swagger e rate limiting para proteção contra abusos."
    }

    getCapivaraProject3Results(): string {
        return "Resultados: As APIs permitiram que clientes automatizassem processos de deploy, monitoramento e gestão de recursos, reduzindo intervenções manuais e melhorando a confiabilidade dos sistemas."
    }

    getCapivaraProject3Stack(): string {
        return "Stack: Node.js, Express, MongoDB, JWT, Swagger, Redis"
    }

    // Vibe Coding Projects section
    getVibeCodingLabel(): string {
        return "Vibe Coding Projects"
    }

    getVibeCodingDescription(): string {
        return "Projetos pessoais desenvolvidos com paixão por código e experiência do usuário:"
    }

    getVibeProject1Title(): string {
        return "Finne - Gestor de Finanças Pessoais"
    }

    getVibeProject1Description(): string {
        return "Aplicativo web para gestão inteligente de finanças pessoais"
    }

    getVibeProject1Context(): string {
        return "Contexto: Identifiquei a necessidade de uma solução moderna e simples para gerenciamento de finanças pessoais, com foco em usabilidade e insights úteis."
    }

    getVibeProject1Challenges(): string {
        return "Desafios: Desenvolver uma interface intuitiva que simplificasse a visualização de dados financeiros complexos e criar um sistema de categorização automática de transações."
    }

    getVibeProject1Solutions(): string {
        return "Soluções: Implementei uma arquitetura moderna com React e Firebase, utilizando visualizações gráficas interativas e sistema de categorização baseado em padrões de texto."
    }

    getVibeProject1Results(): string {
        return "Resultados: O Finne ajuda usuários a gerenciar suas finanças diárias, oferecendo insights sobre padrões de gastos e oportunidades de economia."
    }

    getVibeProject1Stack(): string {
        return "Stack: React, Firebase, Material UI, Chart.js, TypeScript"
    }

    getVibeProject1Url(): string {
        return "https://finne-ai-agent.firebaseapp.com/"
    }

    getVibeProject2Title(): string {
        return "Portfolio Pessoal"
    }

    getVibeProject2Description(): string {
        return "Website para exibição profissional de habilidades e experiências"
    }

    getVibeProject2Context(): string {
        return "Contexto: Precisava de uma maneira elegante e funcional de apresentar minha experiência profissional, projetos e habilidades técnicas."
    }

    getVibeProject2Challenges(): string {
        return "Desafios: Criar um design responsivo, minimalista e facilmente atualizável, com suporte a múltiplos idiomas e temas."
    }

    getVibeProject2Solutions(): string {
        return "Soluções: Desenvolvi o site com Next.js, implementando componentes reutilizáveis, sistema de troca de temas e suporte a múltiplos idiomas."
    }

    getVibeProject2Results(): string {
        return "Resultados: Um portfolio elegante e moderno que destaca eficientemente minhas habilidades e projetos para potenciais empregadores e clientes."
    }

    getVibeProject2Stack(): string {
        return "Stack: Next.js, React, TypeScript, CSS-in-JS"
    }

    getVibeProject2Url(): string {
        return "https://gcomartins.github.io/my-website/"
    }

    getVibeProject3Title(): string {
        return "Two Guys - Portfolio de Estúdio Audiovisual"
    }

    getVibeProject3Description(): string {
        return "Website para estúdio de produção audiovisual destacar seus serviços e projetos"
    }

    getVibeProject3Context(): string {
        return "Contexto: Um estúdio de produção audiovisual precisava de uma presença online profissional para mostrar seu trabalho e atrair novos clientes."
    }

    getVibeProject3Challenges(): string {
        return "Desafios: Criar um design visualmente impactante que destacasse o trabalho audiovisual do estúdio, mantendo boa performance e experiência de usuário."
    }

    getVibeProject3Solutions(): string {
        return "Soluções: Desenvolvi um layout visualmente atraente com animações sutis, integração de vídeo e galeria de projetos responsiva."
    }

    getVibeProject3Results(): string {
        return "Resultados: O site ajudou o estúdio a estabelecer sua presença online, destacando seu portfólio para agências e clientes potenciais como BAND, Jovem Pan e Nubank."
    }

    getVibeProject3Stack(): string {
        return "Stack: React, HTML5, CSS3, JavaScript"
    }

    getVibeProject3Url(): string {
        return "https://gcomartins.github.io/two-guys-webapp/"
    }
}

export default Portuguese