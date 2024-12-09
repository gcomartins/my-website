import ThemeVariation from "../theme";

class WhiteTheme extends ThemeVariation {
    getMainColor(): string {
        return "#c4c4c4"
    }
    getSecondaryColor(): string {
        return "#202020"
    }
}

export default WhiteTheme