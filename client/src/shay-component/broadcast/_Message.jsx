import React from "react";

export default ({ message }) => {
    return (
        <>
            <div className="container my-4">
                <div className="card">
                    <div className="card-header">
                        BroadCast
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Message : {message}</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}