import {Route, Switch} from 'react-router-dom'

import Copywriting from './Tabs/Copywriting/Copywriting'
import PortGrowth from './Tabs/Growth/PortGrowth'
import PortCopy from './Tabs/Copywriting/PortCopy'

const Routes = () =>{
    <Switch>
        <Route 
            exact path='/'
            component={Main}
        />
        <Route component={PortCopy}/>
        <Route component={PortGrowth}/>

    </Switch>
}

export default Routes