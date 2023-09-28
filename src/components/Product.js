import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <>
      <h1>Product Dashboard</h1>
      {JSON.stringify(products)}
    </>
  );
};

export default Product;
