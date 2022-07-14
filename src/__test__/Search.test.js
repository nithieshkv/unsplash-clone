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
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
    </Provider>
  );
  const input = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(input, { target: { value: "tamil" } });
  expect(input.value).toBe("tamil");
});

test("category button", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <Search
        Selected={mockselected}
        search={mockSearch}
        loading={mockloading}
      />
    </Provider>
  );
  const button = screen.getByText("oldest");
  expect(button).toBeInTheDocument();
});
