import React from "react"
import "./style.css"
import Info from "./info"
import About from "./about"
import Interests from "./interests"
import Footer from "./footer"
import ProfileImage from "./profilepic"

export default function App()  {
    return  (
        <div className="biz-card">
            <ProfileImage />
            <div className="app--body">
                <Info />
                <About />
                <Interests />
            </div>
            
            <Footer />
        </div>
    )
}