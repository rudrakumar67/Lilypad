import { Col, Row, Typography, Image } from 'antd'
import "./poweringUpStyle/firstSection.css"


const FirstSection = () => {

  const { Text } = Typography

  return (
    <div>
      <Row className='powering-fourth-section-container'>
            <Col span={24} className='powering-top-container'>
                <Col className='powering-text' >
                  <Text className='powering-fourth-title'>Powering Up: 5 Steps from Vision to Reality</Text>
                  <Text className='about-fourth-description'>
                    At Lilypad, we have embarked on a journey that balances realism with boundless ambition, in the pursuit of a sustainable energy future.
                    <br/>
                    We are committed to driving change, step by step. This is what our journey will look like.
                  </Text>
                </Col>

                <Col className='image-section' >
                  <Image src="/images/powering-up-battery.png" preview={false} className='image-class' />
                </Col>
            </Col>            
        </Row>
    </div>
  )
}

export default FirstSection