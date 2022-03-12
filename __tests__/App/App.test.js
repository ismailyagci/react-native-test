import React from "react";
import { fireEvent, render, waitForElementToBeRemoved } from "@testing-library/react-native";
import App from "../../app/index";
import '@testing-library/jest-dom'


test("add todo", () => {
    const todoText = "New Todo";

    const { getByTestId } = render(<App />);

    const buttonElement = getByTestId("addTodoButton");
    const inputElement = getByTestId("addTodoInput");

    fireEvent.changeText(inputElement, todoText, "ab");
    fireEvent.press(buttonElement);

    const containerElement = getByTestId("todoList");

    expect(containerElement.children.length).toBe(1);
});



test("delete todo", async () => {
    const todoText = "New Todo";

    const { getByTestId, queryByText } = render(<App />);

    const buttonElement = getByTestId("addTodoButton");
    const inputElement = getByTestId("addTodoInput");

    fireEvent.changeText(inputElement, todoText, "ab");
    fireEvent.press(buttonElement);

    const todoCard = queryByText(todoText);
    fireEvent.press(todoCard)

    expect(queryByText(todoText)).not.toBeInTheDocument();
});
