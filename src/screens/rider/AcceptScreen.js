import data from "../../data";

export default function AcceptScreen(props) {

    const curRiderId = props.match.params.id;
    const curOrderId = props.location.search ? props.location.search.split("?")[1] : 1;
    console.log("rider id: " + curRiderId + "  | orderid: " + curOrderId);

    var curCoord = "";

    function handleChange(e) {
        var { value } = e.target;
        curCoord = value;
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

                        data.curOrders[i] = { ...data.curOrders[i], riderCoord: curCoord };
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
                            onChange={handleChange}
                            name="riderCurCoord"
                            placeholder={"Enter your Coordinates"}
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
