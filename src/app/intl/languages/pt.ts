import Intl from "../language";

class Portuguese implements Intl {
    getTitle(): string {
        return "Iaee!"
    }
    getDescription(): string {
        return "Meu nome é Guilherme e esse é o meu site! Sou desenvolvedor Mobile, focado em Android, com 2 anos de experiência."
    }
    getMyMainTechnologies(): string {
        return "Minhas principais linguagens de programacao são:"
    }
    getChangeLanguageLabel(): string {
        return "Trocar linguagem"
    }
    getChangeThemeLabel(): string {
        return "Trocar tema"
    }
    getFirstTechLabel(): string {
        return "Android Kotlin/Java (2 anos)"
    }
    getSecondTechLabel(): string {
        return "React/React Native (1 ano)"
    }
    getThirdTechLabel(): string {
        return "Javascript (1 ano)"
    }
    getFourthTechLabel(): string {
        return "Flutter (1 ano e meio)"
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
}

export default Portuguese