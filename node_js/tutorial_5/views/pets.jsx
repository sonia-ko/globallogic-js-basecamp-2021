import "./index.css";
import Header from "./header";

export default function Pets({ items, petName, contentPages: contentPages }) {
  return (
    <div className="pictures-list">
      <Header contentPages={contentPages}></Header>

      <h1>Welcome to the {petName} page </h1>
      <div className="gallery">
        {items.map((item) => (
          <div className="pet-image-container" key={`${petName}-${item.id}`}>
            <img src={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
