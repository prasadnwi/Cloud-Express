import React, {Component} from 'react';
import PropTypes from 'prop-types';

// components
import DashboardContent from "../components/dashboard/DashboardContent";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardContent/>
            </div>
        );
    }
}

Dashboard.propTypes = {

}

Dashboard.defaultProps = {

}

export default Dashboard;