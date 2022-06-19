import ProductsService from '../../services/products.service';
import { Request, Response } from 'express';

export class Controller {
  details(req: Request, res: Response): void {
    ProductsService.details(req.body).then((r) =>
      res.status(200).location(`/api/v1/details`).json(r)
    );
  }
}
export default new Controller();
