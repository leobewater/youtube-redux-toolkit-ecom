import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch an action to fetchProducts
    dispatch(getProducts());

    // fetch('https://fakestoreapi.com/products')
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);

  const addtoCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={() => addtoCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      {status === StatusCode.LOADING && <div>Loading Products...</div>}
      {status === StatusCode.ERROR && <div>Error loading products from API</div>}
      {status === StatusCode.IDLE && products.length > 0 && (
        <div className="row">{cards}</div>
      )}
    </>
  );
};

export default Product;
