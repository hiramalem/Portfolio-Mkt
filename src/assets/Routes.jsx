import {Route, Switch} from 'react-router-dom'

import PortLicensing from './Tabs/Licensing/PortLicensing'
import PortGrowth from './Tabs/Growth/PortGrowth'
import PortCopy from './Tabs/Copywriting/PortCopy'
import Certifications from './Header/Certifications/Certifications'

const Routes = () =>{
    <Switch>
        <Route 
            exact path='/'
            component={Main}
        />
        <Route component={PortCopy}/>
        <Route component={PortGrowth}/>
        <Route component={PortLicensing}/>
        <Route component={Certifications}/>        

    </Switch>
}

export default Routes