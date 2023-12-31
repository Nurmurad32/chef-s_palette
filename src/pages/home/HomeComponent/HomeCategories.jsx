import { Col, Image, Row } from 'react-bootstrap';

const HomeCategories = () => {

    const categoryData = [
        { id: "1", cat: "Seafood", img: "https://images.unsplash.com/photo-1579783411194-f697db862dcd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "2", cat: "Southern", img: "https://images.unsplash.com/photo-1605926637563-ab877395ec88?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "3", cat: "Dessert", img: "https://images.unsplash.com/photo-1672141881821-243640425a37?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "4", cat: "BBQ", img: "https://images.unsplash.com/photo-1569483829024-06b434101ff5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "5", cat: "Vegetarian", img: "https://images.unsplash.com/photo-1598449526978-cd11daa040c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "6", cat: "Grilled", img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "7", cat: "Italian", img: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "8", cat: "Pasta", img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "9", cat: "Mexican", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "10", cat: "Breakfast", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "11", cat: "Asian", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "12", cat: "Smoked", img: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    ]
    return (
        <div>
            <Row>
                {categoryData.map((category) => <Col key={category.id} xs={4} md={2}>
                    <div className='d-flex flex-column align-items-center mt-5'>
                        <Image className='d-flex justify-content-center text-center img-fluid' src={category.img} roundedCircle style={{
                            height: "150px",
                            width: "150px"
                        }} />
                        <p className='text-center mt-3'>{category.cat}</p>
                    </div>
                </Col>
                )
                }
            </Row>
        </div>
    );
};

export default HomeCategories;