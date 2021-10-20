import { useState } from "react";
import data from "../../data";
import { v4 as uuidv4 } from 'uuid';


export default function CreateOrderScreen(props) {

    const [newOrder, setNewOrder] = useState({
        orderDescp: "",
        riderId: 0,
        endCoordLat: 0,
        endCoordLng: 0,
        startCoordLat: 0,
        startCoordLng: 0,

    });

    const availableRiders = data.riderData.filter((r) => r.status !== 0);

    // Handler for form changes. Updates the states using hooks
    function handleChange(e) {
        var { value, name } = e.target;

        var temp = newOrder;
        if (name === "orderDescp") {
            temp.orderDescp = value;
        } else if (name === "startCoordLat") {
            temp.startCoordLat = value;
        } else if(name === "startCoordLng")  {
            temp.startCoordLng = value;
        }else if (name === "endCoordLat") {
            temp.endCoordLat = value;
        } else {
            temp.endCoordLng = value;
        }
        setNewOrder(temp);
    }
    function addOrderHandler() {

        var t = newOrder;
        var newOrderId = uuidv4();
        console.log("Old orderset: " + JSON.stringify(data.curOrders));
        t={...t, orderId: newOrderId};
        t={...t, accepted:2};
        data.curOrders.push(t)
        console.log("New orderset: " + JSON.stringify(data.curOrders));
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

                    {/* Get riders who are available from database */}
                    <select
                        onChange={(e) =>
                            setNewOrder({ ...newOrder, riderId: (e.target.value)})}
                    >
                        {
                            availableRiders.map((curRider) => {
                                return <option value={curRider.id}>{curRider.name}</option>
                            })

                        }

                    </select>

                </form>
                    <button onClick={addOrderHandler}>
                        Submit and Return Home
                    </button>
            </div>
        </div>
    )
}
