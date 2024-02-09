import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch } from 'react-redux';
// import Products from './passthedata';

function GroupExample(props) {
  const dispatch = useDispatch(); // Fix the variable name to dispatch

  if (!props.isVisible) {
    return <></>;
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { name: props.title, price: props.price },
    });
  };

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          {/* /props drilling
          <Products name={props.Cardtitle}/> */}

          <Card.Title>{props.Cardtitle || "Please put some data"}</Card.Title>
          <Card.Text>{props.Description || "Please put some description"}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${props.Price || 'Please put the Price'}</small>
        </Card.Footer>
        <button onClick={addToCart}>Add to Cart</button>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
