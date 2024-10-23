import React from "react";

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);

  const increaeseCard = () => {
    setCount(count + 1);
  };

  const decreaeseCard = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count - 0);
    }
  };

  const addToCart = () => {
    alert(`"${product.name}" добавлено в корзину!`);
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Цена: {product.price}₽</p>
      <div>
        <button onClick={decreaeseCard}>-</button>
        <span>{count}</span>
        <button onClick={increaeseCard}>+</button>
      </div>
      <p>Итоговая цена: {count * product.price} ₽</p>
    </div>
  );
};

const App = () => {
  const products = [
    { id: 1, name: 'Intel Core I5 - 13600f', price: 100 },
    { id: 2, name: 'GTX 1660 Super', price: 200 },
    { id: 3, name: 'RTX 3060 STORM X', price: 300 },
  ];

  return (
    <div>
      <h1>Магазин</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;