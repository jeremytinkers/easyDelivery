import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../data';


// var curRiderId = prompt("Please enter your riderId", "00");
// console.log("Rider Id:" + curRiderId);
// curRiderId = Number(curRiderId);

export default function RiderScreen(props) {

    const curRiderId = props.match.params.id;

    const curRiderOrders = data.curOrders.filter((o) => {
        console.log("bforeRiderId" + o.riderId + "    ||   " + curRiderId);
        console.log(o);
        if (Number(o.riderId) === Number(curRiderId)) {
            console.log("yesRiderId" + console.log(o.riderId));
            if (Number(o.accepted) === 2) {
                console.log("selected cuz accepted is 2");
                return o;
            }
        }
    }
    );

    const ongoingOrders = data.curOrders.filter((o) => {
        console.log("bforeRiderId" + o.riderId + "    ||   " + curRiderId);
        console.log(o);
        if (Number(o.riderId) === Number(curRiderId)) {
            console.log("yesRiderId" + console.log(o.riderId));
            if (Number(o.accepted) === 1) {
                console.log("selected cuz accepted is 2");
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

    function handleFinishOrder(order) {
        var idx = data.curOrders.findIndex((x) => order.curOrder.orderId == x.orderId)

        data.curOrders[idx] = { ...data.curOrders[idx], finished: 1 };
        console.log(JSON.stringify(data.curOrders));
        props.history.push("/");
    }

    return (
        <div>
            <div className="orderList">
                <h1>New Orders For You from Admin:-</h1>
                {
                    curRiderOrders.map((curOrder) => {
                        return <li><div className="row">
                            <div>Order Description: {curOrder.orderDescp}</div>
                            <div>Stat Coordinates: {curOrder.startCoordLat} {curOrder.startCoordLat}</div>
                            <div>End Coordinates: {curOrder.endCoordLat} {curOrder.endCoordLat}</div>
                            <button onClick={() => handleAccept({ curOrder })} className="acceptButton">Accept</button>
                            <Link to="/admin/declineOrder" ><button className="declineButton">Decline</button></Link>
                        </div></li>
                    })
                }

            </div>


            <div className="orderList">    
            
            <h1>Ongoing Orders:-</h1>
                {
                    ongoingOrders.map((curOrder) => {
                        return <li><div className="row">
                            <div>Order Description: {curOrder.orderDescp}</div>
                            <button onClick={() => handleFinishOrder({ curOrder })}>Finish</button>
                        </div></li>
                    })
                }</div>

        </div>

    )
}
