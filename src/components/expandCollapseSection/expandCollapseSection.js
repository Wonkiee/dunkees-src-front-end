import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../expandCollapseSection/expandCollapseSection.scss';
import constants from "../../utils/constants";

export default class ExpandCollapseSection extends React.Component {
    constructor(props) {
        super(props);
        this.arrowDirection = 'fas fa-angle-double-right';
        this.state = {
            isOpen: false,
        };
    }

    toggle = () => {
        if (this.state.isOpen) {
            this.arrowDirection = constants.ARROW_DIRECTIONS.RIGHT;
        }
        else {
            this.arrowDirection = constants.ARROW_DIRECTIONS.DOWN;
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="expand-collapse-sec">
                <div onClick={ this.toggle } className="title" id="expandCollapsSec">
                    <span className="sectionTitle left">
                        <i className={ `fas fa-angle-double-${ this.arrowDirection }` }></i> { this.props.title }
                    </span>
                </div>
                <Collapse isOpen={ this.state.isOpen }>
                    {this.props.children    }
                </Collapse>
            </div>
        );
    }
}
