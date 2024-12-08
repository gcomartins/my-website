import Intl from "../language";

class Portuguese implements Intl {
    getTitle(): string {
        return "Iaee!"
    }
    getDescription(): string {
        return "Meu nome e Guilherme e esse e o meu site! Sou desenvolvedor Mobile, focado em Android, com 2 anos de experiencia."
    }
    getMyMainTechnologies(): string {
        return "Minhas principais linguagens de programacao sao:"
    }
}

export default Portuguese