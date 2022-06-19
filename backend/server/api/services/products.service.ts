import L from '../../common/logger';
import { faker } from '@faker-js/faker';
let id = 1;
interface Product {
  id: number;
  name: string;
  customerPrice: number;
  cost: number;
  image?: string;
}
interface InputProductRangePayload {
  name: string;
  quantity: number;
}

interface RangeOfProductsResponse {
  name: string,
  quantity: number;
  itemPrice: number;
  totalPrice: number
}

const products: Product[] = [
  { id: id++, name: 'Soup', customerPrice: 199, cost: 186, image: faker.image.food(640, 480, true) },
  { id: id++, name: 'Bread', customerPrice: 87, cost: 21, image: faker.image.food(640, 480, true) },
  { id: id++, name: 'Cheese', customerPrice: 275, cost: 234, image: faker.image.food(640, 480, true) },
  { id: id++, name: 'Milk', customerPrice: 67, cost: 61, image: faker.image.food(640, 480, true) },
];

export class ProductsService {
  all(): Promise<Product[]> {
    L.info(products, 'fetch all products');
    return Promise.resolve(products);
  }

  byId(id: number): Promise<Product> {
    L.info(`fetch product with id ${id}`);
    return this.all().then((r) => r[id - 1]);
  }

  create(name: string, customerPrice: number, cost: number): Promise<Product> {
    L.info(`create product with name ${name}`);
    const product: Product = {
      id: id++,
      name,
      customerPrice,
      cost,
      image: faker.image.food(640, 480, true)
    };
    products.push(product);
    return Promise.resolve(product);
  }
  details(produtsPayload: InputProductRangePayload[]): Promise<Product[]> {
    const response = [];
    let grandTotal: number = 0;
    produtsPayload.map(((product: InputProductRangePayload) => {
      const { name, quantity } = product;
      const selectedProduct: Product = products.find(product => product.name.toLowerCase() === name.toLowerCase());
      grandTotal += quantity * selectedProduct.cost;
      const obj = {
        name,
        quantity,
        priceByItem: '$' + selectedProduct.cost,
        totalPrice: '$' +  (quantity * selectedProduct.cost)
      }
      response.push(obj);
    }))
    response.push({ 'grandTotal': '$' + grandTotal });
    return Promise.resolve(response);
  }

}

export default new ProductsService();
