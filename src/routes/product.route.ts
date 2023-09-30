import { ProductController } from '@/controllers/product.controller';
import { CreateProductDto, UpdateProductDto } from '@/dtos/product.dto';
import { Routes } from '@/interfaces/routes.interface';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { Router } from 'express';

export class ProductRoute implements Routes {
  public path = '/api/v1/products';
  public router = Router();
  public product = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthMiddleware, this.product.index);
    this.router.get(`${this.path}/:id`, AuthMiddleware, this.product.show);
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateProductDto, false), this.product.store);
    this.router.put(`${this.path}/:id`, AuthMiddleware, ValidationMiddleware(UpdateProductDto, true), this.product.update);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.product.destroy);
  }
}
