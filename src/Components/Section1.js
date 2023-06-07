import "./Section1.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Section1(params) {
  return (
    <div className="section1-main">
      <div>
        <p>
          Along Dusty Roads brings you the beauty of a life of travel,
          personally curated by us, Andrew & Emily.
          <br />
          <br />
          Our crafted guides, thoughtful narratives, and original photography
          journals wed wanderlust and practical advice to help and inspire
          curious travellers like you to make the most of your own slow,
          sustainable adventures.
          </p>
          <h3 className="section1-h3">WE WANT TO HELP YOU TO TRAVEL MORE, TRAVEL BETTER.</h3>
        <div className="social-links">
        <a className="mui" href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a className="mui" href="https://www.facebook.com/facebook/">
              <FacebookIcon />
            </a>
            <a className="mui" href="https://twitter.com/i/flow/login">
              <TwitterIcon />
            </a>
            <a className="mui" href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>

        </div>
        
        
      </div>
      <div>
        <img className="section1-img" src="https://images.squarespace-cdn.com/content/v1/53172b1be4b0cc8a5401db4a/1564529837147-XEF10BWTY1J0UOKLPLBH/DSC02497.jpg?format=500w" alt="girl" />
      </div>
    </div>
  );
}
