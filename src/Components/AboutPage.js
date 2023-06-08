import Layout from "./Layout.js"
import "./AboutPage.css"

export default function AboutPage() {
  return (
    <Layout>
    <div>
    <div className="about-main">
      <header className="about-header"><h1>ABOUT<br/> US</h1></header>
      <img className="about-img" src={require("./about1.jpg")} alt="about-title" />
      <div className="about-content-main">
        <div className="about-content">
          <h3>WE'RE ANDREW & EMILY.</h3>
          <p>
            Our story began late one night and early one morning around a
            kitchen table in our rented flat in East London, after too many gins
            and too long putting too many dreams on hold. The plan? To have an
            adventure. Twelve months later, after saving as much as we possibly
            could, we quit our jobs in the UK and arrived in Mexico with
            overstuffed backpacks, a couple of cameras, and the hope that our
            best days lay ahead of us. On the road. By the sea.<br/><br/> Atop a mountain
            peak. In the serendipitous moments in between. We travelled Latin
            America together for two years in total (crazy right?). Our budget
            was strict and our itinerary loose; and that frugality shaped our
            journey, helping us to spend a long time going slowly to new places.
            And it allowed us to start this blog. Travel is the thing that makes
            the two of us feel the most alive. It sets our senses on fire. It is
            responsible for changing our lives for the better. Without
            adventures or a curiosity to venture toward somewhere new and
            different to home, we would be rootless and lost. <br/><br/>Travel is what
            makes us happy. We created Along Dusty Roads because we wanted to
            help people travel more + travel better. We felt that sharing our
            experiences, our perspectives, our mistakes, and our advice would
            contribute a little bit to making the travel experience better for
            some people, and better in the long run for some of the people and
            places we all visit along the way. We wanted travellers like you to
            use what we write and what we photograph as a handbook to craft your
            own memories + adventures out on the road. To write your own
            stories.
          </p>
        </div>
      </div>
     
    </div>
    
    </div>
    </Layout>
  );
}
