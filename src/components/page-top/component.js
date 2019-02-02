import React, {Component} from 'react';
import logo from 'src/logo.svg';

export class PageTop extends Component {

  render() {
	return (
		<div className="rw-page-top clearfix">
			<img src={logo} className='rw-logo' alt="Logo" />
		</div>
	);
  }
}
