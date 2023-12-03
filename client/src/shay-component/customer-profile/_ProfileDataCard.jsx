import React from "react";
import './css/_ProfileDataCard.css'

export default ({ data }) => {
    const { name, address, pincode } = data

    function unhide_place1() {
        let palceForm = document.getElementById('form1')
        palceForm.classList.toggle('hidden')
    }

    function unhide_place2() {
        let palceForm = document.getElementById('form2')
        palceForm.classList.toggle('hidden')
    }

    return (
        <div>
            <div className="container flex-left">
                <h2># Profile</h2>
            </div>
            <div className="container mb-5 details p-5 bg-light curve-border">
                <p className="flex-left">Name :
                    <span className="special">
                        {name}
                    </span>
                </p>
                <p className="flex-left">Place :
                    <span className="special">
                        {address}
                    </span>
                    <input onClick={unhide_place1} type="button" name="Edit" value="Edit" className="mx-4" />
                </p>
                <form className="hidden" id="form1" action="/customerUpdate">
                    <input type="text" id="inp1" name="address" required />
                    <input type="submit" />
                </form>
                <p className="flex-left">Pincode :
                    <span className="special">
                        {pincode}
                    </span>
                    <input onClick={unhide_place2} type="button" name="Edit" value="Edit" className="mx-4" />
                </p>
                <form className="hidden" id="form2" action="/customerUpdate">
                    <input type="number" id="inp2" name="pincode" required />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}