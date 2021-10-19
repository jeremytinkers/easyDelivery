import { Link } from "react-router-dom";
import data from "../../data";

export default function AdminScreen() {
    return (
        <div>
            <h1>Orders Status</h1>
            {
                data.curOrders.map((curOrder) => {
                    return <div className="row">
                        <div>Order Description: {curOrder.orderDescp}</div>
                        <div>Map Link: </div>
                        <div>Rider Id: {curOrder.riderId}</div>
                        {
                            (curOrder.accepted === 1) ? (<div>Accepted ✔️ </div>) :
                                ((curOrder.accepted === 2) ? <div>Not Responded Yet ➖</div> : <div>Declined ❌</div>)
                        }
                        {
                            (curOrder.finished == 1) ? (<div>Finished ✔️</div>) :
                                (<div>Not Finished ❌</div>)
                        }
                    </div>
                })
            }

            <Link to="/admin/createOrder"><button>Create New Order</button></Link>


        </div>
    )
}
