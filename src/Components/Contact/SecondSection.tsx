import React from 'react'
import { Row, Col, Typography, Input, Button, Space } from 'antd'

import "./contactStyle/secondSection.css"

const { Text } = Typography

const SecondSection = () => {
    return (
        <Row className='contact-second-section-container'>
            <Col xs={23} md={22} lg={16} className='contact-second-sub-container'>
                <Text className='contact-second-title'>Subscribe Newsletter & Get</Text>
                <Text className='contact-second-description'>Company News</Text>
                <Space.Compact className='contact-space-container'>
                    <Input className='contact-subscribe-input' placeholder='Your email' />
                    <Button className='contact-subscribe-btn'>Subscribe</Button>
                </Space.Compact>
            </Col>
        </Row>
    )
}

export default SecondSection