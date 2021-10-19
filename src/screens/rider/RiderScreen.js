import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../data';


// var curRiderId = prompt("Please enter your riderId", "00");
// console.log("Rider Id:" + curRiderId);
// curRiderId = Number(curRiderId);



export default function RiderScreen(props) {

    const curRiderId = props.match.params.id;

    const curRiderOrders = data.curOrders.filter((o) => 
    {
        if(o.riderId === Number(curRiderId)){
            if(o.accepted === 2){
                return o;
            }
        }
    }
    );

    function handleAccept(order) {
        console.log("in fn, curOrder: " + JSON.stringify(order.curOrder.orderId));
        const acceptPath = "/rider/acceptOrder/" + curRiderId + "?" + order.curOrder.orderId;
        console.log("path is : " + acceptPath)
        props.history.push(acceptPath);
    }

    return (
        <div>
            <h1>Orders For You from Admin:-</h1>
            {
                curRiderOrders.map((curOrder) => {
                    return <div className="row">
                        <div>Order Description: {curOrder.orderDescp}</div>
                        <div>Map Link: </div>
                        <div>Rider Id: {curOrder.riderId}</div>
                        <button onClick={() => handleAccept({ curOrder})}>Accept</button>
                        <Link to="/admin/declineOrder"><button>Decline</button></Link>
                    </div>
                })
            }

        </div>

    )
}
