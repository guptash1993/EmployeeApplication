import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<p id="welcome-bar" className="header-info">
					Welcome to the Application
				</p>
				<div className="menu">
					<Link to="/" className="menu-link-item" activeClassName="active">Employees</Link>
					<Link to="/departments" className="menu-link-item" activeClassName="active">Departments</Link>
				</div>
			</div>

		);
	}
});

export default Header;