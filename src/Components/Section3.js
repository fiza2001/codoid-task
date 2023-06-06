import "./Section3.css"

export default function Section3() {
    return(
        <div className="section3-main">
            <div className="section3-card"><img className="section3-img" src={require("./sicily.jpg")} alt="sicily" /></div>
            <div className="section3-card"><img className="section3-img" src={require("./cinque.jpg")} alt="cinque" /></div>
            <div className="section3-card"><img className="section3-img" src={require("./venice.jpg")} alt="venice" /></div>
            
        </div>
    )
    
};
