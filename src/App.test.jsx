import { render } from "@testing-library/react"
import { App } from "./App"

test("Test App component Heading",()=>{
const {getByText}=render(<App />);
const h1Element=getByText('Register');
const paracontnt=getByText('para content');

expect(h1Element).toBeInTheDocument();
expect(paracontnt).toBeInTheDocument();
})