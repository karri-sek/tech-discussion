export interface IProductDomain {
  id: number;
  name: string;
  customerPrice: number;
  cost: number;
  image?: string;
  quantity:number;
}

export interface IState {
  cartItems: IProductDomain[];
  loading: boolean;
  error: boolean;
  products: IProductDomain[];
}

export const initialState: IState = {
  cartItems: [],
  loading: false,
  error: false,
  products: []
};
