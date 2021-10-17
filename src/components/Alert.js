import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
<<<<<<< HEAD
        <div style={{ height: '1.25rem' }}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}>
                    <strong>
                        {`${capitalize(props.alert.type)} : `}
                    </strong>
                    {props.alert.msg}
                </div>
            </div>}
=======
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}>
                <strong>
                    {`${capitalize(props.alert.type)} : `}
                </strong>
                {props.alert.msg}
            </div>
>>>>>>> 8bf5767d4f16024031375c8c81f8801e3ba11d97
        </div>
    )
}
