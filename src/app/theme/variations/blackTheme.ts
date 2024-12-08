import ThemeVariation from "../theme";

class BlackTheme implements ThemeVariation {
    getMainColor(): string {
        return "#202020"
    }
    getSecondaryColor(): string {
        return "#c4c4c4"
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

export default BlackTheme