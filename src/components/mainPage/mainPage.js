import React from 'react';
import '../mainPage/mainPage.scss';
import Layout from '../layout/layout';
import Progress from "reactstrap/es/Progress";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="mainPageSec">
                    <Layout/>
                </div>
            </div>
    );
    }
}
