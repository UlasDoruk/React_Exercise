import {getByText, render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./counter"

describe("Total",()=>{

    let counter,increase,decrease

    beforeEach(()=>{
        render(<Counter />);
         counter = screen.getByText("0");
         increase = screen.getByText("+");
         decrease = screen.getByText("-");
    })
    test("ıncrease btn", () => {
      userEvent.click(increase);
      expect(counter).toHaveTextContent("1");
    });

    test("decrease btn", () => {
      userEvent.click(decrease);
      expect(counter).toHaveTextContent("-1");
    });
    
})

