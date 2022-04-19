import React, { useEffect, useState } from "react";
import { ListItem, Item } from "./ListItem"

const createElements = (startingId: number, amount: number) => Array(amount).fill(0).map((_, index) => ({
  id: startingId + index,
  header: `Added element ${startingId + index}`,
  text: `Added element text text text text text text text text ${startingId + index}`,
}));

export const MainList = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("http://localhost:3456/list")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  const removeHalf = () => {
    setItems(items.filter((elem, index) => index % 2 === 0));
  }
  
  const removeFivePercent = () => {
    setItems(items.filter((elem, index) => index % 20 === 0));
  }
  
  const modifyHalf = () => {
    setItems(items.map((elem, index) => {
      if (index % 2 !== 0) return elem;
      else return {
        id: elem.id,
        header: `Header: ${elem.id}`,
        text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
      }
    }));
  }
  
  const modifyFivePercent = () => {
    setItems(items.map((elem, index) => {
      if (index % 20 !== 0) return elem;
      else return {
        id: elem.id,
        header: `Header: ${elem.id}`,
        text: `sampletextsampletextsampletextsampletextsampletext ${elem.id}`
      }
    }));
  }
  
  const addHalf = () => {
    const newElements = createElements(items.length + 1, items.length / 2);
    setItems([...items, ...newElements]);
  }
  
  const addFivePercent = () => {
    const newElements = createElements(items.length + 1, items.length / 20);
    setItems([...items, ...newElements]);
  }

  return <div>
    <div className="button-panel">
      <button onClick={removeFivePercent}>Remove 5%</button>
      <button onClick={removeHalf}>Remove 50%</button>
      <button onClick={modifyFivePercent}>Modify 5%</button>
      <button onClick={modifyHalf}>Modify 50%</button>
      <button onClick={addFivePercent}>Add 5%</button>
      <button onClick={addHalf}>Add 50%</button>
    </div>
    <div className="list-container">
      {items.map((item) => <ListItem item={item} key={item.id} />)}
    </div>
  </div>
}