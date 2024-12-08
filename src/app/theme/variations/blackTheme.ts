import ThemeVariation from "../theme";

class BlackTheme implements ThemeVariation {
    getMainColor(): string {
        return "#000"
    }
    getSecondaryColor(): string {
        return "#f2f2f2"
    }
    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
    getBackgroundColor(): string {
        return this.getMainColor()
    }
}

export default BlackTheme