import { AuthRoute } from './auth.route';
import { ProductRoute } from './product.route';
import { UserRoute } from './users.route';

const routes = [new UserRoute(), new AuthRoute(), new ProductRoute()];

export default routes;
