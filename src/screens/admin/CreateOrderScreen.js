import { useState } from "react";
import data from "../../data";
import { v4 as uuidv4 } from 'uuid'; //for unique order Ids


export default function CreateOrderScreen(props) {

    //newOrder holds results from create order form
    const [newOrder, setNewOrder] = useState({
        orderDescp: "",
        riderId: 0,
        endCoordLat: 0,
        endCoordLng: 0,
        startCoordLat: 0,
        startCoordLng: 0,

    });

    //Filter out only those riders that are available, so that select shows only those
    const availableRiders = data.riderData.filter((r) => r.status !== 0);

    // Handler for form changes. Updates the states
    function handleChange(e) {
        var { value, name } = e.target;

        var temp = newOrder;
        if (name === "orderDescp") {
            temp.orderDescp = value;
        } else if (name === "startCoordLat") {
            temp.startCoordLat = value;
        } else if (name === "startCoordLng") {
            temp.startCoordLng = value;
        } else if (name === "endCoordLat") {
            temp.endCoordLat = value;
        } else {
            temp.endCoordLng = value;
        }
        setNewOrder(temp);
    }


    function addOrderHandler() {

        var t = newOrder;
        //Generate new id
        var newOrderId = uuidv4();
        //Append orderId
        t = { ...t, orderId: newOrderId };
        /*Append Accepted State
        Do note:-
        1-> Accepted
        2-> Not Responded
        0-> Declined */
        t = { ...t, accepted: 2 };

        data.curOrders.push(t)
        props.history.push("/admin");
    }

    return (
        <div className="createFormContainer">
            <div className="createForm">
                <h1>Enter New Order Details :-</h1>

                <form>
                    <input

                        onChange={handleChange}
                        name="orderDescp"
                        placeholder={"Enter Order Description"}
                    />
                    <input
                        type="number"
                        onChange={handleChange}
                        name="startCoordLat"
                        placeholder="Enter Start Coordinate Lat"
                    />
                    <input
                        type="number"
                        onChange={handleChange}
                        name="startCoordLng"
                        placeholder="Enter Start Coordinate Lng"
                    />
                    <input
                        type="number"
                        onChange={handleChange}
                        name="endCoordLat"
                        placeholder="Enter End Coordinate Lat"
                    />
                    <input
                        type="number"
                        onChange={handleChange}
                        name="endCoordLng"
                        placeholder="Enter End Coordinate Lng"
                    />

                    <select
                        onChange={(e) =>
                            setNewOrder({ ...newOrder, riderId: (e.target.value) })}
                    >
                        {
                            availableRiders.map((curRider) => {
                                return <option value={curRider.id}>{curRider.name}</option>
                            })

                        }

                    </select>

                </form>
                <button onClick={addOrderHandler} className ="afterFormButton">
                    Submit and Return Home
                </button>
            </div>
        </div>
    )
}
