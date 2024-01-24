import React from 'react'
import { Row, Col, Typography, Image } from 'antd'

//@ts-ignore
import vector14 from "../../assets/images/Vector14.svg"
import "./visionStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='vision-second-section-container'>
            <Col xs={24} lg={12} className='vision-second-left-container'>
                <Text className='vision-second-title'><span>Our Vision</span> goals to revolutionizing india</Text>
                <Text className='vision-second-description'>Our journey began with a simple yet powerful idea: to make electric mobility accessible to everyone. Our current focus is on creating a dynamic EV marketplace, bringing buyers and sellers together seamlessly. But, we're not content with simply being a marketplace; we're driven by a larger vision to actively contribute to the growth of the Indian EV market. Lilypad's ambition is to create a self-sustainable charging infrastructure business and place over 3000 charging stations, all across India.</Text>
            </Col>
            <Col xs={24} lg={12} className='vision-second-right-container'>
                <Image src={vector14} preview={false} width={400} className='vision-hands-img'/>
            </Col>
        </Row>
    )
}

export default SecondSection