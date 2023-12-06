import React from "react"
export default (request) =>
 {
    return (
        <div>
            <h1>Accepted Requests</h1>
            {/* < for (let i = 0; i < data.length; i++)  > */}
            {/* < if (data[i].accepted == true) > */}
            <div class="d-flex flex-column justify-content-center align-items-center mx-5">
                <div class="card col-12 d-flex flex-column justify-content-center m-3 p-4 px-5 border rounded-3">
                    <div class="d-flex">
                        <h5>Seller Name :</h5>
                        <p class="fs-5">******</p>
                    </div>
                    <div class="d-flex">
                        <h5>id:</h5>
                        <p class="fs-5">
                          {request.id}
                        </p>
                    </div>
                    <div class="d-flex">
                        <h5>Requested Service :</h5>
                        <p class="fs-5">
                            {request.title}
                        </p>
                    </div>
                    {/* < data[i].accepted> */}
                    {/* < data[i]._id> */}
                    <div>
                          
                           <a  class="border p-2 px-5 reject text-decoration-none text-white">Reject</a>

                    </div>
                    <br/> <br/>
                        <div>
                            
                             <a class="border p-2 px-5 reject text-decoration-none text-white">Completed</a>

                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br /><br/>
        </div>)
}