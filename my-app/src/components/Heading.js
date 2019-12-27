import React from 'react';

export default function Heading({ numberOfReps }) {
    return (
        <div className="heading-box">
            <div className="wrapper">
                <h2 className="heading-secondary">Your repositories
                    <span className="badge"> {numberOfReps}</span>
                </h2>
            </div>
        </div>
    );
}