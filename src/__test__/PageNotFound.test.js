import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import PageNotFound from '../components/PageNotFound'
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([thunk]);

test("page not found",()=>{
    const store = mockStore();

    render(
        <Provider store={store}>
            <BrowserRouter>
            <PageNotFound />
            </BrowserRouter>
        </Provider>
    );
    const PageNotFoundElement=screen.getByText('The requested page is not found')
    expect(PageNotFoundElement).toBeInTheDocument();
})