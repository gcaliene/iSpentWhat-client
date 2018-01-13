import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../actions/action";

class FormLogin extends Component {
	handleSubmit(event) {
		event.preventDefault();
		// console.log('d');
		const username = event.target.username.value;
		const password = event.target.password.value;
		this.props.dispatch(loginUser(username, password));
	}

	render() {
		return (
			<form
				onSubmit={e => this.handleSubmit(e)}
				className="FormRegister-container-form"
			>
				<br />
				<p
					id="error-username-login"
					className=" class-success-username-login hidden"
				/>
				<input type="text" name="username" placeholder="Username" required />
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
				<br /> <br />
				<button>Login</button>
			</form>
		);
	}
}

export default connect()(withRouter(FormLogin));
