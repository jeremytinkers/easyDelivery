import data from "../../data";

export default function AcceptScreen(props) {

    const curRiderId = props.match.params.id;
    const curOrderId = props.location.search ? props.location.search.split("?")[1] : 1;
    console.log("rider id: " + curRiderId + "  | orderid: " + curOrderId);

    var curCoord = "";
    var local_riderCoordLat = 0
    var local_riderCoordLng = 0

    function handleChange(e) {
        var { value, name } = e.target;

        if (name === "riderCoordLat") {
            local_riderCoordLat = value;
        } else {
            local_riderCoordLng = value;
        }
    }

    function submitHandler() {

        console.log(data.curOrders);
        for (var i = 0; i < data.curOrders.length; i++) {

            if (data.curOrders[i].accepted === 2) {
                //You can remove this later....
                console.log("bfore acceptedyes: " + JSON.stringify(data.curOrders[i]));
                if (Number(data.curOrders[i].riderId) === Number(curRiderId)) {
                    console.log("bfore riderIdyes: " + JSON.stringify(data.curOrders[i]));
                    if (data.curOrders[i].orderId == curOrderId) {

                        data.curOrders[i] = { ...data.curOrders[i], riderCoordLat: local_riderCoordLat };
                        data.curOrders[i] = { ...data.curOrders[i], riderCoordLng: local_riderCoordLng };
                        data.curOrders[i] = { ...data.curOrders[i], accepted: 1 };
                        console.log("after: " + JSON.stringify(data.curOrders[i]));
                    }
                }
            }
        }
        console.log(data.curOrders);
        const nextPath = "/rider/" + curRiderId;
        props.history.push(nextPath);
    }

    return (
        <div>
            <div className="createFormContainer">
                <div className="createForm">
                    <h1>Enter Current Coordinates :-</h1>
                    <form>
                        <input
                            type="number"
                            onChange={handleChange}
                            name="riderCoordLat"
                            placeholder={"Enter your Coordinates - Lat"}
                        />
                        <input
                            type="number"
                            onChange={handleChange}
                            name="riderCoordLng"
                            placeholder={"Enter your Coordinates - Lng"}
                        />
                    </form>

                    <button onClick={submitHandler}>
                        Submit
                    </button>

                </div>
            </div>
        </div>
    )
}
