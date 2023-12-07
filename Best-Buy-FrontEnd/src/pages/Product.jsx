import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(
    products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  );
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    //window.scrollTo(0, 0);

    let get = `http://localhost:5000/Product?api_key=VEu4DRF1Wwgl54oI4TerpOTq`;

    console.log(get);

    fetch(get)
    .then((r)=> r.json())
    .then((json)=> {
        console.log(id);
        console.log(json.data.filter((item) => item.id === id)[0])
        setSelectedProduct(json.data.filter((item) => item.id === id)[0])
    });
    
  }, [selectedProduct, id]);

  // useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={selectedProduct?.name} />
      <ProductDetails selectedProduct={selectedProduct} />
    </Fragment>
  );
};

export default Product;
