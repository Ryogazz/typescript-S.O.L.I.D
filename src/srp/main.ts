import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);
shoppingCart.addItem(new Product('banana', 4.55));
shoppingCart.addItem(new Product('morango', 10.0));
shoppingCart.addItem(new Product('abacate', 7.75));

console.log(shoppingCart.items);
console.log(shoppingCart.total);

const remove = shoppingCart.removeItem(2);

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
shoppingCart.clear();
console.log(shoppingCart.total());
console.log(shoppingCart.items);
