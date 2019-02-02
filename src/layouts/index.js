import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Routes from 'src/routes';
import { PageTop } from 'src/components/page-top/component';

class AppLayout extends Component {

	render() {
		return (
			<div>
				<main>
					<PageTop />
					<div className="rw-main">
						<div className="rw-content">
							<Routes />
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default withRouter(AppLayout);