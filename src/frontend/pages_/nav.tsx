import React from "react";

export default function NavBar(): React.ReactElement<any, any> {
    return (
        <nav className="nav-bar">
            <ul className="flex flex-row justify-center space-x-20 flex-wrap">
                <li><a href="/">Home</a></li>
                <li><a href="/">About Cheems</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
    )
}