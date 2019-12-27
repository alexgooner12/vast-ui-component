import React from 'react';
import RepListElement from './repListElement';

export default function RepList(props) {
    return (
        <section className="wrapper--replist">
            <ul className="list">
                {
                    props.query ? 
                        props.filteredRepList.map(el => {
                            const matchedLetters = el.name.match(props.query).toString();
                            const letters = el.name.slice(matchedLetters.length);
                            return <RepListElement 
                                        key={el.id} 
                                        element={el} 
                                        matchedLetters={matchedLetters} 
                                        letters={letters} 
                                        filteredRepListLength={props.filteredRepList.length} 
                                    />
                        })
                    : 
                    !props.allRepsShown ?
                        props.list.slice(0, 3).map(el =>
                            <RepListElement key={el.id} element={el} />)
                        :
                        props.list.map(el =>
                            <RepListElement key={el.id} element={el} />)
                }
            </ul>
        </section>
    )
}