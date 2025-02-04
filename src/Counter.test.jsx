import { fireEvent, render,screen } from "@testing-library/react"
import Counter from "./Counter"

it("Test counter Program",()=>{
    render(<Counter />);
    const countElement=screen.getByText("0");
    expect(countElement).toBeInTheDocument();
})

it("Increment count Value",()=>{
    render(<Counter />);
    const dvalue=screen.getByText("0");
    const buttonelement=screen.getByText("IncValue");

    fireEvent.click(buttonelement);
    expect(dvalue.textContent).toBe("10");

})