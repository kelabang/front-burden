/*
* @Author: Imam
* @Date:   2017-04-09 02:01:03
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 02:52:57
*/

import React, { Component } from 'react';

import NavItemComponent from './NavItemComponent.js';

class NavMenuComponent extends Component {
	static propTypes = {
		menu: React.PropTypes.array,
		onClick: React.PropTypes.oneOfType([
			React.PropTypes.func,
			React.PropTypes.object,
		]),
		activeIndex: React.PropTypes.number
	}
	static defaultProps = {
		menu: [],
		onClick: null,
		activeIndex: -2
	}
	constructor (props) {
		super(props);
		this.state = {
			activeIndex: -1
		};
	}
	clickSelectedIndex (i, e) {
		e.preventDefault();
		if (this.props.onClick) {
			this.props.onClick.apply(this, arguments);
		}
		else {
			this.setState({
				activeIndex: i
			});
		}
	}
	render() {
		let activeIndex = (this.props.activeIndex < -1) ? this.state.activeIndex : this.props.activeIndex;
		const toRender = this.props.menu.map((v,i) => <NavItemComponent key={i} content={v} onClick={this.clickSelectedIndex.bind(this, i)} active={activeIndex === i} />);
		return (<div className="nav-left">{toRender}</div>);
	}
}

export default NavMenuComponent;
