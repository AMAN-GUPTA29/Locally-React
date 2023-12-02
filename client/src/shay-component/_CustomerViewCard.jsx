import React from "react";
// import 'bootstrap';
import './assets/CustomerView.css'

export default ({ photo, title, tag, charge, description }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={photo}
                        className="img-fluid rounded-start" alt="Seller_Image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name : {title}
                        </h5>
                        <h5 className="card-title">Service : {tag}
                        </h5>

                        {charge && <h5 className="card-title">Charge : {charge}</h5>}
                        {!charge && <h5 className="card-title">Charge : {"Undisclosed"}</h5>}
                        <p className="card-text mb-4">
                            Description : {description}
                        </p>
                        <h6><a className="mainbutton mainotherbutton"
                            href="/customerView/display/<%= data[i]._id %>">Hire</a></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}