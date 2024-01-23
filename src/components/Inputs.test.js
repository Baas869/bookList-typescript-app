const { render, screen, act } = require("@testing-library/react")
import Inputs from "./Inputs";
import BookProvider from "../contexts/BookData";
import userEvent from "@testing-library/user-event";

// Run | Debug
// test('on initial render, the add button is disable', () =>{
//     render(<BookProvider><Inputs /></BookProvider>)

//     expect(screen.getByRole('button', {name: /Add book/i})).toBeDisabled();
// })
// Run | Debug
test('if all the input are filled and isbn is disabled', () =>{
    render(<BookProvider><Inputs /></BookProvider>)
    act(() =>{
        userEvent.type(screen.getByPlaceholderText(/isbn/i), '4456')
        userEvent.type(screen.getByPlaceholderText(/title/i), 'go home')
        userEvent.type(screen.getByPlaceholderText(/author/i), 'baas')
    })
    

    // expect(screen.getByRole('input', {type: /number/i})).toBeDisabled();
    expect(screen.getByRole('button', {name: /Add book/i})).toBeEnabled();
// screen.getByRole('')
})