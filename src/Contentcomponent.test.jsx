import { fireEvent, render,screen } from "@testing-library/react"
import ContentComponent from "./ContentComponent"

test("",()=>{
    render(<ContentComponent />);

    const headingElement=screen.getByTestId("heading");
    
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Welcome to ContentComponent");


    const paragraphElement=screen.getByTestId("paragraph");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent("This is a sample paragraph");

    const countValueElement=screen.getByTestId("count_value");
    expect(countValueElement).toBeInTheDocument();
    expect(countValueElement).toHaveTextContent("Count: 0");

    const incrementButton=screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);

    expect(countValueElement).toHaveTextContent("Count: 1")
})