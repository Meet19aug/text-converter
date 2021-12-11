//rfc
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new Text"; //wrong way to change the state
    // setText("abxcdfe"); //corect way to change the state
    const handleUpClick = () => {
        // console.log("Upper case was clicked..." + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.","success");
    }
    const handleLoClick = () => {
        // console.log("Upper case was clicked..." + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.","success");

    }
    const handleOnChange = (event) => {
        // console.log("Handle On Change");
        setText(event.target.value);

    }
    const handleClear = () =>{
        setText("");
        props.showAlert("Cleared Text.","success");

    }
    //capitalize text
    const handleCapText = () => {
        // console.log("Upper case was clicked..." + text);
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        let newText=arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalizecase.","success");

    }
    const handleCopy = () => {
        // console.log("Handle On Change");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard.","success");
    }
    return (
        <>
        <div className="container my-3" style={{color : props.mode==='dark'? 'white':'black'}}>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{color : props.mode==='dark'? 'white':'black', background : props.mode==='dark'?'#0e3a5c':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapText}>Capitalize Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-3" style={{color : props.mode==='dark'? 'white':'black'}}>
            <h2>Text Summary:</h2>
            <p>Your text contains { text.split(" ").filter((element)=>{return element.length !== 0}).length } words and {text.length} characters.</p>
            <p>Time required to read is {0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes.</p>
            <h2>Preview </h2>
            <p>{text}</p>
        </div>
        </>
    )
}
