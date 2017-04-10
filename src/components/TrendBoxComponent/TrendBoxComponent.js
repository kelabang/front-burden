/*
* @Author: Imam
* @Date:   2017-04-11 00:14:32
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-11 00:35:22
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrendBoxComponent extends Component {
	static propTypes = {
		trendlist: PropTypes.array
	}
	static defaultProps = {
		trendlist: [
			{
				hash: 'unknown',
				total: '0'
			}
		]
	}
	render() {
		return (
			<div className="box trending">
				<p className="trend-title"><span className="title is-5">Trends</span> · <a href="#">change</a></p>
				{this.props.trendlist.map((v, i) => {
					return (
						<p key={i} className="trend-hashtag"><a href="#">#{v.hash}</a><br/>{v.total} statuses</p>
					);
				})}
			</div>
		);
	}
}

export default TrendBoxComponent;
