/*
* @Author: Imam
* @Date:   2017-04-10 23:37:17
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-10 23:58:09
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileStatusComponent extends Component {
	static propTypes = {
		username: PropTypes.string,
		userfullname: PropTypes.string,
		useravatar: PropTypes.string,
		userposts: PropTypes.number,
		userfollowing: PropTypes.number,
		userfollowers: PropTypes.number
	}
	static defaultProps = {
		username: 'unknown',
		userfullname: 'unknown',
		useravatar: 'http://placehold.it/128x128',
		userposts: 0,
		userfollowing: 0,
		userfollowers: 0
	}
	render() {
		return (
			<div className="card is-fullwidth">
				<header className="card-header" />
				<div className="card-content">
					<a className="card-avatar">
						<img src={this.props.useravatar} className="card-avatar-img" alt="gambar" />
					</a>

					<div className="card-user">
						<div className="card-user-name">
							<a href="#">{this.props.userfullname}</a>
						</div>
						<span>
							<a href="#">@<span>{this.props.username}</span></a>
						</span>
					</div>

					<div className="card-stats">
						<ul className="card-stats-list">
							<li className="card-stats-item">
								<a href="#" title="9.840 Tweet">
									<span className="card-stats-key">Posts</span>
									<span className="card-stats-val">{this.props.userposts}</span>
								</a>
							</li>
							<li className="card-stats-item">
								<a href="#/following" title="885 Following">
									<span className="card-stats-key">Following</span>
									<span className="card-stats-val">{this.props.userfollowing}</span>
								</a>
							</li>
							<li className="card-stats-item">
								<a href="#">
									<span className="card-stats-key">Followers</span>
									<span className="card-stats-val">{this.props.userfollowers}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileStatusComponent;
