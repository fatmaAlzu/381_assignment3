import OrderItem from './OrderItem';

function OrderList({ orders, onRemove }) {
  const calculateTotal = () => {
    return orders.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace('$', ''));
      return total + (priceNum * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className="order-list">
    <h3>Your Order</h3>
    <div className="order-items-wrapper">
        {orders.map((item) => (
        <OrderItem key={item.id} item={item} onRemove={onRemove} />
        ))}
    </div>
    <h4>Total: ${calculateTotal()}</h4>
    </div>
  );
}
export default OrderList;