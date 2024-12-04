import React from "react";
import './Library.css'
import Navbar from "../components/navbar";
import Card from "../components/card";

const Library = ()=>{
    return(
        <div>
            <Navbar/>
            <div>
                <h3 className="title3">LIKED ASSETS</h3>
                <div className="cont">
                <div className="container">
                    <Card  src='/photos/5.png' name='Astornaut' price='Rs 200'/>
                    <Card  src='/photos/14.png' name='Brick' price='Rs 450'/>
                    <Card  src='/photos/1.png' name='' price=''/>
                </div>
                </div>
                <h3 className="title3">PUBLISHED ASSETS</h3>
                <div className="cont">
                <div className="container">
                    <Card  src='/photos/4.png' name='' price=''/>
                    <Card  src='/photos/1.png' name='' price='235'/>
                    <Card  src='/photos/9.png' name='placeholder' price='120'/>
                </div>
                </div>
                


            </div>
        </div>

    )
}
export default Library;
