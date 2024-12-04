import React from "react";
import "./Dashboard.css";
import Navbar from "../components/navbar";

const Dashboard = () => {
    const metrics = [
        { title: "Total Storage Used", value: "120GB", lastWeek: "100GB" },
        { title: "Sales Reach", value: "80%", lastWeek: "75%" },
        { title: "Profit", value: "$5,000", lastWeek: "$4,800" },
        { title: "Projects Completed", value: "15", lastWeek: "12" },
        { title: "New Clients", value: "4", lastWeek: "3" },
        { title: "Total Assets Created", value: "200", lastWeek: "180" },
    ];

    return (
        <div>
            <Navbar/>

            <div className="floater">
                <div className="dashboard">
                    <div className="profile-card">
                        <div className="profile-image"><img src="/photos/picd.jpg"/></div>
                        <h2>Jeremy Robson</h2>
                        <p>3D Artist Dashboard</p>

                        <p className="about">My name is Alex Carter, and I’m a passionate 3D artist originally from Austin, Texas. Ever since I can remember, I’ve been fascinated by the fusion of art and technology—whether it was sketching landscapes as a child or exploring the early days of 3D modeling software.

                            I specialize in creating realistic 3D environments, character modeling, and product visualizations, with a knack for bringing concepts to life in the most vibrant and immersive ways. My journey as a 3D artist spans over 5 years, during which I’ve had the opportunity to work on indie game projects, short animations, and advertising campaigns for brands seeking cutting-edge visuals.

                            My tools of the trade include Blender, Maya, and ZBrush, along with texturing tools like Substance Painter. I also enjoy experimenting with Unreal Engine to make my creations interactive and lifelike. I’m constantly exploring new techniques and keeping up with the latest trends in the industry to push the boundaries of my craft.</p>

                    </div>
                    <div className="metrics">
                        {metrics.map((metric, index) => (
                            <div className="metric-card" key={index}>
                                <h3>{metric.title}</h3>
                                <p className="current">{metric.value}</p>
                                <p className="last-week">Last Week: {metric.lastWeek}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
