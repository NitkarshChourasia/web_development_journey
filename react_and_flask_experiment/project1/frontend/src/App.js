// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setData] = useState(null);

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) => {
            console.log(res);
            res.json().then((personData) => {
                // Setting a data from api
                setData(() => {
                    let temp = {};
                    for (let i of Object.keys(personData)) {
                        temp[i] = personData[i];
                    }
                    return temp;
                });
            })
        }

        );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 id="header">Oyo Love Couples Data</h1>
                {/* Calling a data from setData for showing */}
                {data ? Object.keys(data).map((key) => (
                    <>
                        <pre>
                            {data[key].name} [] {data[key].age} [] {data[key].date} [] {data[key].programming}
                        </pre>
                        <br />
                    </>
                )) : ''
                }
            </header>
        </div>
    );
}

export default App;