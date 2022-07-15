import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import ImageList from "../components/ImageList";

const mockStore = configureStore([thunk]);

const mockData = jest.fn();
const mockSelected = jest.fn();
const mockNext = jest.fn();
const mockLoading = jest.fn();
const mockLike = jest.fn();

const data = {
  imageList: [],
  selectedImage: {},
  searchValue: "cars",
  nextPage: 1,
  categoryValue: "oldest",
  loader: true,
  likedData: true,
};

it("renders correctly", () => {
  const store = mockStore();
  const tree = renderer
    .create(
      <Provider store={store}>
        <ImageList />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("imagelist", async () => {
  const store = mockStore(data);
  render(
    <Provider store={store}>
      <ImageList
        data={mockData}
        Selected={mockSelected}
        next={mockNext}
        like={mockLike}
        loading={mockLoading}
      />
    </Provider>
  );
  const elementLike = await screen.findByTestId("like-test");
  fireEvent.click(elementLike);
  expect(elementLike).toBeTruthy();
});

test("imagelist-nextPages", () => {
  const store = mockStore(data);
  render(
    <Provider store={store}>
      <ImageList
        data={mockData}
        Selected={mockSelected}
        next={mockNext}
        like={mockLike}
        loading={mockLoading}
      />
    </Provider>
  );
  const element = screen.getByTestId("next-test");
  fireEvent.click(element);
  expect(element).toBeTruthy();
});
