import React from "react";
import "./listing.css";

// Import Image ===============>
import img from "../../../Assets//image.png";
import img2 from "../../../Assets/image10.png";
import img3 from "../../../Assets/image7.png";
import img4 from "../../../Assets/image3.png";
import user1 from "../../../Assets/user.jpg";
import user2 from "../../../Assets/user(1).jpg";
import user3 from "../../../Assets/user(2).jpg";
import user4 from "../../../Assets/user(3).jpg";

// Import Icons ===============>
import {BsArrowRightShort} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";

function Listing() {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listing</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="sectionContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img2} alt="Image Name" />
                    <h3>Coffee Plant</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img3} alt="Image Name" />
                    <h3>Button Fern</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img4} alt="Image Name" />
                    <h3>Spider Plant</h3>
                </div>
            </div>

            <div className="seller flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3 className="topSellers">Top Seller</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="User Name" />
                            <img src={user2} alt="User Name" />
                            <img src={user3} alt="User Name" />
                            <img src={user4} alt="User Name" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant sold <br />
                                <small>
                                    21 Sellers{" "}
                                    <span className="date"> 7 Days </span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3 className="topSellers">Featured Seller</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="User Name" />
                            <img src={user2} alt="User Name" />
                            <img src={user3} alt="User Name" />
                            <img src={user4} alt="User Name" />
                        </div>
                        <div className="cardText">
                            <span>
                                28.556 Plant sold <br />
                                <small>
                                    26 Sellers{" "}
                                    <span className="date"> 31 Days </span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;
