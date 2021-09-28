import React from 'react'

    const projectCard = (props) => {
        return(
            <a href={props.href} className="p-1 mt-2 border border-info rounded">
                <div className="card" style={{width:22 + "rem", height:15 + "rem"}}>
                    <img src={props.imgP} alt={props.altP}/>
                    <p className="card-body text-center fw-bold fs-5">{props.projectName}</p>
                </div>
            </a>
        )
    };

export default projectCard;