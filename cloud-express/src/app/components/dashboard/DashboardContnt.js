import React, {Component} from 'react';
import '../../../scss/dashboard/dashboardContent.css';
import {DASHBOARD} from '../../constants/titles';

class DashboardContnt extends Component {
    render() {
        return (
            <div className='Dashboard-content container-fluid'>
                <div className='page-title'>
                    <span className='chocolate'>{DASHBOARD.PAGE_NAME.FIRST_NAME}</span>
                    <span className='goldenrod'>{DASHBOARD.PAGE_NAME.LAST_NAME}</span>
                </div>

            </div>
        );
    }
}

export default DashboardContnt;