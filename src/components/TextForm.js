import React, { useState } from 'react';
import '../App.css';
export default function TextForm(props) {
    const [text, setText] = useState('');
    let timeToRead = 0.008 * text.split(" ").filter((element) => {
        return (element.length !== 0);
    }).length;

    // state can be changed only by set function
    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log('Uppercase was clciked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleLowClick = () => {
        // console.log('Uppercase was clciked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');

    }
    const handleCamelClick = () => {
        // console.log('Uppercase was clciked');
        let newText = text.toLowerCase();
        setText(newText);
        let curr = newText;

        for (let i = 0; i < newText.length - 1; i++) {

            if (i === 0) {
                curr = setCharAt(curr, i, curr.charAt(i).toUpperCase());
            }
            if (curr.charAt(i) === ' ') {
                curr = setCharAt(curr, i + 1, curr.charAt(i + 1).toUpperCase());
            }
            setText(curr);
        }

        props.showAlert('Converted to Camelcase', 'success');

    }

    const handleCopy = () => {
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert('Text Copied to Clipboard', 'success');

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed', 'success');

    }
    // const handleConHClick = () => {
    // console.log('Uppercase was clciked');
    // let options = {
    //     sourceLanguage:
    //         google.elements.transliteration.LanguageCode.ENGLISH,
    //     destinationLanguage:
    //         [google.elements.transliteration.LanguageCode.HINDI],
    //     shortcutKey: 'ctrl+g',
    //     transliterationEnabled: true
    // };

    // let control = new
    //     google.elements.transliteration.TransliterationControl(options);
    // control.makeTransliteratable(["txtEnglish"]);
    // setText(control);
    // }

    const handleCTClick = () => {
        // console.log('Uppercase was clciked');
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }
    return (
        <>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="mb-3">{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466E' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} ></textarea>
                </div>
                <div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCamelClick}>Convert to Camel Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCTClick}>Clear text</button>
                </div>
                {/* <h1></h1>
                <button className="btn btn-primary mx-1" onClick={handleConHClick}>Convert English to Hindi</button>
                <button className="btn btn-primary mx-1" onClick={handleConHClick}>Convert Hindi to English</button> */}

            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {
                    return (element.length !== 0);
                }).length} words and {text.length} characters</p>
                <p>{timeToRead} Minutes time to read text</p>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
