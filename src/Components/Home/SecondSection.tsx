import React from 'react'
import { Row, Col, Image, Typography, Button } from 'antd'
//@ts-ignore
import vector3 from "../../assets/images/Vector3.svg"
import "./homeStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='second-main-container'>

            <Col xs={24} md={14} lg={16} className='second-left-container'>
                <Col className='second-left-sub-container'>
                    <Text className='second-title'>We are here to support your EV transition!!</Text>
                    <Text className='second-description'>At Lilypad, we're not just here to sell electric vehicles – we're here to revolutionize the way you move. We are passionate advocates for electric mobility, and our primary goal is to enable you to make the right choice.</Text>
                </Col>
            </Col>

            <Col xs={24} md={10} lg={8} className='second-right-container' style={{ backgroundImage: `url(${vector3})` }}>
                <Text className='second-style'>STYLE</Text>
            </Col>

        </Row>
    )
}

export default SecondSection