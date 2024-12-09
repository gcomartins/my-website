import ThemeVariation from "../theme";

class WhiteTheme extends ThemeVariation {
    getMainColor(): string {
        return "#ededed"
    }
    getSecondaryColor(): string {
        return "#202020"
    }
}

export default WhiteTheme