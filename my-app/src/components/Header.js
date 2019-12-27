import React from 'react';
import Heading from './Heading';
import FilterBar from './FilterBar';
import Categories from './Categories';

export default function Header(props) {
    return (
        <header className="header">
            <Heading numberOfReps={props.numberOfReps} />
            <FilterBar query={props.query} filterRepList={props.filterRepList} />
            <Categories />
        </header>
    );
}