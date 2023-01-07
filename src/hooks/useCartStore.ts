import { useSyncExternalStore } from 'react';
import CartStore, { CartStoreSnapshot } from '../store/CartStore';

const cartStore = new CartStore();

export default function useCartStore(): [CartStoreSnapshot, CartStore] {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      cartStore.addListener(onStoreChange);
      return () => cartStore.removeListener(onStoreChange);
    },
    () => cartStore.getSnapshot()
  );
  return [snapshot, cartStore];
}
