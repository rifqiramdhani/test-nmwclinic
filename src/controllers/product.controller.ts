import { Product } from '@/interfaces/products.interface';
import { ProductService } from '@/services/products.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class ProductController {
  public product = Container.get(ProductService);

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAll: Product[] = await this.product.get();

      res.status(200).json({
        status: true,
        data: findAll,
        message: 'Data successfull retrieve',
      });
    } catch (error) {
      next(error);
    }
  };

  public show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const findById = await this.product.find(id);
      res.status(200).json({
        status: true,
        data: findById,
        message: 'Data successfull retrieve',
      });
    } catch (error) {
      next(error);
    }
  };

  public store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Product = req.body;
      await this.product.create(data);
      res.status(200).json({
        status: true,
        message: 'Data was created successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Product = req.body;
      const id: string = req.params.id;

      await this.product.update(id, data);
      res.status(200).json({
        status: true,
        message: 'Data was updated successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  public destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      await this.product.delete(id);
      res.status(200).json({
        status: true,
        message: 'Data was deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  };
}
