import { styled } from "./styles";

const Button = styled("button", {
    fontFamily: "$default",
    backgroundColor: "$blue100",
    borderRadius: "$md",
});

export function App() {
    return <Button>Hello World</Button>;
}
