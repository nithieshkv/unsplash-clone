import renderer from "react-test-renderer";
import Login from "../components/Login";
import { render, screen, fireEvent } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);
import configureStore from "redux-mock-store";

it("renders correctly", () => {
  const store = mockStore();
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("sign-out", () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  const sign = screen.getByTestId("signin");
  fireEvent.click(sign);
  expect(sign).toBeTruthy();
});

test("profile names", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  const profileTest = await screen.findByTestId("profiletest");
  
  const signin = await screen.findByTestId("signin");
  fireEvent.click(signin);
  fireEvent.change(profileTest);
  expect(profileTest).toBeTruthy();
});

test("button-text", async () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  const buttontext = await screen.findByText(/Sign in with Google/i)
  const profileTest = await screen.findByTestId("profiletest");

  const signin = await screen.findByTestId("signin");
  fireEvent.click(signin);
  fireEvent.change(profileTest);
  expect(profileTest).toBeTruthy();
});

