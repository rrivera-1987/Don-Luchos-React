import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-lg-12 text-center">
                        <hr style= {{ marginBottom: '3rem' }} />
                        <h1 className="text-black font-weight-bold mb-3" style={{ fontFamily: 'Tilt Prism, sans-serif' }}>Welcome to Don Lucho's</h1>
                        <h1 className="text-black font-weight-bold" style={{ fontFamily: 'Tilt Prism, sans-serif' }}>Pollo a la Brasa</h1>
                        <hr className="divider divider-light" />
                    </div>
                    <div className="col-lg-8 text-center mx-auto">
                        <p className="text-black">Embark on a culinary journey inspired by the vibrant flavors of Peru. At Don Lucho's Pollo a la Brasa, 
                        we invite you to savor the rich heritage of our family-owned establishment. Named as an homage to my Peruvian father-in-law, our restaurant 
                        combines traditional recipes passed down through generations with a modern twist. Each dish is crafted with love and care, showcasing the authentic taste of Peru. 
                        Join us and experience the warmth of Peruvian hospitality and the irresistible delights of our kitchen. Don Lucho's, where every meal tells a story.</p>                  
                        <Link to='/about' style={{ borderRadius: '80%', width: '140px', height: '57px' }} className='btn btn-dark btn-xl oval-button'>Find Out More</Link>                 
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomePage;