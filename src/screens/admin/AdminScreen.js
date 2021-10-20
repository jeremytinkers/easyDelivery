import { Link } from "react-router-dom";
import data from "../../data";

export default function AdminScreen(props) {

    function handleMapRequest(order) {

        const mapPath = "/admin/viewMap/" + order.orderId;
        console.log(JSON.stringify(order));
        props.history.push(mapPath);
    }


    return (
        <div>
            <div className="orderList">
            {/* List out all Orders Assigned by Admin */}
                <h1>Orders Status</h1>
                {
                    data.curOrders.map((curOrder) => {
                        return <li><div className="row">
                            <div>Order Description: {curOrder.orderDescp}</div>
                            <button onClick={() => handleMapRequest(curOrder)}>View On Map</button>
                            <div>Rider Id: {curOrder.riderId}</div>
                            {
                                (curOrder.accepted === 1) ? (<div>Accepted ✔️ </div>) :
                                    ((curOrder.accepted === 2) ? <div>Not Responded Yet ➖</div> : <div>Declined ❌</div>)
                            }
                            {
                                (curOrder.finished == 1) ? (<div>Finished ✔️</div>) :
                                    (<div>Not Finished ❌</div>)
                            }
                        </div></li>
                    })
                }

            </div>

            <div className="container">
                <Link to="/admin/createOrder"><button>Create New Order</button></Link>
            </div>
        </div>
    )
}
