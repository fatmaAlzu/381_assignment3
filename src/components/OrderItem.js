function OrderItem({ item, onRemove }) {
  const itemTotal = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);

  return (
    <div className="order-item-container">
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${itemTotal}</p>
      <button className="remove" onClick={() => onRemove(item.id)}>
        Remove Item
      </button>
    </div>
  );
}
export default OrderItem;