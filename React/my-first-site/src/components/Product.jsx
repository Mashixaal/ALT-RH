const Product = ({ name, price, description, stock }) => {
    return (
      <div className="card max-width-500 m-3">
        <p className="card-header fw-bold">{name}</p>
        <div className="card-body">
          <p className="fw-bold">{price}€</p>
          <p>{description}</p>
          <p className="fst-italic">{stock} en stock</p>
        </div>
      </div>
    );
  };
  
  export default Product;
  