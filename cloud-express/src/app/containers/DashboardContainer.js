import React, {Component} from 'react';
// components
import DashboardContent from "../components/dashboard/DashboardContent";

class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <DashboardContent/>
            </div>
        );
    }
}

DashboardContainer.propTypes = {}

DashboardContainer.defaultProps = {}

export default DashboardContainer;