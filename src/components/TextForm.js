
import React, { useState } from 'react'

export default function TextForm(props) {
    const clearText = () => {
        setText("")
    }

    const onClickUpper = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const onClickLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    // Function so we can change the text in text area
    const onHandleFunc = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    const handleSplitFunc = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className={`mt-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={onHandleFunc} id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-danger me-4 my-2" onClick={clearText}>CLEAR TEXT</button>
                <button disabled={text.length === 0} className="btn btn-primary me-4 my-2" onClick={onClickUpper}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-secondary me-4 my-2" onClick={onClickLower}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-success me-4 my-2" onClick={handleCopy}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-warning" onClick={handleSplitFunc}>Format Text</button>

                <div className="container py-4">
                    <h3>Your Text Summary: -</h3>
                    <h6>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</h6>
                </div>

                <h4 className='container'>Preview</h4>
                <p className='container'>{text.length > 0 ? text : "-->Enter something in above textbox to see preview<--"}</p>
            </div>
        </>
    )
}
