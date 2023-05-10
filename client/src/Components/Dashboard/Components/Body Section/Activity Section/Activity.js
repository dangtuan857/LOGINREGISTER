import React from "react";
import "./activity.css";

//Imported Icons ================>
import {BsArrowRightShort} from "react-icons/bs";

// Imported Images ==============>

import user from "../../../Assets/user.jpg";
import user1 from "../../../Assets/user(1).jpg";
import user2 from "../../../Assets/user(2).jpg";
import user3 from "../../../Assets/user(3).jpg";

const Activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user} alt="Image Customer" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small> Ordered new plant</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user1} alt="Image Customer" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small> Ordered new plant</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user2} alt="Image Customer" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small> Ordered new plant</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user3} alt="Image Customer" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small> Ordered new plant</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
