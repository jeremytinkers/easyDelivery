import data from "../../data"

export default function orderStatus() {
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
                            (data.curOrder.accepted===1)? (<div>Accepted ✔️ </div>): 
                            ((data.curOrder.accepted===2)? <div>Not Responded Yet ➖</div> : <div>Declined ❌</div> )
                        }
                    </div>
                })
            }

            <Link to="/admin/createOrder"><button>Create New Order</button></Link>


        </div>

    )
}
