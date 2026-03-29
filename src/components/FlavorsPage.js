import {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlavorCatalog from "./FlavorCatalog";
import OrderList from "./OrderList";

function FlavorsPage() {
  const [orders, setOrders] = useState([]);

    const addFlavorToOrder = (flavor) => {
    setOrders((prevOrders) => {
        const existingItem = prevOrders.find((item) => item.id === flavor.id);
        if (existingItem) {
        return prevOrders.map((item) =>
            item.id === flavor.id ? {...item, quantity: item.quantity + 1} : item
        );
        }
        return [...prevOrders, {...flavor, quantity: 1}];
    });
    };
    const removeFlavor = (id) => {
    setOrders((prevOrders) => {
        return prevOrders
        .map((item) =>
            item.id === id ? {...item, quantity: item.quantity - 1} : item
        )
        .filter((item) => item.quantity > 0);
    });
    };

  return (
    <div className="flavors-page">
      <Header />
      <h2> Ice Cream Flavors</h2>
      <div className="content">
        <FlavorCatalog onAddFlavor={addFlavorToOrder} />
        <OrderList orders={orders} onRemove={removeFlavor} />      
        </div>
      <Footer />
    </div>
  );
}
export default FlavorsPage;