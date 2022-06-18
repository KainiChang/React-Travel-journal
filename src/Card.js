import React from "react"

export default function Card(props) {
    return (
        <card className="card">
            <img src={props.imageUrl}  className="card--image" alt="props-img" />
            <div className="card--right">
                <span className="card--right1">
                    <img src="./images/Fill 219.png" className="card--locate" alt="props-img" />
                    <p className="card--right3">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card--url"> View on Google Maps</a>
                </span>
                <p className="card--right4"> {props.title}</p>
                <div>
                    <p className="card--right7"> {props.startDate}- {props.endDate}</p>
                    <p className="card--right8"> {props.description}</p>
                </div>
            </div>
        </card>
    )
}