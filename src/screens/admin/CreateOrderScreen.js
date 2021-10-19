import { useState } from "react";
import data from "../../data";
import { v4 as uuidv4 } from 'uuid';


export default function CreateOrderScreen(props) {

    const [newOrder, setNewOrder] = useState({
        orderDescp: "",
        startCoord: "",
        riderId: "",
        endCoord: "",
    });

    const availableRiders = data.riderData.filter((r) => r.status !== 0);

    // Handler for form changes. Updates the states using hooks
    function handleChange(e) {
        var { value, name } = e.target;

        var temp = newOrder;
        if (name === "orderDescp") {
            temp.orderDescp = value;
        } else if (name === "startCoord") {
            temp.startCoord = value;
        } else {
            temp.endCoord = value;
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
                        type="email"
                        onChange={handleChange}
                        name="startCoord"
                        placeholder="Enter Start Coordinates"
                    />
                    <input
                        onChange={handleChange}
                        name="endCoord"
                        placeholder="Enter End Coordinates"
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
