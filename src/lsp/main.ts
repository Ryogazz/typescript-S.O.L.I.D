/*
Interface segregatin principle (principio da segregação de interface)
os clientes não devem ser forçados a depender de types, interfaces ou mebros abstratos que nao utilizam
*/
import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDsicount,
  NoDsicount,
  TenPercentDsicount,
} from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const fiftyPercentDsicount = new FiftyPercentDsicount();
const tenPercentDsicount = new TenPercentDsicount();
const noDsicount = new NoDsicount();
const shoppingCart = new ShoppingCart(tenPercentDsicount);
const message = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'K',
  'Dash',
  '999.999.999-99',
);
const order = new Order(shoppingCart, message, persistency, individualCustomer);
shoppingCart.addItem(new Product('banana', 4.55));
shoppingCart.addItem(new Product('morango', 10.0));
shoppingCart.addItem(new Product('abacate', 7.75));

console.log(shoppingCart.items);
console.log(shoppingCart.total);

const remove = shoppingCart.removeItem(2);

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
shoppingCart.clear();
console.log(shoppingCart.total());
console.log(shoppingCart.items);
