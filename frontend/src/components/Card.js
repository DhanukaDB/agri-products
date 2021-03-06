import React from "react";
import styled from "styled-components";
import { useStateValue } from '../StateProvide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Carditem({ id, image, title, price }) {
 
  const [{ cart },dispatch] = useStateValue();
  console.log("cart >>>>", cart);
  const addToCart = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        image,
        
      },
    });
  };
  const [{ favourite },dispatch1] = useStateValue();

  console.log("favourite >>>>", favourite);
  const addToFavourites = (e) => {
    e.preventDefault();

    dispatch1({
      type: "ADD_TO_WISHLIST",
      item: {
        id,
        title,
        price,
        image,
        
      },
    });
  };
  return (
    <Container>
      {/* implement products attributes in a card */}
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        
        <p>Rs. {price}.00</p>
        <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" onClick={addToFavourites}/>}
     
      />
        <button onClick={addToCart}>Add to Cart  <ShoppingCartIcon/></button>
   
      </Description>
    </Container>
  );
}

const Container = styled.div`
 height: 370px;
    width: 200px;
    background: #defade;
    border-radius: 15px;
    position:static;
    border: none;
    overflow: hidden;
    box-shadow:0px 24px 48px 0 rgba(0,0,0,0.1);
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color:#adff2f;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Carditem;