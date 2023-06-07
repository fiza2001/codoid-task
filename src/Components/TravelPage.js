import "./TravelPage.css";
import Layout from "./Layout.js"



export default function TravelPage() {
  return (
   <Layout>
    <div>
      
      <div>
        <img
          className="travel-main-img"
          src={require("./travel-main.jpg")}
          alt=""
        />
      </div>
      <div className="travel-para">
        <p>
          Planning for your next big adventure can be daunting stuff. What do
          you pack? How can you possibly travel on a budget? What's the hell is
          travel insurance actually for? We don't have all the answers, but we
          certainly have a few. Our tried-and-tested travel essentials can be
          found here, whilst below you'll find all sorts of articles covering
          all things travel. Some will save you money, some will help you become
          a better traveller, whilst others make preparing a lot easier. They
          all have one thing in common though: helping you to plan before you
          leave home, so you can focus on having the best time possible once
          you're on the road.
        </p>
        <br /><br />
       <hr />
      </div>
      <div className="travel-better">
         <h3>HOW TO... TRAVEL BETTER</h3>
<div className="flex-align">
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel1.jpg")} alt="t1" />
            <p>GET THE BEST APPS FOR TRAVELLING</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel2.jpg")} alt="t2" />
            <p>USE THE GOOGLE MAPS OFFLINE WHEN YOU TRAVEL</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel3.jpg")} alt="t3" />
            <p>PACK FOR A CITY BREAK</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel4.jpg")} alt="t4" />
            <p>AVOID ATM CHARGES</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel5.jpg")} alt="t5" />
            <p>BOOK THE CAR RENTAL EARLY</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel6.jpg")} alt="t6" />
            <p>CHOOSE YOUR NEXT SLEEPING BAG</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel7.jpg")} alt="t7" />
            <p>USE LESS PLASTIC WHEN YOU TRAVEL</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel8.jpg")} alt="t8" />
            <p>MANANGE YOUR TRAVEL MONEY BETTER</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel9.jpg")} alt="t9" />
            <p>TAKE BETTER TRAVEL PHOTOS WITH YOUR PHONE</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel10.jpg")} alt="t10" />
            <p>TRAVEL WITH EUROPE'S LOW COST AIRLINE</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel11.jpg")} alt="t11" />
            <p>CREATE PROOF OF ONWARD TRAVEL</p>
         </div>
         <div className="travel-flex">
            <img className="travel-list-img" src={require("./travel12.jpg")} alt="t12" />
            <p>DO THE BEST THINGS BEFORE 48 HOURS YOU LEAVE</p>
         </div>
         </div>     
         
      </div>
      
    </div>
    </Layout>
  );
}
