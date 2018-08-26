import React,  {Component } from 'react';
import '../App.css';
import Logo from '../assets/glass.png'


class searchBar extends Component {

	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.research.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label className="is-hidden" >Search</label>
				<input
					
					onChange={this.onSearchChange}
					ref={input => (this.research = input)}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit" className="search-button">
					<img alt='' src={Logo} className="material-icons"/>
				</button>
			</form>
		);
	}
}
export default searchBar ;
