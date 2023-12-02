import React from "react";
import Card from "./_CustomerViewCard";
import logo from './assets/imgs/1.png'
import "./scripts/filter-toggle";

export default () => {
    return (
        <div>

            <div className="container mb-5  ">
                <input type="button" className="border-dark flex-left px-5 py-2 fltr mb-2" onclick="filter()" value="Filters" />
                <br />
                <form className="hidden" id="form" action="/filter">


                    <select name="filter_details" className="form-select " aria-label="Default select example">
                        <option value="Electric">Electric</option>
                        <option value="Auto-Rickshaw">Auto-Rickshaw</option>

                    </select>
                    <br />
                    <input type="submit" />
                </form>
                <br />
                <div className="container-fluid">

                    <Card photo={logo} title={"Test"} tag="Auto" description="Driver" charge={100} />



                </div>
                {/* ==============================Buttons============================= */}
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups flex">
                    <span className="flex-mid">
                        <div className="btn-group me-2 flex-" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-secondary"
                                style={{minWidth: 100+'px'}}>Previous</button>
                        </div>
                        <div className="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-secondary" style={{minWidth: 100+'px'}}>Next</button>
                        </div>
                    </span>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                    crossorigin="anonymous"></script>


                

            </div>
        </div>
    )
}