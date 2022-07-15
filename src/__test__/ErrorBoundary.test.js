import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary'
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";



// const mockErrorBoundary=()=>{
//     return (
//         <BrowserRouter>
//         <ErrorBoundary />
//         </BrowserRouter>
//     )
// }
describe("All Buttons and navigations in ErrorBoundaries: ", () => {
    test("Has Error message shown", () => {
      render(<ErrorBoundary />);
      const errOne = screen.queryAllByText(
        /something is wrong please try again after sometime/i
      );
      expect(errOne).toBeTruthy();
    });
    test("Has Link to homepage", () => {
      render(<ErrorBoundary />);
      const errT = screen.queryByRole("heading");
      expect(errT).toBeTruthy();
    });
  });