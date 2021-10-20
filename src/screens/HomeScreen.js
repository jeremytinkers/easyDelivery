import { Link } from "react-router-dom";

export default function HomeScreen() {
    return (
        <div className="container">
            <h1>You are a : </h1>
            <div className="row homeRow">
            {/* Admin View:- */}
                <Link to="/admin"><button>Admin👨‍✈️</button></Link>
            {/* Rider View:- */}
                <Link to="/rider"><button> Rider 🚗 </button></Link>
            </div>

        </div>
    )
}
