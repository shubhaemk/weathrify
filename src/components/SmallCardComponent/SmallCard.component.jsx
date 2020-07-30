import React from 'react';

import { Container, IconContainer, InfoContainer } from './SmallCard.styles';

const SmallCardComponent = props => {

    const { icon, text, value, type } = props;

    const addMeasureUnit = (type, value) => {
        if(!type){
            return <p>{value}</p>;
        }
        if(type === 'wind-direction'){
            return <p>{value}&#176;</p>;
        }

        if(type === 'temperature'){
            return <p>{value}&#176; C</p>;
        }
    }

    return (
        <Container>
            <IconContainer>
                <img src={icon} alt="weather icons"/>
            </IconContainer>
            <InfoContainer type="info">
                <p>{text}</p>
            </InfoContainer>
            <InfoContainer type="value">
                {
                    addMeasureUnit(type, value)
                }
            </InfoContainer>
        </Container>
    )
}

export default SmallCardComponent;