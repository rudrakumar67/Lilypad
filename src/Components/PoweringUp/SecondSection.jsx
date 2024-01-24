import { Col, Row, Typography, Image } from 'antd'
import "./poweringUpStyle/secondSection.css"


const SecondSection = ({step, index}) => {

  const { Text, Paragraph, Title } = Typography

  return (
    <div key={index} >
      <Row className={step.addCover && 'overlay'} >
        <Col lg={{span:24}} xs={{span: 24}}  className='step-top-container'>
          <Col md={{span: 5 }} xs={{span: 24}} className='step-first' >
            <Text className='step-title' >{step.step}</Text>
            <Col className='battery-image-section' >
              <Image src="/images/battery1.png" preview={false} className='image-class' />
            </Col>
          </Col>
          <Col md={{span: 11 }} xs={{span: 24}}  className="step-center" >
            <Title>Starting Small with an EV Marketplace</Title>
            <Paragraph className='step-description' >Our journey begins with a small yet significant step – the creation of an Electric Vehicle (EV) marketplace. We understand that to change the world, we need to start by providing an accessible platform for those passionate about electric mobility.</Paragraph>
          </Col>
          <Col md={{span: 8 }} xs={{span: 24}}  >
            <Image src="/images/powering-up1.png" preview={false} className='image-class' />
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default SecondSection