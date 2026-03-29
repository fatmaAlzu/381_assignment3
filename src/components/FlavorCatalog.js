import flavors from '../data/flavors';
import FlavorItem from './FlavorItem';

function FlavorCatalog({ onAddFlavor }) {
  return (
    <div className="flavor-grid">
      {flavors.map((flavor) => (
        <FlavorItem key={flavor.id} flavor={flavor} onAddFlavor={onAddFlavor} />
      ))}
    </div>
  );
}
export default FlavorCatalog;