import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { configure, mount, shallow } from "enzyme";
import userEvent from '@testing-library/user-event';
import FormTodo from "../FormTodo";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
const mockedAdd = jest.fn();

describe("Before submitting a todo task", () => {
  it("should render todo form  without crashing", () => {
    render(<FormTodo/>)
  });

  it("should contains input field and it has focus on mount", () => {
    render(<FormTodo />);
    const inputField = screen.getByPlaceholderText("Add a new todo");
    expect(inputField).toHaveFocus();
  });

  
  it("should not call add method if input field is empty", () => {
    
    render(<FormTodo handleSubmit={mockedAdd} />);
    fireEvent.click(screen.queryByTestId('sendButton'));
    expect(mockedAdd).not.toHaveBeenCalled();
  });
});

describe('<FormTodo/>', () => {
  const input = screen.queryByTestId('todotask');

  it("should have a task field", ()=>{
    const mockTodo = {
        index: 1,
        text: "Test",
        isDone: false,
    }
    const todo = shallow(<FormTodo handleSubmit={mockTodo} />);
    expect(todo.find("task").length).toBeDefined();
  });

  it("should submit the form successfully", () => {
    const onSubmit = jest.fn();
    const wrapper  = mount(<FormTodo handleSubmit={onSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should clear the text field", () => {
    expect(input).toBeNull();
  });

});

