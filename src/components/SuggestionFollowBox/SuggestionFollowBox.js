/*
* @Author: Imam
* @Date:   2017-04-11 00:28:48
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-11 00:38:36
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuggestionFollowBox extends Component {
	static propTypes = {
		suggestions: PropTypes.array
	}
	static defaultProps = {
		suggestions: [
			{
				username: 'unknown',
				userfullname: 'unknown',
				useravatar: 'http://placehold.it/128x128'
			}
		]
	}
	render() {
		return (
			<div className="box">
				<p><span className="title is-5">Who to follow</span> · <a href="#">Refresh</a>· <a href="#">View All</a></p>
				<hr/>
				{this.props.suggestions.map((v, i) => (
					<div key={i} className="columns">
						<div className="column is-3 is-marginless">
							<div className="image">
								<img src={v.useravatar} alt="gambar"/>
							</div>
						</div>
						<div className="column is-9">
							<p>
								<a href="#">
									<strong>{v.userfullname}</strong>
									{'\n'}@{v.username}
								</a>
								<a href="#">
									<i className="fa fa-times"/>
								</a>
							</p>
							<a className="button is-primary is-small">
								<span>
									+ Follow
								</span>
							</a>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default SuggestionFollowBox;
