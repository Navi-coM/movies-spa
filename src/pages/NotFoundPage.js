import { Link } from "react-router-dom";

function NotFoundPage() {
    return <div className="container">
         <h1>This page does not exist</h1>
         <div>
            <Link to="/">Home Page</Link>    
        </div>
    </div>
   
}

export { NotFoundPage };