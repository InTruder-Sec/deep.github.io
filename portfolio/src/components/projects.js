import React from "react";
import { Footer, NavBar, CreateHead } from "./index.js";

export default function Projects() {
    return(
        <div className="pro">
            <NavBar />
            <div className="pro--main">
                <CreateHead head="projects" title="My Projects" />
            </div>
            <Footer />
            
        </div>
    )
}