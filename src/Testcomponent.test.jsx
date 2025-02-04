import { render,screen } from "@testing-library/react"
import Testcomponent from "./Testcomponent"

it("render component",()=>{
    render(<Testcomponent />)
    const h1Element=screen.getByText("Welcome to react testing library");
    expect(h1Element).toBeInTheDocument();
})