import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Search from "../components/Search";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);
const mockloading = jest.fn();
const mockselected = jest.fn();
const mockSearch = jest.fn();

const data = { search: "", category: "" };
test("searching the field", () => {
  const store = mockStore(data);
  render(
    <Provider store={store}>
      <BrowserRouter>
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
      </BrowserRouter>
    </Provider>
  );
  const input = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(input, { target: { value: "welcome" } });
  expect(input.value).toBe("welcome");
});

test("category button", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
      </BrowserRouter>
    </Provider>
  );
  const button = screen.getByText("oldest");
  expect(button).toBeInTheDocument();
});


test("buttons", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
      </BrowserRouter>
    </Provider>
  );
  const button = screen.getAllByTestId("button");
  fireEvent.click(screen.getAllByTestId("button")[0])
  expect(button).toBeTruthy();
});
test("toggling", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
      </BrowserRouter>
    </Provider>
  );
  const inputelement = screen.getByPlaceholderText(/Search/i);
  fireEvent.keyDown(inputelement, {key: 'Enter', code: 'Enter', charCode: 13})
  expect(inputelement).toBeTruthy();
});