import React, { useState } from "react";

export default function Userinput({ addTowishlist }) {
    const [wish, setWish] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (wish.trim() != "") {
            addTowishlist(wish);
        }
        setWish("");
        // console.log(wishlist);
    };
    function handleChange(e) {
        e.preventDefault();
        setWish(e.target.value)
    };


    return (
        <>
            <div className="user">
                <form className="inpt" onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="wish">Wish : </label>
                    <input type="text" id="wish" value={wish} onChange={handleChange} placeholder="Hello" />
                    <button className="btn">Update</button>
                    <button className="btn" type="reset">Clear All</button>
                </form>
            </div>
        </>
    )

}