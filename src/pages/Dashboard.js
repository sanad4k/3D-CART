import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../components/navbar';

const Dashboard = () => {
    const [salesProfit, setSalesProfit] = useState(0);
    const [profileVisits, setProfileVisits] = useState(0);

    // Placeholder for a graph (using a simple random number generator for demonstration)
    const generateRandomGraphData = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push(Math.floor(Math.random() * 100));
        }
        return data;
    };

    const [graphData, setGraphData] = useState(generateRandomGraphData());

    useEffect(() => {
        // Update graph data periodically for demo purposes
        const interval = setInterval(() => {
            setGraphData(generateRandomGraphData());
        }, 5000); // Update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="dashboard-container animation">
                <h1 className='animation'>Dashboard</h1>

                {/* Sales Profit Section */}
                <div className="dashboard-section animation">
                    <h2>Sales Profit: december</h2>
                    <p>Total Sales Profit: ₹7500</p>
                    {/* <button onClick={() => setSalesProfit(salesProfit + 100)}>Increase Profit</button> */}
                </div>

                {/* Profile Visits Section */}
                <div className="dashboard-section animation">
                    <h2>Profile Visits</h2>
                    <p>Total Profile Visits: 146</p>
                    {/* <button onClick={() => setProfileVisits(profileVisits + 1)}>Increase Visits</button> */}
                </div>

                {/* Graph Section */}
                <div className="graph-section animation" >
                    <h2>Sales Graph </h2>
                    <div className="graph-placeholder">
                        {/* <    */}
                        <div className="random-graph">
                            {/* Simple bar graph representation using random data */}
                            {graphData.map((value, index) => (
                                <div
                                    key={index}
                                    className="bar"
                                    style={{
                                        height: `${value}%`,
                                        width: '30px',
                                        margin: '0 5px',
                                        backgroundColor: '#003399',
                                        display: 'inline-block',
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
