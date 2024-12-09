import Intl from "../language";

class English implements Intl {
    getTitle(): string {
        return "Hey, there!"
    }
    getDescription(): string {
        return "My name is Guilherme and this is my website!\nI am a mobile developer, focused in Android, with 2 years of experience."
    }
    getMyMainTechnologies(): string {
        return "My main techonolgies are:"
    }
    getChangeLanguageLabel(): string {
        return "Change language"
    }
    getChangeThemeLabel(): string {
        return "Change theme"
    }
    getFirstTechLabel(): string {
        return "Android Kotlin/Java (2 years)"
    }
    getSecondTechLabel(): string {
        return "React/React Native (1 year)"
    }
    getThirdTechLabel(): string {
        return "Javascript (1 year)"
    }
    getFourthTechLabel(): string {
        return "Flutter (1 and a half year)"
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
}

export default English