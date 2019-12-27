import React from 'react';
import Octicon, { Repo, RepoForked } from '@primer/octicons-react';

export default function RepListElement(props) {
    return (
        <li 
            key={props.element.id} 
            className={props.filteredRepListLength && props.filteredRepListLength % 2 === 0 ? 
            'list__item list__item--even' : 'list__item'}>
            <div className="wrapper">
                {props.letters && props.matchedLetters ?
                    <>
                        <span className="icon"><Octicon icon={props.element.fork ? RepoForked : Repo} /></span>
                        <span style={{ fontWeight: "bold" }}>{props.matchedLetters}</span>
                        <span>{props.letters}</span>
                    </>
                    :
                    <>
                        <span className="icon"><Octicon icon={props.element.fork ? RepoForked : Repo} /></span>
                        <span>{props.element.name}</span>
                    </>
                }
            </div>
        </li>
    )
}