import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';
import Main from './components/Main';
import Loader from './components/Loader';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			repList: [],
			publicRepList: [],
			privateRepList: [],
			sourcesRepList: [],
			forksRepList: [],
			isFetching: true
		}
	}

	async componentDidMount() {
		const dataJSON = await fetch(`https://api.github.com/users/goschevski/repos`);
		const repList = await dataJSON.json();
		this.setState({ repList }, () => setTimeout(() => this.setState({ isFetching: false }), 1200 ));
		this.createPublicRepList();
		this.createPrivateRepList();
		this.createSourcesRepList();
		this.createForksRepList();
	}

	createPublicRepList = () => {
		this.setState({ publicRepList: this.state.repList.filter(el => !el.private)});
	}

	createPrivateRepList = () => {
		this.setState({ privateRepList: this.state.repList.filter(el => el.private)});
	}

	createSourcesRepList = () => {
		this.setState({ sourcesRepList: this.state.repList.filter(el => !el.fork)});
	}

	createForksRepList = () => {
		this.setState({ forksRepList: this.state.repList.filter(el => el.fork)});
	}

	render () {
		return (
			<Router>
				<div className={!this.state.isFetching ? 'App' : null}>
					{ this.state.isFetching ? <Loader />
					: <Switch>
						<Route exact path='/' component={() => <Main repList={this.state.repList} />} />
						<Route exact path='/public' component={() => <Main repList={this.state.publicRepList} />} />
						<Route exact path='/private' component={() => <Main repList={this.state.privateRepList} /> } />
						<Route exact path='/sources' component={() => <Main repList={this.state.sourcesRepList} />} />
						<Route exact path='/forks' component={() => <Main repList={this.state.forksRepList} /> } />
						<Route component={() => <div><h2>Error 404 <br /> Page not found</h2><Link to='/'>Go back</Link></div>} />
					</Switch>
					}
				</div>
			</Router>
		);
	}
}

export default App;
