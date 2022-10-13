import React, { useState } from 'react'

const Newsitem = (props) => {

    


    let { title, description, imgurl, newsurl, author, date } = props;
    return (
        <div className={`my-3 `}>
            <div className={`card text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                <img src={!imgurl ? "https://sportshub.cbsistatic.com/i/r/2022/10/06/adac45fc-f7a5-4932-8337-41176be78fa1/thumbnail/1200x675/b874f43e8e114c7cc862a333a9de8e78/mlb-bracket-2022-1.png0" : imgurl} className="card-img-top" alt="." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Truth Activator" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem