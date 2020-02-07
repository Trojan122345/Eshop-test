import {OrdersVM} from './OrdersVM';
import {OrdersProductsVM} from './OrdersProductsVM';

export class OrderInfo {
  order: OrdersVM;
  items: OrdersProductsVM[];
}
