import React from 'react'
import { Row, Col, Typography, Input, Button, Image } from 'antd'
import { MailOutlined, GlobalOutlined, EnvironmentOutlined } from "@ant-design/icons"

//@ts-ignore
import vector23 from "../../assets/images/Vector23.svg"
import TextArea from 'antd/es/input/TextArea'
import "./contactStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='contact-first-section-container'>
            <Col xs={24} md={12} lg={12} className='contact-first-left-container'>
                <div className='contact-first-left-top-container'>
                    <Text className='contact-first-sub-title'>CONTACT US</Text>
                    <Text className='contact-first-title'>We would love to hear from you.</Text>
                    <Text className='contact-first-description'>Fill up the form and our Team will get back to you within 24 hours.</Text>
                </div>
                <div className='contact-first-left-bottom-container'>
                    <Input className='contact-input' placeholder='Full Name' />
                    <Input className='contact-input' placeholder='Mail' />
                    <Input className='contact-input' placeholder='Phone' />
                    <TextArea className='contact-input' placeholder='Message' />
                    <Button className='contact-btn'>Send Message</Button>
                </div>
            </Col>
            <Col xs={24} md={12} lg={12} className='contact-first-right-container'>
                <Col className='contact-first-right-sub-container'>
                    <div className='contact-img-container'>
                        <Image src={vector23} width={320} preview={false} />
                    </div>
                    <div className='contact-company-info-container'>
                        <Text className='contact-info-text'>Contact Info -</Text>
                        <Text className='contact-info-sub-text'><MailOutlined className='contact-icon' />  Aaryan@Lilypad.co.in</Text>
                        <Text className='contact-info-sub-text'><GlobalOutlined className='contact-icon' /> www.Lilypad.co.in</Text>
                        <Text className='contact-info-sub-text'><EnvironmentOutlined className='contact-icon' /> Delhi, India</Text>
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default FirstSection