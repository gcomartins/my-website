import ThemeVariation from "../theme";

class BlackTheme extends ThemeVariation {
    getMainColor(): string {
        return "#171717"
    }
    getSecondaryColor(): string {
        return "#c4c4c4"
    }
}

export default BlackTheme