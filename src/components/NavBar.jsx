import React, { Component } from 'react';

import { TabMenu } from 'primereact/tabmenu'

class NavBar extends Component {
    state = {  items: [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'}
    ]}
    render() { 
        return (<TabMenu className="test" model={this.state.items}/>);
    }
}
 
export default NavBar;