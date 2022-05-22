/*
Liskov substitution principle (principio da substituição de Liskov)
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.

ou seja e um principio de coerencia  vara discount para um exemplo.
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

const fiftyPercentDsicount = new FiftyPercentDsicount();
const tenPercentDsicount = new TenPercentDsicount();
const noDsicount = new NoDsicount();
const shoppingCart = new ShoppingCart(tenPercentDsicount);
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
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
shoppingCart.clear();
console.log(shoppingCart.total());
console.log(shoppingCart.items);
