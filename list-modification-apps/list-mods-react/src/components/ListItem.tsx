import React from 'react';
import './ListItem.css';

export interface Item {
  id: number;
  text: string;
  header: string;
}

interface Props {
  item: Item;
}

export const ListItem = ({ item }: Props) => (
  <div className="root">
    <div className="id-container">{item.id}</div>
    <div>
      <div>{item.header}</div>
      <div>{item.text}</div>
    </div>
  </div>
);
