import React from 'react'
import { Col, Row, Typography, Image } from 'antd'
//@ts-ignore
import vector11 from "../../assets/images/Vector11.svg"
import "./aboutStyle/thirdSection.css"

const { Text } = Typography

const ThirdSection = () => {
    return (
        <Row className='about-third-section-container'>
            <Col span={12} className='about-third-left-container'>
                <Image src={vector11} className='vector11' preview={false}/>
            </Col>
            <Col xs={24} md={12} lg={12} className='about-third-right-container'>
                <Text className='about-third-title'>We are Reimagining Mobility for the Next Generation.</Text>
                <Text className='about-third-description'>In a world where the focus often leans toward four-wheelers and standard two-wheelers, we recognize that electric mobility (e-mobility) solutions for teens and young adults are sometimes overlooked. At Lilypad, we're here to bridge this gap and cater to the unique needs and preferences of this vibrant demographic. Whether it's zipping around campus, exploring the neighborhood, or simply embracing an eco-conscious way of getting from point A to B, they deserve mobility options that match their energy and enthusiasm.</Text>
            </Col>
        </Row>
    )
}

export default ThirdSection