import Typography from "typography"
import theme from "typography-theme-ocean-beach"

theme.baseFontSize = '17px';

const typography = new Typography(theme)
export default typography
export const rhythm = typography.rhythm
