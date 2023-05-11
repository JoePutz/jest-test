import { render } from "@testing-library/react";
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
    })
})