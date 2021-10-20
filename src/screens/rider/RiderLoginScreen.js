export default function RiderLoginScreen(props) {

    var curRiderId = 0;

    function handleChange(e) {
        var { value } = e.target;
        curRiderId = Number(value);
    }


    function submitHandler() {
        if(!isNaN(curRiderId)){
            const riderScreenPath = "/rider/" + curRiderId; //move to a rider specifc path
            props.history.push(riderScreenPath);
        }
    }


    return (
        <div>
        <div className="createFormContainer">
            <div className="createForm">
                <h1>Rider Login :-</h1>
                <form>
                    <input
                        onChange={handleChange}
                        name="riderId"
                        placeholder={"Enter your Rider Id"}
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
