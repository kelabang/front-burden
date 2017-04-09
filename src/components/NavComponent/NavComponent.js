/*
* @Author: Imam
* @Date:   2017-04-08 23:29:07
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 11:27:09
*/

import React, { Component } from 'react';

import NavMenuComponent from './../NavMenuComponent/NavMenuComponent.js';
import NavItemComponent from './../NavItemComponent/NavItemComponent.js';

class NavComponent extends Component {
	constructor (props) {
		super(props);
		this.menu = [
			<span><i className="fa fa-home"/> {'\u00a0 Home'}</span>,
			<span><i className="fa fa-bolt"/> {'\u00a0 Moments'}</span>,
			<span><i className="fa fa-bell-o"/> {'\u00a0 Notifications'}</span>,
			<span><i className="fa fa-envelope"/> {'\u00a0 Messages'}</span>,
		];
		this.corner = [
			[<span key={1} className="icon"><i className="fa fa-twitter"/></span>,<span key={2} >Tweet</span>]
		];
	}
	render () {
		return (
				<nav className="nav has-shadow">
					<div className="container">
						<NavMenuComponent menu={this.menu} />
						<div className="nav-center">
							<a className="nav-item" href="#">
								<span className="icon">
									<i className="fa fa-twitter"/>
								</span>
							</a>
						</div>
						<span className="nav-toggle">
							<span/>
							<span/>
							<span/>
						</span>
						<div className="nav-right nav-menu">
							{
								this.corner.map((v, i) => <NavItemComponent key={i} type="button" content={v} />)
							}
						</div>
					</div>
				</nav>
			);
	}
}

export default NavComponent;
