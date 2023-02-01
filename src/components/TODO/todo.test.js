import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todos from "../TODO/todo"

descripe("todoTest", ()=>{
    render(<Todos/>)
})