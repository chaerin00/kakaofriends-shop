import React from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  width: 27.5rem;
  height: 40.1rem;
  .item__image {
    width: 27.5rem;
  }
  .item__name {
    font-size: 1.6rem;
    color: #777777;
    margin: 1.5rem 0 0.5rem 0;
  }
  .item__price {
    font-size: 1.6rem;
    font-weight: bold;
    color: #000000;
  }
`;

const Item = ({ item }) => {
  return (
    <ItemWrap>
      <img className="item__image" src={item.image} alt="" />
      <div className="item__name">{item.name}</div>
      <div className="item__price">{item.price}원</div>
    </ItemWrap>
  );
};

export default Item;
