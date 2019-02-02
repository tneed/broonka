import React from 'react';
import { Route } from 'react-router-dom';

import HelloBundle from 'src/modules/helloBundle';

class Routes extends React.Component {
    render(){
        return (
            <div>
                <Route path='/' component={HelloBundle} />
            </div>
        );
    }
}

export default Routes;