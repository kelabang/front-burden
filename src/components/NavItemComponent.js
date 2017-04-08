/*
* @Author: Imam
* @Date:   2017-04-09 00:56:04
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 02:52:11
*/

import React, { PureComponent } from 'react';

class NavItemComponent extends PureComponent {
	static propTypes = {
		type: React.PropTypes.string,
		content: React.PropTypes.any,
		active: React.PropTypes.bool,
		onClick: React.PropTypes.func
	}
	static defaultProps = {
		type: 'tab', // tab or button
		content: '',
		active: false
	}
	renderButton(wrapClass, content) {
		return (
			<span className={wrapClass}>
				<a className="button">
					{content}
				</a>
			</span>
		);
	}
	renderTab(wrapClass, content, active, onClick) {
		wrapClass += ' is-tab';
		if (active) {wrapClass += ' is-active';}
		return (
			<a onClick={onClick} className={wrapClass}>
				{content}
			</a>
		);
	}
	render() {
		let wrapClass = 'nav-item';
		let toRender = (null);
		if (this.props.type === 'tab') {toRender = this.renderTab(wrapClass, this.props.content, this.props.active, this.props.onClick);}
		else {toRender = this.renderButton(wrapClass, this.props.content);}
		return (toRender);
	}
}

export default NavItemComponent;
