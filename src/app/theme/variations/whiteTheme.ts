import ThemeVariation from "../theme";

class WhiteTheme implements ThemeVariation {
    getMainColor(): string {
        return "#c4c4c4"
    }
    getSecondaryColor(): string {
        return "#202020"
    }
    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
    getBackgroundColor(): string {
        return this.getMainColor()
    }
    getButtonBackgroundColor(): string {
        return this.getSecondaryColor()
    }
    getButtonForeground(): string {
        return this.getMainColor()
    }
}

export default WhiteTheme