import React from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const CartPage = () => {
  const { cart, removeFromCart } = useAuth();

  return (
    <Container>
      <h2 className="my-4">r Cart</h2>
      {cart.length === 0 ? (
        <Alert variant="info">Your cart is empty.</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item._id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CartPage;