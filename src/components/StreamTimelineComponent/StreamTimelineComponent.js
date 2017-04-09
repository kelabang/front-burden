/*
* @Author: Imam
* @Date:   2017-04-09 17:44:16
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 18:23:50
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StreamItemComponent from './../StreamItemComponent/StreamItemComponent.js';

class StreamTimelineComponent extends Component {
	static propTypes = {
		streams: PropTypes.array
	}
	static defaultProps = {
		streams: [
			{
				id: 1,
				username: 'ma4m',
				userfullname: 'imam tauhid',
				useravatar: 'https://pbs.twimg.com/profile_images/492205428567072768/M_eHSDxx.jpeg',
				text: 'coba upload ke stream',
				datetime: '2017-1-2 12:10:00'
			}
		]
	}
	render() {
		return (
			<div className="box">
				{this.props.streams.map((v, i) => <StreamItemComponent key={i} username={v.username} userfullname={v.userfullname} useravatar={v.useravatar} value={v.text} datetime={v.datetime} />
				)}
			</div>
		);
	}
}

export default StreamTimelineComponent;
