import './bootstrap.min.css' 
// import './bootstrap.min.css.map' 
import NavBar from "./components/NavBar";
import Product from "./components/Product";

const App = () => {
  const product1 = {
    name: "Nike",
    price: "160",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
  };
  return (
    <div>
      <NavBar />
      <Product
        name={product1.name}
        price={product1.price}
        description={product1.description}
        stock={product1.stock}
      />
    </div>
  );
};

export default App;
