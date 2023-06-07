import "./Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
    const now = new Date().getFullYear()
    return(
        <div className="footer-main">
            <div className="footer-content">
            <h2>ALONG DUSTY ROADS</h2>
            <p>Along Dusty Roads is a travel blog by British couple, Andrew & Emily. </p>
            <p>It promotes sustainable and responsible travel for the curious modern day explorer.</p>
            <p>· buy us a coffee ·</p><br />
            <div >
                <a className="footer-social-links" href="https://www.instagram.com/"><InstagramIcon/></a>
                <a className="footer-social-links" href="https://www.facebook.com/facebook/"><FacebookIcon/></a>
                <a className="footer-social-links" href="https://twitter.com/i/flow/login"><TwitterIcon/></a>
                <a className="footer-social-links" href="https://www.youtube.com/"><YouTubeIcon/></a>
            </div>
            
            </div>
            <hr />
            <p>@Along Dusty Roads Ltd {now}</p>
        </div>
    )
    
};
