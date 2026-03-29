import { useState } from "react";

function FlavorItem({ flavor, onAddFlavor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flavor-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={flavor.image} alt={flavor.name} />
      <h3>{flavor.name}</h3>
      
      <p>{flavor.price}</p>
      
      {isHovered && <p className="description">{flavor.description}</p>}
      
      <button onClick={() => onAddFlavor(flavor)}>Add to Order</button>
    </div>
  );
}
export default FlavorItem;