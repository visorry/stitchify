export interface CartItemType {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  size?: string;
  stock: number;
  discount: number;
}
