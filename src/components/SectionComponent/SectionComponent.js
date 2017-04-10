/*
* @Author: Imam
* @Date:   2017-04-08 23:54:12
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-11 00:39:37
*/

import React, { Component } from 'react';

import NotificationComponent from './../NotificationComponent/NotificationComponent';
import StreamTimelineComponent from './../StreamTimelineComponent/StreamTimelineComponent';
import ProfileStatusComponent from './../ProfileStatusComponent/ProfileStatusComponent';
import TrendBoxComponent from './../TrendBoxComponent/TrendBoxComponent';
import SuggestionFollowBox from './../SuggestionFollowBox/SuggestionFollowBox';

class SectionComponent extends Component {
	render() {
		return (
			<section className="section main">
				<div className="container">
					<div className="columns">
						<div className="column is-3 ">
							<ProfileStatusComponent />
							<div className="spacer" />
							<TrendBoxComponent />
						</div>
						<div className="column is-6">
							<NotificationComponent />
							<StreamTimelineComponent />
						</div>
						<div className="column is-3 ">
							<SuggestionFollowBox />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SectionComponent;

