import React from 'react';
import { images } from '../assets/images';
import './AuctionItemsSection.css';

interface AuctionItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

const auctionItems: AuctionItem[] = [
  {
    id: 1,
    imageUrl: images.image2,
    title: 'Item 1',
    description: 'Descrição do item 1',
    price: 'R$ 100,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
  {
    id: 2,
    imageUrl: images.image2,
    title: 'Item 2',
    description: 'Descrição do item 2',
    price: 'R$ 200,00',
  },
];

const AuctionItemsSection: React.FC = () => {
  return (
    <div className="auction-items-section">
      {auctionItems.map((item) => (
        <div key={item.id} className="auction-card">
          <img src={item.imageUrl} alt={item.title} className="auction-card-image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p className="auction-card-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AuctionItemsSection;
