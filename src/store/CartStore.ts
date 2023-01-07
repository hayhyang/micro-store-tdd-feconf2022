import Cart from '../model/Cart';
import Item from '../model/Item';
import Store from './Store';

export type CartStoreSnapshot = {
  items: Item[];
};

export default class CartStore extends Store<CartStoreSnapshot> {
  cart = new Cart();

  constructor() {
    super();
    this.takeSnapshot();
  }

  addItem({ productId, quantity }: { productId: number; quantity: number }) {
    this.cart = this.cart.addItem({ productId, quantity });

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      items: this.cart.items,
    };
  }
}
