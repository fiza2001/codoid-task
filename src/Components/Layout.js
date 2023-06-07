import Header from "./Header.js"
import Footer from "./Footer.js"

export default function Layout(props) {
    return(
        <>
        <Header />
        <main>{props.children}</main>
        <Footer />
        </>
    )
    
};
