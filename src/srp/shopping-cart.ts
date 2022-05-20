type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('O carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMenssage('Pedido recebido.');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMenssage(msg: string): void {
    console.log('messagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();

const newItem = shoppingCart.addItem({ name: 'banana', price: 4.55 });
const newItem2 = shoppingCart.addItem({ name: 'morango', price: 10.0 });
const newItem3 = shoppingCart.addItem({ name: 'abacate', price: 7.75 });

console.log(shoppingCart.items);
console.log(shoppingCart.total);

const remove = shoppingCart.removeItem(2);

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.saveOrder();
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
shoppingCart.clear();
console.log(shoppingCart.total());
console.log(shoppingCart.items);
