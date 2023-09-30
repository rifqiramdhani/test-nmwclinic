import { HttpException } from '@/exceptions/httpException';
import { Product } from '@/interfaces/products.interface';
import { ProductModel } from '@/models/products.model';
import { Service } from 'typedi';

@Service()
export class ProductService {
  public async get(): Promise<Product[]> {
    const product: Product[] = await ProductModel.find();
    return product;
  }

  public async find(id: string): Promise<Product> {
    const findById: Product = await ProductModel.findById(id);

    if (!findById) throw new HttpException(409, 'Product not found');

    return findById;
  }

  public async create(value: Product): Promise<Product> {
    return await ProductModel.create(value);
  }

  public async update(id: string, value: Product): Promise<Product> {
    const result = await ProductModel.findByIdAndUpdate(id, value);
    if (!result) throw new HttpException(404, 'Product not found');
    return result;
  }

  public async delete(id: string): Promise<Product> {
    const result = await ProductModel.findByIdAndDelete(id);
    if (!result) throw new HttpException(404, 'Product not found');
    return result;
  }
}
