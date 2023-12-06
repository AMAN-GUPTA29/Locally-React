import React from "react";
export default(request)=>{
    return(
        <div>
              <h1>Pending requests</h1>
                        {/* <% for(let i=0;i< data.length;i++) { %>
                            <% if(data[i].accepted==false){%> */}
                                <div class="d-flex flex-column justify-content-center align-items-center mx-5">
                                    <div
                                        class="card col-12 d-flex flex-column justify-content-center m-3 p-4 px-5 border rounded-3">
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

                                    </div>
                                </div>
        </div>
    )
}