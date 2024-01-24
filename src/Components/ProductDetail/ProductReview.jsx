import React ,{useState}from "react";
import { Row, Col, Select ,Button,Typography,Pagination,Avatar} from "antd";
import { Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons';


const { Option } = Select;
const { Text } = Typography;



const ProductDetailReview = () => {
    const options1 = [
        { id: 1, value: "Option 1", label: "Option 1 Label" },
        { id: 2, value: "Option 2", label: "Option 2 Label" },
      
      ];
    
      const options2 = [
        { id: 3, value: "Option 3", label: "Option 3 Label" },
        { id: 4, value: "Option 4", label: "Option 4 Label" },
       
      ];
    
      const options3 = [
        { id: 5, value: "Option 5", label: "Option 5 Label" },
        { id: 6, value: "Option 6", label: "Option 6 Label" },
      
      ];
      const [currentPage, setCurrentPage] = useState(1);
      const pageSize = 3; 
      const reviews = [
        {
          id: 1,
          name: "Jaydip Choudhary",
          date: "April 3, 2023",
          rating: 2,
          content:
            "The Smart Watch 2 impresses with its sleek design, extensive features, and long-lasting battery. The Smart Watch 3 takes it up a notch, with outstanding performance, exceptional health tracking, and durable build, making it a versatile companion for both fitness enthusiasts and tech-savvy individuals.",
        },
        {
            id: 2,
            name: "Raydip Choudhary",
            date: "April 3, 2023",
            rating: 4,
            content:
              "The Smart Watch 2 impresses with its sleek design, extensive features, and long-lasting battery. The Smart Watch 3 takes it up a notch, with outstanding performance, exceptional health tracking, and durable build, making it a versatile companion for both fitness enthusiasts and tech-savvy individuals.",
          },
          {
            id: 3,
            name: "Sai Choudhary",
            date: "April 3, 2023",
            rating: 4,
            content:
              "The Smart Watch 2 impresses with its sleek design, extensive features, and long-lasting battery. The Smart Watch 3 takes it up a notch, with outstanding performance, exceptional health tracking, and durable build, making it a versatile companion for both fitness enthusiasts and tech-savvy individuals.",
          },
          {
            id: 4,
            name: "Dip Choudhary",
            date: "April 3, 2023",
            rating: 4,
            content:
              "The Smart Watch 2 impresses with its sleek design, extensive features, and long-lasting battery. The Smart Watch 3 takes it up a notch, with outstanding performance, exceptional health tracking, and durable build, making it a versatile companion for both fitness enthusiasts and tech-savvy individuals.",
          },
       
      ];
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = currentPage * pageSize;
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    
  return (
  <>
    <div style={{ paddingTop: "30px", fontWeight: 600 }}>
      <Row gutter={14} >
        <Col span={4}>
          <Select defaultValue="Rating" style={{ width: "100%" ,height:"40px"}}>
          {options1.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={4}>
          <Select defaultValue="Images & Videos" style={{ width: "100%" ,height:"40px"}}>
          {options2.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={16} align="right">
          <Select defaultValue="Sort: Select" style={{ width: "25%",height:"40px" }} align="left" >
          {options3.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <div style={{ borderBottom: "1px solid #ccc", marginTop: "40px" }}></div>
      {reviews.slice(startIndex, endIndex).map((review) => (
          <div
            key={review.id}
            style={{ borderBottom: "1px solid #ccc", marginTop: "30px", paddingBottom: "30px", display: "flex",  }}
          >
            <Avatar shape="circle"  size={48} style={{ marginRight: "20px" }} > {review.name?.slice(0,1)}</Avatar>
            <div>
              <Typography>
                <Text style={{ fontWeight: "bold", marginRight: "4px" }}>{review.name}</Text>
                <span style={{ color: "black" }}>•</span>
                <Text style={{ marginRight: "4px", marginLeft: "4px", color: "gray", fontWeight: "normal" }}>{review.date}</Text>
              </Typography>
              <Typography style={{ marginTop: "10px" }}>
              <Rate disabled defaultValue={review.rating} style={{color:"#FF902D",marginLeft:"-20px"}} character={<span style={{ fontSize: '20px', letterSpacing: '-8px' }}>&#9733;</span>} />

              </Typography>
              <Typography style={{ color: "#777586", fontWeight: "normal" }}>{review.content}</Typography>
            </div>
          </div>
        ))}
      <div style={{paddingTop:"50px"}}>
    

        {/* Button positioned at top-right corner */}
        <div style={{ position: "relative" }}>
          <Button
            htmlType="submit"
            style={{
              backgroundColor: "#04b2a9",
              color: "white",
              height: "48px",
              width: "12%",
            }}
          >
            Write a Review
          </Button>
          <Pagination
            current={currentPage}
            total={reviews.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            style={{
              position: "absolute",
              top: "-20px",
              right: "-30px",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetailReview;