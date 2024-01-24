import React from 'react'
import { Row, Col, Image, Typography, Button } from 'antd'

//@ts-ignore
import vector1 from "../../assets/images/Vector30.svg"
//@ts-ignore
import vector2 from "../../assets/images/Vector31.svg"
import "./visionStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='vision-first-section-container' style={{height: "600px"}}>

            <Col xs={24} md={14} lg={12} className='first-left-container'>
                <Col className='first-left-sub-container'>
                    <Text className='vision-first-title'>Our vision</Text>
                    <Text className='vision-first-description'>"We need to be able to move away from fossil fuels and toward sustainable energy."  </Text>
                    <Text className='vision-first-explore-btn'>~Elon Musk</Text>
                </Col>
            </Col>

            <Col xs={24} md={10} lg={12} className='first-right-container'>
                <Image src={vector1} className="vector1" preview={false} style={{marginRight: "15px"}}/>
                <Image src={vector2} className='vector2' preview={false}/>
            </Col>

        </Row>
    )
}

export default FirstSection