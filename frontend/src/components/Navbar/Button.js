import React from "react";
import { Link } from "react-router-dom";

function Button() {
    return (
        <Link to="signup">
            <button className="btn">Login</button>
        </Link>
    );
}

export default Button;