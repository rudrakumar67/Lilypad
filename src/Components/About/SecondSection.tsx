import React from 'react'
import { Row, Col, Typography, Image } from 'antd'

// @ts-ignore
import vector10 from "../../assets/images/Vector10.svg"
import "./aboutStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='about-second-section-container'>
            <Col xs={24} md={12} lg={12} className='about-second-left-container'>
                <Text className='about-second-title'>The India Story</Text>
                <Text className='about-second-description'>To say that India is a hot Electric Vehicle (EV) market, is an understatement. We have a government that is committed to sustainable transportation, with the the right set of incentives and policy support in place. Next, we see growing environmental awareness and a desire for cleaner mobility solutions. India's dense urban centers and emerging middle class have created a ripe market for EVs. Finally, our abundant potential for renewable energy sources, such as solar power, offers a sustainable charging infrastructure, making it a perfect fit for the EV revolution.</Text>
            </Col>
            <Col xs={24} md={12} lg={12} className='about-second-right-container'>
                <Image src={vector10} width={400} preview={false} />
            </Col>
        </Row>
    )
}

export default SecondSection