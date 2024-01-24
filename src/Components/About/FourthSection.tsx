import React from 'react'
import { Col, Row, Typography, Image } from 'antd'

//@ts-ignore
import vector12 from "../../assets/images/Vector12.svg"
//@ts-ignore
import image1 from "../../assets/images/image1.svg"
//@ts-ignore
import image2 from "../../assets/images/Image2.svg"
import "./aboutStyle/fourthSection.css"
import FifthSection from './FifthSection'

const { Text } = Typography

const FourthSection = () => {
    return (
        <>
        <Row className='about-fourth-section-container'>
            <Col span={24} className='about-top-container'>
                <Text className='about-fourth-title'>The Lilypad Promise.</Text>
                <Text className='about-fourth-description'>Lilypad is a marketplace offering a range of electric vehicles and accessories designed for fun, convenience, and sustainability. We believe that the right environmental choice can also be an exciting one. Our mission is to provide innovative, eco-friendly transportation solutions that resonate with teens and young adults. We're not just selling vehicles; we're facilitating a cleaner, brighter future for the next generation.</Text>
            </Col>
        </Row>
        <Row className='about-fourth-section-container'>
            <Col span={24} className=''>
                <FifthSection />
            </Col>
        </Row>
        </>
    )
}

export default FourthSection