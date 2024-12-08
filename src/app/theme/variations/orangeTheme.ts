import ThemeVariation from "../theme";

class OrangeTheme implements ThemeVariation {
    getMainColor(): string {
        return "#fb5c0b"
    }
    getSecondaryColor(): string {
        return "#2c3445"
    }
    getBackgroundColor(): string {
        return "#e7eae0"
    }
    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
}

export default OrangeTheme