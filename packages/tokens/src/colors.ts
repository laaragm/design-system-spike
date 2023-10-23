const baseColors = {
    white: "#FFFFFF",
    black: "#000000",

    gray100: "#E8E8EE",
    gray200: "#B2B2BF",
    gray300: "#A0A0A9",
    gray400: "#8D8D9B",
    gray500: "#5C5C6D",
    gray600: "#3E3E4E",
    gray700: "#343447",
    gray800: "#232339",
    gray900: "#111123",

    blue100: "#EFF3FE",
    blue200: "#B3C2E4",
    blue300: "#94A8D5",
    blue400: "#859AD8",
    blue500: "#5673CC",
    blue600: "#3A57B0",
    blue700: "#2C4089",
    blue800: "#1D295D",
    blue900: "#0F1432",

    purple100: "#E6E1F8",
    purple200: "#CBB9E9",
    purple300: "#AF9EDB",
    purple400: "#B093DB",
    purple500: "#8F6DCC",
    purple600: "#7048B8",
    purple700: "#56329A",
    purple800: "#3C1C75",
    purple900: "#250859",

    red500: "#D32F2F",

    green500: "#388E3C",

    yellow500: "#FBC02D",
};

const core = {
    backgroundPrimary: baseColors.white,
    backgroundSecondary: baseColors.gray100,
    backgroundTertiary: baseColors.gray200,
    backgroundInversePrimary: baseColors.black,
    backgroundInverseSecondary: baseColors.gray800,

    contentPrimary: baseColors.black,
    contentSecondary: baseColors.gray600,
    contentTertiary: baseColors.gray500,
    contentInversePrimary: baseColors.white,
    contentInverseSecondary: baseColors.gray300,
    contentInverseTertiary: baseColors.gray400,
    contentAccent: baseColors.blue500,
    placeholder: baseColors.gray500,

    borderOpaque: baseColors.gray200,
    borderTransparent: `8% ${baseColors.black}`,
    borderSelected: baseColors.black,
    borderInverseOpaque: baseColors.gray700,
    borderInverseTransparent: `20% ${baseColors.white}`,
    borderInverseSelected: baseColors.white,
};

export const colors = { ...baseColors, ...core };
