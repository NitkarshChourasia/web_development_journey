import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("new text"); // Correct way to change the state
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div >
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * (text.split(" ").length)} Minutes to go</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
