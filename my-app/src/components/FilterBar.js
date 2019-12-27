import React from 'react';

export default function FilterBar(props) {
    return (
        <div className="filter-bar">
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Find a repository..."
                    value={props.query}
                    onChange={props.filterRepList}
                    className="filter-bar__input"
                />
            </div>
        </div>
    )
}