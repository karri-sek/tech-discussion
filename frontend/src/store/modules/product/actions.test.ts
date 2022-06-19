import {
  addToCartRequestAction
} from "./actions";

describe('Product actions', () => {
  it('Add to cart action', () => {
    expect(addToCartRequestAction()).toMatchSnapshot();
  });
});
