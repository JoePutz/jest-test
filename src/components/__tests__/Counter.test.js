import { render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        // So why are we using data-testid? Well, the value of "count" will always change with the count. 
        // So we need a way to call it. Hence we created a data-testid for it on the Counter component
        // Don't overuse, only add data-testid when there's no other easy way to identify the component
        expect(countValue).toEqual(0);
        //Can use toBe, toEqual, toHaveLength, etc
    });
    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementBttn = getByRole("button", { name: "Increment" })
        //This gets an element with the role 'button' that has the name Increment
        const countValue1 = Number(getByTestId("count").textContent)
        expect(countValue1).toEqual(0)
        fireEvent.click(incrementBttn)
        const countValue2 = Number(getByTestId("count").textContent)
        expect(countValue2).toEqual(1)
    })
})