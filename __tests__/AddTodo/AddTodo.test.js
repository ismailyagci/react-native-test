import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import AddTodo from "../../app/components/addTodo";

test("button disabled", () => {
    const { getByTestId } = render(<AddTodo />);

    const buttonElement = getByTestId("addTodoButton");

    expect(buttonElement.props.style.backgroundColor).toEqual("#B4B4B4");
});


test("button enabled", () => {
    const { getByTestId } = render(<AddTodo />);

    const inputElement = getByTestId("addTodoInput");
    const buttonElement = getByTestId("addTodoButton");

    fireEvent.changeText(inputElement, "Todo Test Item", "ab");

    expect(buttonElement.props.style.backgroundColor).toEqual("#088F8F");
});
