import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('O carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMenssage('Pedido recebido.');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
