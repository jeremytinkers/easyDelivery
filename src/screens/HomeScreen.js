import { Link } from "react-router-dom";

export default function HomeScreen() {
    return (
        <div>
            <h2> HomeScreen</h2>
            <h1>You are a : </h1>
            <Link to="/admin"><button>Admin</button></Link>
            <Link to="/rider"><button>Rider</button></Link>
        </div>
    )
}
