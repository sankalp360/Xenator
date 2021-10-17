import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
<<<<<<< HEAD
    let timeToRead = 0.008 * text.split(" ").filter((element) => {
        return (element.length !== 0);
    }).length;
=======
    let timeToRead = 0.008 * text.split(" ").length;
>>>>>>> 8bf5767d4f16024031375c8c81f8801e3ba11d97

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
    const handleConHClick = () => {
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
    }

    const handleCTClick = () => {
        // console.log('Uppercase was clciked');
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }
    return (
        <>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
<<<<<<< HEAD
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466E' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} ></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCamelClick}>Convert to Camel Case</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCTClick}>Clear text</button>
=======
                    <textarea className="form-control" id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} ></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleCamelClick}>Convert to Camel Case</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1" onClick={handleCTClick}>Clear text</button>
>>>>>>> 8bf5767d4f16024031375c8c81f8801e3ba11d97
                </div>
                {/* <h1></h1>
                <button className="btn btn-primary mx-1" onClick={handleConHClick}>Convert English to Hindi</button>
                <button className="btn btn-primary mx-1" onClick={handleConHClick}>Convert Hindi to English</button> */}

            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
<<<<<<< HEAD
                <p>{text.split(" ").filter((element) => {
                    return (element.length !== 0);
                }).length} words and {text.length} characters</p>
=======
                <p>{text.split(" ").length} words and {text.length} characters</p>
>>>>>>> 8bf5767d4f16024031375c8c81f8801e3ba11d97
                <p>{timeToRead} Minutes time to read text</p>

            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in Text Box to Preview"}</p>
            </div>
        </>
    )
}
