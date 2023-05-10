export type TData = {
  id: string;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  category: string;
};

export type TChangeCart = (id: string) => void;
