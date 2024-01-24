import React from 'react'
import { Row, Col, Image, Typography, Button } from "antd"
//@ts-ignore
import vector1 from "../../assets/images/Vector1.svg"
//@ts-ignore
import vector2 from "../../assets/images/Vector2.svg"
import "./homeStyle/firstSection.css"

const { Text } = Typography

const FirstSection = () => {
    return (
        <Row className='first-main-container'>

            <Col xs={24} md={14} lg={12} className='first-left-container'>
                <Col className='first-left-sub-container'>
                    <Text className='first-title'>Accelerating India’s sustainable energy future</Text>
                    <Text className='first-description'>Say hello to Lilypad, where innovation meets environmental responsibility!!</Text>
                    <Text className='first-description'>Our exceptional lineup of electric vehicles includes electric scooters, cutting-edge cycles, and futuristic hoverboards, complemented by a selection of high-quality accessories, all meticulously designed to cater to your needs.</Text>
                    <Text className='first-description'>Embark on your transformative journey towards a cleaner, brighter future, with Lilypad as your trusted companion. Take the first step towards a sustainable tomorrow.</Text>
                    <Button className='first-explore-btn'>Explore Our Range</Button>
                </Col>
            </Col>

            <Col xs={24} md={10} lg={12} className='first-right-container'>
                <Image src={vector1} className="vector1" preview={false}/>
                <Image src={vector2} className='vector2' preview={false}/>
            </Col>

        </Row>
    )
}

export default FirstSection