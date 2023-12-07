import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.imgUrl ? require(`../../../public/Images/${selectedProduct?.imgUrl}`) : ""} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.name}</h2>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category:{selectedProduct?.category}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
