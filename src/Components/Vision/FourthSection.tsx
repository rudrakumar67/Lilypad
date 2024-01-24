import React from 'react'
import { Row, Col, Typography, Image } from 'antd'

//@ts-ignore
import vector16 from "../../assets/images/Vector16.svg"
import "./visionStyle/fourthSection.css"

const { Text } = Typography

const FourthSection = () => {
    return (
        <Row className='vision-fourth-section-container'>
            <Col xs={24} md={12} lg={11} className='vision-fourth-left-container'>
            </Col>
            <Col xs={24} md={12} lg={13} className='vision-fourth-right-container'>
                <Text className='vision-fourth-title'>Contribution to India's EV Growth</Text>
            </Col>
        </Row>
    )
}

export default FourthSection