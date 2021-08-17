const Verification = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log ("submit");
    }
    
    return (
        <div>
            <div>
                <h1>Account Verification</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Enter your code here: </label>
                    <input type="text"/>
                </div>
                <input className="Verify" type = 'submit' value =  'Verify'></input>
            </form>
        </div>
    )
}

export default Verification
