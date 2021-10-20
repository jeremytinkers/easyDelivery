import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../data';

export default function RiderScreen(props) {

    const curRiderId = props.match.params.id; //fetch params.id

    //Filter out all orders from the general order set -> data.curOrders based on whether rider has not responded yet(accepted==2) and if the order is meant for current rider

    const curRiderOrders = data.curOrders.filter((o) => {
        if (Number(o.riderId) === Number(curRiderId)) {
            if (Number(o.accepted) === 2) {
                return o;
            }
        }
    }
    );

    //Filter out order that the rider has accepted
    const ongoingOrders = data.curOrders.filter((o) => {
        if (Number(o.riderId) === Number(curRiderId)) {
            if (Number(o.accepted) === 1) {
                return o;
            }
        }
    }
    );

    //Handles accept request from rider
    function handleAccept(order) {
        const acceptPath = "/rider/acceptOrder/" + curRiderId + "?" + order.curOrder.orderId;
        props.history.push(acceptPath);
    }

    //Handles decline request from rider
    function handleDecline(order) {
        var idx = data.curOrders.findIndex((x) => order.curOrder.orderId == x.orderId)
        data.curOrders[idx] = { ...data.curOrders[idx], accepted: 0 };
        props.history.push("/");
    }

    //Handles Finish signal from rider
    function handleFinishOrder(order) {
        var idx = data.curOrders.findIndex((x) => order.curOrder.orderId == x.orderId)
        data.curOrders[idx] = { ...data.curOrders[idx], finished: 1 };
        props.history.push("/");
    }

    return (
        <div>
            <div className="orderList">
                {/* Lists out news orders that rider has not responded yet to */}
                <h1>New Orders For You from Admin:-</h1>
                {
                    curRiderOrders.map((curOrder) => {
                        return <li><div className="row">
                            <div>Order Description: {curOrder.orderDescp}</div>
                            <div>Stat Coordinates: {curOrder.startCoordLat} {curOrder.startCoordLat}</div>
                            <div>End Coordinates: {curOrder.endCoordLat} {curOrder.endCoordLat}</div>
                            <button onClick={() => handleAccept({ curOrder })} className="acceptButton">Accept</button>
                            <button onClick={() => handleDecline({ curOrder })} className="declineButton">Decline</button>
                        </div></li>
                    })
                }

            </div>


            <div className="orderList">
                {/* Lists out orders that the rider has reponded to */}
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
