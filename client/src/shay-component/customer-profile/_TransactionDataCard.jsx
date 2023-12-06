import React from "react";

export default () => {
    return (
        <div className="container">
            <h2># Your Transactions</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Date/Time</th>
                        <th scope="col">Rs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><a href="https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg"
                            target="_blank">23123212312312</a></td>
                        <td>14Feb23/10AM</td>
                        <td>180.00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><a href="https://jfwonline.com/wp-content/uploads/2017/02/choco.jpeg"
                            target="_blank">37467123681723</a></td>
                        <td>24Feb23/10AM</td>
                        <td>1123.00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><a href="https://jfwonline.com/wp-content/uploads/2017/02/choco.jpeg"
                            target="_blank">37467123681723</a></td>
                        <td>04Mar22/01PM</td>
                        <td>115.00</td>
                    </tr>
                    <tr>
                        <th scope="row">......</th>
                        <td>......</td>
                        <td>......</td>
                        <td>......</td>
                    </tr>
                </tbody>
            </table>
            <div><a href="/transaction" target="_blank">See
                more...</a></div>
        </div>
    )
}