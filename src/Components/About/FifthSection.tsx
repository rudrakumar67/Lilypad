import { Typography, Image, Row, Col } from 'antd';
//@ts-ignore
import image1 from "../../assets/images/image1.svg";
//@ts-ignore
import image2 from "../../assets/images/Image2.svg";
import "./aboutStyle/fifthSection.css";
const { Text } = Typography;

const contentArray = [
  {
    image: image1,
    title: 'Aaryan Sharma',
    description: 'Aaryan Sharma brings a wealth of knowledge and a keen eye for emerging opportunities to Lilypad. As a crypto-based private equity fund owner and investor, he has been at the forefront of transformative technologies.... Read More',
  },
  {
    image: image2,
    title: 'Uday Parmar',
    description: 'Uday Parmar is a seasoned professional with over 20 years of experience with consulting firms like EY, KPMG, and Boston Analytics, along with multiple tech startups. His expertise spans sales, business development, strategy... Read More',
  }
  // Add more objects for additional content
];

const FifthSection: React.FC = () => (
    <>
      <Row className='about-founder-section-container'>
          <Col span={24} className='about-founder-container'>
              <Text className='about-founder-title'>Founders</Text>
              <br/>
              <Text className='about-founder-description'>Meet the driving force behind our success. Our executive team brings a wealth of experience and expertise to lead our organization toward new horizons. Get to know the visionaries who shape our furure.</Text>
          </Col>
      </Row>
      {contentArray.map((content, index: number) => (
        <div key={index} className='container'>
          {index % 2 === 0 ? (
            <>
              <div className='content-left'>
                <Image src={content.image} preview={false} className='image-class' />
              </div>
              <div className='text-right'>
                <Text className='about-title'>{content.title}</Text>
                <Text className='about-description'>{content.description}</Text>
              </div>
            </>
          ) : (
            <>
              <div className='text-left'>
                <Text className='about-title'>{content.title}</Text>
                <Text className='about-description'>{content.description}</Text>
              </div>
              <div className='content-right'>
                <Image src={content.image} preview={false} className='image-class' />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );

export default FifthSection;
