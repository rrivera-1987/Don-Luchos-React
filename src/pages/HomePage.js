import { useRef } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import FoodImage from '../components/FoodImage';
import PeruvianTable from '../assets/img/Peruvian-Table.png';


const HomePage = () => {
    const portfolioSectionRef = useRef(null);

    return (
        <Container style={{
            backgroundImage: `url(${PeruvianTable})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-lg-12 text-center">
                            <hr style={{ marginBottom: '3rem' }} />
                            <h1 className="text-white font-weight-bold mb-3" style={{ fontFamily: 'Tilt Prism, sans-serif' }}>Welcome to Don Lucho's</h1>
                            <h1 className="text-white font-weight-bold" style={{ fontFamily: 'Tilt Prism, sans-serif' }}>Pollo a la Brasa</h1>
                            <hr className="divider divider-light" />
                        </div>
                        <div className="col-lg-8 text-center mx-auto">
                            <p className="text-white font-weight-bold">Embark on a culinary journey inspired by the vibrant flavors of Peru. At Don Lucho's Pollo a la Brasa,
                                we invite you to savor the rich heritage of our family-owned establishment. Named as an homage to my Peruvian father-in-law, our restaurant
                                combines traditional recipes passed down through generations with a modern twist. Each dish is crafted with love and care, showcasing the authentic taste of Peru.
                                Join us and experience the warmth of Peruvian hospitality and the irresistible delights of our kitchen. Don Lucho's, where every meal tells a story.</p>
                            <Link to='/about' style={{ borderRadius: '80%', width: '140px', height: '57px' }} className='btn btn-dark btn-xl oval-button'>Find Out More</Link>
                        </div>
                    </div>
                </div>
                <div className='food-image-container mt-5' ref={portfolioSectionRef}>
                    <FoodImage />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;