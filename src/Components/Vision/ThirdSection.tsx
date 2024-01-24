import React from 'react'
import { Row, Col, Typography, Image } from 'antd'

//@ts-ignore
import vector15 from "../../assets/images/Vector15.svg"
import "./visionStyle/thirdSection.css"

const { Text } = Typography

const ThirdSection = () => {
  return (
    <Row className='vision-third-section-container'>
      <Col xs={24} lg={12} className='vision-third-left-container'>
        <Text className='vision-third-title'>Our Commitment to India's Growth: </Text>
        <Text className='vision-third-sub-title'>Following Elon Musk's Footsteps</Text>
        <Text className='vision-third-description'>At Lilypad, we don't just aim to be a successful business; we're deeply committed to contributing to India's growth. Our reason for existence is simple: we're enamored by visionaries like Elon Musk and his relentless pursuit of accelerating a sustainable energy future. Like Musk, we believe in a future where sustainable energy solutions are not just a choice but a way of life. <u>Read More</u></Text>
      </Col>
      <Col xs={24} lg={12} className='vision-third-right-container'>
        <Image src={vector15} width={400} preview={false} />
      </Col>
    </Row>
  )
}

export default ThirdSection