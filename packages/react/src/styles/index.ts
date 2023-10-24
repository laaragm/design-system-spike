import {
    borderWidths,
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    shadows,
    spacings,
} from "@larag-ui/tokens";
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        borderWidths: borderWidths,
        colors: colors,
        fonts: fonts,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        lineHeights: lineHeights,
        radii: radii,
        shadows: shadows,
        space: spacings,
    },
});
