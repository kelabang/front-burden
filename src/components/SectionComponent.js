/*
* @Author: Imam
* @Date:   2017-04-08 23:54:12
* @Last Modified by:   Imam
* @Last Modified time: 2017-04-09 04:34:37
*/

import React, { Component } from 'react';

import StreamItem from './StreamItem.js';

class SectionComponent extends Component {
	render() {
		return (
			<section className="section main">
				<div className="container">
				<div className="columns">
				<div className="column is-3 hide">
				<div className="card is-fullwidth">
				<header className="card-header" />
				<div className="card-content">
				<a className="card-avatar">
				<img src="https://pbs.twimg.com/profile_images/3005141692/dc8e1eb36b6cbd2b5726f63c50adf7f2.png" className="card-avatar-img" alt="gambar" />
				</a>

				<div className="card-user">
				<div className="card-user-name">
				<a href="#">John Smith</a>
				</div>
				<span>
				<a href="#">@<span>jsmith</span></a>
				</span>
				</div>

				<div className="card-stats">
				<ul className="card-stats-list">
				<li className="card-stats-item">
				<a href="#" title="9.840 Tweet">
				<span className="card-stats-key">Tweets</span>
				<span className="card-stats-val">1</span>
				</a>
				</li>
				<li className="card-stats-item">
				<a href="#/following" title="885 Following">
				<span className="card-stats-key">Following</span>
				<span className="card-stats-val">0</span>
				</a>
				</li>
				<li className="card-stats-item">
				<a href="#">
				<span className="card-stats-key">Followers</span>
				<span className="card-stats-val">0</span>
				</a>
				</li>
				</ul>
				</div>
				</div>
				</div>
				<div className="spacer" />
				<div className="box trending">
				<p className="trend-title"><span className="title is-5">Trends</span> · <a href="#">change</a></p>
				<p className="trend-hashtag"><a href="#">#hashtag1</a><br/>13k statuses</p>
				<p className="trend-hashtag"><a href="#">#hashtag2</a><br/>29k statuses</p>
				<p className="trend-hashtag"><a href="#">#hashtag3</a><br/>2k statuses</p>
				<p className="trend-hashtag"><a href="#">#hashtag4</a><br/>9k statuses</p>
				<p className="trend-hashtag"><a href="#">#hashtag5</a><br/>18k statuses</p>
				<p className="trend-hashtag"><a href="#">#hashtag6</a><br/>168k statuses</p>
				</div>
				</div>
				<div className="column is-6">
				<div className="notification is-danger">
				<button className="delete" onClick={() => {}}/>
				This template is not yet finished, it may change. Please check the readme for more information.
				</div>
					<div className="box">
						<StreamItem username="ma4m" userfullname="imam tauhid" useravatar="https://pbs.twimg.com/profile_images/492205428567072768/M_eHSDxx.jpeg" value="coba upload ke stream" datetime="2017-1-2 12:10:00" />
					</div>
				</div>
				<div className="column is-3 hide">
				<div className="box">
				<p><span className="title is-5">Who to follow</span> · <a href="#">Refresh</a>· <a href="#">View All</a></p>
				<hr/>
				<div className="columns">
				<div className="column is-3 is-marginless">
				<div className="image">
				<img src="https://placehold.it/200x200" alt="gambar"/>
				</div>
				</div>
				<div className="column is-9">
				<p>
				<a href="#">
				<strong>John Smith</strong>
				&commat;jsmith
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
				<div className="columns">
				<div className="column is-3 is-marginless">
				<div className="image">
				<img src="https://placehold.it/200x200" alt="gambar" />
				</div>
				</div>
				<div className="column is-9">
				<p>
				<a href="#">
				<strong>Jane Smith</strong>
				&commat;janesmith
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
				<div className="columns">
				<div className="column is-3 is-marginless">
				<div className="image">
				<img src="https://placehold.it/200x200" alt="gambar" />
				</div>
				</div>
				<div className="column is-9">
				<p>
				<a href="#">
				<strong>Mike Scott</strong>
				&commat;mscott
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

				</div>
				</div>
				</div>
				</div>
			</section>
		);
	}
}

export default SectionComponent;

