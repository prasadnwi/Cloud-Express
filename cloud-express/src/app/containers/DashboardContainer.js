import React, {Component} from 'react';
// components
import DashboardContent from "../components/dashboard/DashboardContent";

class DashboardContainer extends Component {
    render() {
        return (
            <div id='dashboard-container'>
                <DashboardContent/>
            </div>
        );
    }
}

export default DashboardContainer;