import React, { Component } from 'react';
import Pic02 from './images/pic01.jpg';
import Pic03 from './images/pic02.jpg';
import Pic04 from './images/pic03.jpg';

export default class Three extends Component {
    render() {
      return (
        <div className="Three">
          <section id="three" className="main style1 special">
				<div className="container">
					<header className="major">
						<h2>Adipiscing amet consequat</h2>
					</header>
					<p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
					<div className="row gtr-150">
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={Pic02}  alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={Pic03}  alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
						<div className="col-4 col-12-medium">
							<span className="image fit"><img src={Pic04} alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions special">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
        </div>
      );
    }
  }