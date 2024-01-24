import React from 'react'
import { Row, Col, Typography, Button, Image, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
//@ts-ignore
import frame1 from "../../assets/images/Frame1.svg"
//@ts-ignore
import logo from "../../assets/images/logoWhite.svg"
import "./layoutStyle/footer.css"

const { Text } = Typography

const Footer = () => {

    const navigate = useNavigate()

    return (
        <Row className="footer-container">

            <Col span={24}>
                <Row className='footer-top-container'>

                    <Col xs={24} lg={7} className='footer-logo-container'>
                        <Col className='footer-logo-sub-container'>
                            <Image src={logo} preview={false} width={170} className='logo' />
                            <Text className='footer-logo-text'>Accelerating a sustainable energy future in india</Text>
                        </Col>
                    </Col>

                    <Col xs={24} lg={5} className='footer-menu-container'>
                        <Space direction='vertical' size={15}>
                            <Text className='footer-menu-text' onClick={() => navigate("/vision")}>Our Vision</Text>
                            <Text className='footer-menu-text' onClick={() => navigate("/about")}>About Us</Text>
                            <Text className='footer-menu-text' onClick={() => navigate("/contact")}>Contact Us</Text>
                        </Space>
                    </Col>

                    <Col xs={24} lg={5} className='footer-menu-container'>
                        <Space direction='vertical' size={15}>
                            <Text className='footer-menu-text' onClick={() => navigate("/privacy-policy")}>Privacy Policy</Text>
                            <Text className='footer-menu-text' onClick={() => navigate("/terms-and-condition")}>Terms & Conditions</Text>
                        </Space>
                    </Col>

                    <Col xs={24} lg={7} className='footer-menu-container'>
                        <Space direction='vertical' size={15} align='center'>
                            <Text className='social-media-text'>Social Media</Text>
                            <Space direction='horizontal' size={15} align='center'>
                                <a href="https://www.linkedin.com/company/lilypadev/" target='_blank' ><Image preview={false} src="/svg/linkedin.svg"/></a>
                                <a href="https://twitter.com/lilypad_ev" target='_blank' ><Image preview={false} src="/svg/twitter.svg"/></a>
                                <a href="https://www.instagram.com/lilypad_ev/" target='_blank' ><Image preview={false} src="/svg/instagram.svg"/></a>
                            </Space>
                        </Space>
                    </Col>

                </Row>
            </Col>

            <Col span={24} className='footer-bottom'>
                <Text className='footer-bottom-text'>© {new Date().getFullYear()} LilyPad. All rights reserved.</Text>
            </Col>

        </Row>
    )
}

export default Footer