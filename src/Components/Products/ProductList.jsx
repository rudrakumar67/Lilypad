import React, { useEffect, useState } from 'react'
import { Col, Row, List } from 'antd'
import Product from './Product'
//@ts-ignore

// // Generate a random product with an id, name, price, and description
// function generateRandomProduct(id) {
//     const productName = `Product ${id}`;
//     const productPrice = (Math.random() * 100).toFixed(2); // Random price between 0 and 100
//     const productDescription = `Description for ${productName}`;
//     return { id, name: productName, price: parseFloat(productPrice), description: productDescription };
// }
// // Generate 50 random products
// const generateRandomProducts = () => {
//     const productData = [];
//     for (let id = 1; id <= 20; id++) {
//         productData.push(generateRandomProduct(id));
//     }
//     return productData;
// };

const ProductList = ({products}) => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        setProductList(products);
    }, [products])
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 4,
                            xxl: 5,
                        }}
                        dataSource={productList}
                        renderItem={(product) => (
                            <List.Item>
                                <Product product={product} />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ProductList