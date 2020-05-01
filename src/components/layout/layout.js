import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../layout/layout.scss'
import SubSection from '../expandCollapseSection/expandCollapseSection';
import ShoppingForm from "../shoppingForm";
import DeliveryDetails from "../deliveryDetails";

const Layout = (props) => {
    return (
        <Container className='container'>
            <Row>
                <Col>
                    <header className="header">
                        <img src='dunkees.png' alt='Italian Trulli'/>
                    </header>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*<h1> Place Your Order ! </h1>*/}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                    <SubSection title='My Info'/>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SubSection title='Delivery Information' children={ <DeliveryDetails/> }/>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SubSection title='Order Information' children={ <ShoppingForm/> }/>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SubSection title='Cart Summary'/>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;