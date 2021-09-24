import React from 'react';

    const buttonLarge = (props) => {
        const btnStyle = `btn ${props.typeBtn} btn-lg rounded-pill fw-bold text-white mt-4 me-3`;
        return(
            <button className={btnStyle}>
                {props.children}
            </button>
        )
    };

export default buttonLarge;