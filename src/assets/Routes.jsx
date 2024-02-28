import {Route, Switch} from 'react-router-dom'

import PortLicensing from './Tabs/Licensing/PortLicensing'
import PortGrowth from './Tabs/Growth/PortGrowth'
import PortCopy from './Tabs/Copywriting/PortCopy'
import Certifications from './Header/Certifications/Certifications'
import About from './Header/About/About'

const Routes = () =>{
    <Switch>
        <Route 
            exact path='/Home'
            component={Main}
        />
        <Route component={PortCopy}/>
        <Route component={PortGrowth}/>
        <Route component={PortLicensing}/>
        <Route component={Certifications}/>
        <Route component={About}/>        

    </Switch>
}

export default Routes