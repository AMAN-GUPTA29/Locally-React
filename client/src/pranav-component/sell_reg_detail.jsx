import React from "react"
import { useNavigate } from "react-router-dom";;

export default () => {
    const navigator = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigator('/sellerview')
    }

    return (
        <div>

            <div className="container my-5">
                <form action="http://localhost:8080/xtraDetails" method="post" encType="multipart/form-data">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Address</label>
                        <input name="address" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Pincode</label>
                        <input name="pincode" type="number" className="form-control" id="exampleInputPassword1" min="100000" max="999999" required />
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Upload Image</label>
                        <input type="file" className="form-control-file" id="Image" name="ProfileImage" />
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}