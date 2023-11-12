import { styled } from "../../styles";

export const StyledInput = styled("input", {
    width: "100%",
    backgroundColor: "$backgroundSecondary",
    padding: "$3",
    fontSize: "$md",
    fontFamily: "$default",
    boxSizing: "border-box",
    borderRadius: "$sm",
    border: "1px solid $borderSelected",
    transition: "border-color 0.3s",
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
