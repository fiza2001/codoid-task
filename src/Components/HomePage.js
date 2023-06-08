import "./HomePage.css"
import Layout from "./Layout.js"
import Section1 from "./Section1.js"
import Section2 from "./Section2.js"
import Section3 from "./Section3.js"
import Section4 from "./Section4.js"



export default function HomePage() {
    return(
        <Layout>
      
      <div>
        <h3 className="home-header">TO TRAVEL<br/> IS<br/> TO LIVE</h3>
          <img className="home-title-img" src={require("./home-title-img.jpg")} alt="" />
        </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
     
        </Layout>
    )
    
};
