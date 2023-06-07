import BlogCards from "./BlogCards.js"
import Layout from "./Layout.js"
import "./BlogPage.css"


export default function BlogPage() {
    return(
        <Layout>
        <div>
            <h2 className="h2-title">OUR MOST POPULAR POSTS</h2>
            <hr />
            <BlogCards />
           

        </div>
        </Layout>
    )
    
};
