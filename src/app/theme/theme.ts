abstract class ThemeVariation {
    abstract getMainColor(): string
    abstract getSecondaryColor(): string

    getForegroundColor(): string {
        return this.getSecondaryColor()
    }
    getBackgroundColor(): string {
        return this.getMainColor()
    }
    getButtonBackgroundColor(): string {
        return this.getMainColor()
    }
    getButtonForeground(): string {
        return this.getSecondaryColor()
    }
}

export default ThemeVariation