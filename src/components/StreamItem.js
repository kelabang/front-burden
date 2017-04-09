/*
* @Author: Imam
* @Date:   2017-04-09 03:56:10
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 04:33:51
*/

import React, { Component } from 'react';
import moment from 'moment';

class StreamItem extends Component {
	static propTypes = {
		username: React.PropTypes.string,
		userfullname: React.PropTypes.string,
		useravatar: React.PropTypes.string,
		value: React.PropTypes.string,
		datetime: React.PropTypes.string,
	}
	static defaultProps = {
		username: 'unknown',
		userfullname: 'unknown',
		useravatar: 'http://placehold.it/128x128',
		value: '',
		datetime: '0000-00-00 00:00:00',
	}
	relativeDateTime (date) {
		return moment(date, 'YYYY-MM-DD HH:mm:ss').fromNow();
	}
	render() {
		let relative = this.relativeDateTime(this.props.datetime);
		return (
			<article className="media">
				<div className="media-left">
					<figure className="image is-64x64">
						<img src={this.props.useravatar} alt="gambar" />
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>{this.props.userfullname}</strong> <small>{'@' + this.props.username}</small> <small style={{float:'right'}}>{relative}</small>
							<br/>
							{this.props.value}
						</p>
					</div>
					<nav className="level">
						<div className="level-left">
							<a className="level-item inline-block">
								<span className="icon is-small"><i className="fa fa-reply"/></span>
							</a>
							<a className="level-item inline-block">
								<span className="icon is-small"><i className="fa fa-retweet"/></span>
							</a>
							<a className="level-item inline-block">
								<span className="icon is-small"><i className="fa fa-heart"/></span>
							</a>
						</div>
					</nav>
				</div>
			</article>
		);
	}
}

export default StreamItem;
