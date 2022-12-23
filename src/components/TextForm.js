import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase ", "Success");
    }
    const handleOnChange = (Event) => {
        // console.log("Handle on change")
        setText(Event.target.value)

    }

    const handleToLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to LowerCase ", "Success");
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copy", "Success");
    }

    const clearText = () => {
        var getValue = document.getElementById("mybox");
        if (getValue.value !== "") {
            getValue.value = "";

        }
        // props.showAlert("Clear text","Success");
    }


    const removeSpace = () => {
        let value = text.split(/[ ]+/);
        setText(value.join(" "))
        props.showAlert("Remove Space", "Success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>

                <button onClick={handleUpClick} type="button" className="btn btn-primary mx-2 my-2" >Convert to upperCase</button>
                <button onClick={handleToLower} type="button" className="btn btn-primary mx-2 my-2">Convert to lowerCase</button>
                <button onClick={handleCopy} type="button" className="btn btn-primary mx-2 my-2">Copy</button>
                <button onClick={clearText} type="button" className="btn btn-primary mx-2 my-2">clear Text</button>
                <button onClick={removeSpace} type="button" className="btn btn-primary mx-2 my-2">Remove Space</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) =>{return element.length !==0}).length} word {text.length} are characters</p>
                <p>{0.008 * text.split(" ").filter((element) =>{return element.length !==0}).length} Minutes Read</p>

                <h1>Priview</h1>
                <p>{text.length > 0 ? text : "enter something in textbox to priview it here"}</p>

            </div>
        </>
    )
}