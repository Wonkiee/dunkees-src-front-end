import React from 'react';
import '../mainPage/mainPage.scss';
import Layout from '../layout/layout';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainPageSec">
                <Layout/>
            </div>
    );
    }
}
