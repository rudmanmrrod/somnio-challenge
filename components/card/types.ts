export interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  onAddItem: (id:number) => void;
}