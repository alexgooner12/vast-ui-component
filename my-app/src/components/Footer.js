import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="wrapper">
                <button
                    onClick={props.showAllReps}
                    className="button-loader">
                    {!props.allRepsShown ? 'Load more...' : 'Load less...'}
                </button>
            </div>
        </footer>
    )
}