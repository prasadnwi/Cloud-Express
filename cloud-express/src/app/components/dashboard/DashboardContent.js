import React, {Component} from 'react';
import '../../../scss/component/dashboard/dashboardContent.css';
//components
import {DASHBOARD} from '../../constants/titles';

class DashboardContent extends Component {
    render() {
        return (
            <div className='Dashboard-content container'>
                <div className='page-title'>
                    <span className='chocolate'>{DASHBOARD.PAGE_NAME.FIRST_NAME}</span>
                    <span className='goldenrod'>{DASHBOARD.PAGE_NAME.LAST_NAME}</span>
                </div>

            </div>
        );
    }
}

export default DashboardContent;