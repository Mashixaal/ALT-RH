import "./bootstrap.min.css";
// import './bootstrap.min.css.map'
import NavBar from "./components/NavBar";
import Product from "./components/Product";

const App = () => {
  const product1 = {
    name: "Nike Air Max 270 React",
    price: "160",
    description:
      "La Nike Air Max 270 React s'inspire de deux icônes de la grande famille Air : la Air Max 180 et la Air Max 93. Elle est dotée de la plus grande unité Air au talon jamais utilisée qui offre un confort incroyable tout au long de la journée.",
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
