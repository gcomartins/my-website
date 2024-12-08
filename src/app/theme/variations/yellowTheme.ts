import ThemeVariation from "../theme";

class YellowTheme implements ThemeVariation {
    getMainColor(): string {
        return "#FCFC30"
    }
    getSecondaryColor(): string {
        return "#465EFF"
    }
    getBackgroundColor(): string {
        return this.getMainColor()
    }
    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
}

export default YellowTheme