import "./Section3.css";

export default function Section3() {
  return (
    <div className="section3-main">
      <div className="section3-card">
       
        <img
          className="section3-img"
          src={require("./sicily.jpg")}
          alt="sicily"
        />
        <h4>SICILY</h4>
      </div>
      <div className="section3-card">
        <img
          className="section3-img"
          src={require("./cinque.jpg")}
          alt="cinque"
        />
        <h4>CINQUE</h4>
        
      </div>
      <div className="section3-card">
        <img
          className="section3-img"
          src={require("./venice.jpg")}
          alt="venice"
        />
        <h4>VENICE</h4>
      </div>
    </div>
  );
}
