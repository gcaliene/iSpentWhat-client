import React from "react";
import { connect } from "react-redux";

import "../css/Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<div className="footer" onClick={() => window.scrollTo(0, 0)}>
				<p>Back To The Top</p>
				<p>2018</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
};

export default connect(mapStateToProps)(Footer);
