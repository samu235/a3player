import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("test Button", () => {
    const text = 'New Button'
    let components
    let button
    const mockHandler = jest.fn()

    beforeEach(() => {
        components = render(<Button onClick={mockHandler} onDoubleClick={mockHandler}>{text}</Button>)
        button = components.getByText(text)
    })

    test('render button children', () => {
        expect(button).not.toBeNull();
    })

    test('click on button', () => {
        fireEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1);
    })

    test('DoubleClick on button', () => {
        fireEvent.doubleClick(button)
        expect(mockHandler.mock.calls).toHaveLength(2);
    })
    
})



