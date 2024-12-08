import ThemeVariation from "../theme";

class WhiteTheme implements ThemeVariation {
    getMainColor(): string {
        return "#f2f2f2"
    }
    getSecondaryColor(): string {
        return "#383838"
    }
    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
    getBackgroundColor(): string {
        return this.getMainColor()
    }
}

export default WhiteTheme