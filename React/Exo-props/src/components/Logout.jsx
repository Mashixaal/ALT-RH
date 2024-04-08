import React from "react";

const Logout = ({onClick}) => {
    return(
        <>
            <button onClick={onClick}>Log out</button>
            <p>Au revoir</p>
        </>
    )
}
export default Logout;
