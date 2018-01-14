import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import "../css/Footer.css";

class Footer extends React.Component {
	componentDidUpdate() {
		if ($(".expense-item-list").length === 0) {
			$("#id-footer-text").html("");
			$("#id-footer-text").append(
				"Click the <b>plus sign</b> on the <b>bottom right</b> to add an expense."
			);
		} else {
			$("#id-footer-text").html("");
			$("#id-footer-text").append("Back to the beginning.");
		}
	}

	render() {
		return (
			<div className="footer" onClick={() => window.scrollTo(0, 0)}>
				<p id="id-footer-text" />
				<p>2018</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const expenses = state.expenses;
	const user = state.user.user;
	return {
		expenses,
		user
	};
};

export default connect(mapStateToProps)(Footer);
