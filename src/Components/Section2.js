import "./Section2.css";

export default function Section2() {
  return (
    <div>
      <img className="italy-img" src={require("./poster1.PNG")} alt="poster1" />
      <div className="italy-content">
      <p>
        Italy, a European country with a long Mediterranean coastline, has left
        a powerful mark on Western culture and cuisine. Its capital, Rome, is
        home to the Vatican as well as landmark art and ancient ruins. Other
        major cities include Florence, with Renaissance masterpieces such as
        Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city of
        canals; and Milan, Italy’s fashion capital. 
      </p>
      </div>
    </div>
  );
}
