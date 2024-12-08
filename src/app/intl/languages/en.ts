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
}

export default English