import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Anticuchos from '../assets/img/Anticuchos.jpg';
import Causa from '../assets/img/Causa-Rellena.jpg';
import Ceviche from '../assets/img/ceviche-rocoto.jpg';
import Chicharron from '../assets/img/Chicharron.jpg';
import LomoSaltado from '../assets/img/lomo-saltado.jpg';
import Picarones from '../assets/img/Picarones.jpg';
import './foodImages.css';


const FoodImage = () => {
    const foodImages = [
        {
            name: 'Anticuchos',
            src: Anticuchos,
            alt: 'Anticuchos',
        },
        {
            name: 'Causa-Rellena',
            src: Causa,
            alt: 'Causa-Rellena',
        },
        {
            name: 'ceviche-rocoto',
            src: Ceviche,
            alt: 'ceviche-rocoto',
        },
        {
            name: 'Chicharron',
            src: Chicharron,
            alt: 'Chicharron',
        },
        {
            name: 'lomo-saltado',
            src: LomoSaltado,
            alt: 'lomo-saltado',
        },
        {
            name: 'Picarones',
            src: Picarones,
            alt: 'Picarones',
        },
    ];
    
    return (
        <Container>
            <Row>
                {foodImages.slice(0, 3).map((foodItem, index) => (
                    <Col key={index} className='food-image-container'>
                        <div className='image-overlay'>
                        <img src={foodItem.src} alt={foodItem.alt} />
                        <div className='image-text'>{foodItem.name}</div>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                {foodImages.slice(3, 6).map((foodItem, index) => (
                    <Col key={index} className='food-image-container'>
                        <div className='image-overlay'>
                        <img src={foodItem.src} alt={foodItem.alt} />
                        <div className='image-text'>{foodItem.name}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
      );
    };
    
export default FoodImage;