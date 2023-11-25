import { Suspense, lazy } from 'react';
import { Col, Row } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle/PageTitle';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import useDataLoad from '../../hooks/useDataLoad';
import { Helmet } from 'react-helmet-async';
const Chef = lazy(() => import('../../components/Chef/Chef'));

const Chefs = () => {
    const chefs = useDataLoad("chefs");

    return (
        <div className='container'>
            <Helmet>
                <title>Chefs || Chef's Palette</title>
            </Helmet>
            <Suspense fallback={<LoadingPage />}>
                <PageTitle title="Meet Our Expert Chefs" />
                <Row xs={1} md={3} lg={4} className="g-4">
                    {chefs &&
                        chefs?.map((chef, idx) =>
                            <Col key={idx}>
                                <Chef chef={chef}></Chef>
                            </Col>
                        )
                    }
                </Row>
            </Suspense>
        </div>
    );
};

export default Chefs;