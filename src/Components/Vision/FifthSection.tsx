import React from 'react'
import { Row, Col, Image } from 'antd'

//@ts-ignore
import vector17 from "../../assets/images/Vector17.svg"
//@ts-ignore
import vector18 from "../../assets/images/Vector18.svg"
//@ts-ignore
import vector19 from "../../assets/images/Vector19.svg"
//@ts-ignore
import vector20 from "../../assets/images/Vector20.svg"
//@ts-ignore
import vector21 from "../../assets/images/Vector21.svg"
//@ts-ignore
import vector22 from "../../assets/images/Vector22.svg"
import "./visionStyle/fifthSection.css"

const FifthSection = () => {
    return (
        <div className='vision-fifth-section-container'>
            <Row gutter={[35, 25]}>
                <Col xs={24} md={11} lg={10} className='vision-fifth-col-1'>
                    <Image src={vector17} preview={false} width={354} />
                    <Image src={vector18} preview={false} width={354} />
                </Col>
                <Col xs={0} md={13} lg={14} className='vision-fifth-col-2'>
                    <Image src={vector19} preview={false} width={466} />
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8}>
                            <Image src={vector20} preview={false} className='bottom-imgs' />
                        </Col>
                        <Col span={8}>
                            <Image src={vector21} preview={false} className='bottom-imgs' />
                        </Col>
                        <Col span={8}>
                            <Image src={vector22} preview={false} className='bottom-imgs' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FifthSection