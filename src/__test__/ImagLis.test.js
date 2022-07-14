import renderer from "react-test-renderer";
import ImageList from "../components/ImageList";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);
import configureStore from "redux-mock-store";



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
