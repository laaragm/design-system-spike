import { styled } from "../../styles";

export const StyledTextArea = styled("textarea", {
    width: "100%",
    padding: "$3",
    fontSize: "$md",
    backgroundColor: "$backgroundSecondary",
    fontFamily: "$default",
    boxSizing: "border-box",
    borderRadius: "$sm",
    border: "1px solid $borderSelected",
    transition: "border-color 0.3s",
    minHeight: "$5",
    resize: "vertical",
    lineHeight: "$body",
    "&:hover": {
        borderColor: "$contentAccent",
    },
    "&:focus": {
        borderColor: "$contentPrimary",
    },
    "&:disabled": {
        opacity: 0.3,
        cursor: "not-allowed",
    },
});
