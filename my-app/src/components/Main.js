import React from 'react';
import Header from './Header';
import RepList from './RepList';
import Footer from './Footer';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repList: this.props.repList,
            filteredRepList: [],
            query: '',
            allRepsShown: false
        }
    }

    filterRepList = e => {
        this.handleQuery(e);
        const filteredRepList = this.state.repList.filter(el => el.name.startsWith(e.target.value));
        this.setState({ filteredRepList });
    }

    handleQuery = e => {
        this.setState({ query: e.target.value });
    }

    showAllReps = () => {
        this.setState({ allRepsShown: !this.state.allRepsShown });
    }

    render() {
        return (
            <>
                <Header
                    numberOfReps={this.props.repList.length}
                    query={this.state.query}
                    filterRepList={this.filterRepList}
                />
                <RepList
                    list={this.state.repList}
                    query={this.state.query}
                    filteredRepList={this.state.filteredRepList}
                    allRepsShown={this.state.allRepsShown}
                />
                {this.state.repList.length ?
                    <Footer
                        allRepsShown={this.state.allRepsShown}
                        showAllReps={this.showAllReps}
                    /> : null}
            </>

        );
    }
}