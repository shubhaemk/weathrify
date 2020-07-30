import React from 'react';
import moment from 'moment';

import TemperatureIcon from '../../assets/temperature.svg';
import HumidityIcon from '../../assets/humidity.svg';
import PressureIcon from '../../assets/pressure.svg';
import WindIcon from '../../assets/wind.svg';
import SunsetIcon from '../../assets/sunset.svg';
import SunriseIcon from '../../assets/sunrise.svg';
import LatitudeIcon from '../../assets/latitude.svg';
import LongitudeIcon from '../../assets/longitude.svg';
import WindDirectionIcon from '../../assets/wind-direction.svg';

import { Container, RowContainer, SmallCardContainer } from './Detail.styles';

import SmallCardComponent from '../SmallCardComponent/SmallCard.component';

const DetailComponent = props => {

    const {
      weatherData: {
        coord: { lat, lon },
        main: { feels_like, humidity, pressure },
        sys: { sunrise, sunset },
        wind: { speed, deg },
      },
    } = props;

    const windToPrint = `${speed} km/h`;
    const humidityToPrint = `${humidity} %`;
    const pressureToPrint = `${pressure} mb`;
    const sunriseToPrint = moment.unix(sunrise).format("hh:mm A");
    const sunsetToPrint = moment.unix(sunset).format("hh:mm A");


    return (
      <Container>
        <RowContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={SunriseIcon}
              text="Sunrise"
              value={sunriseToPrint}
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={SunsetIcon}
              text="Sunset"
              value={sunsetToPrint}
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={PressureIcon}
              text="Pressure"
              value={pressureToPrint}
            />
          </SmallCardContainer>
        </RowContainer>
        <RowContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={TemperatureIcon}
              text="Feels Like"
              value={feels_like}
              type="temperature"
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={WindIcon}
              text="Wind Speed"
              value={windToPrint}
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={HumidityIcon}
              text="Humidity"
              value={humidityToPrint}
            />
          </SmallCardContainer>
        </RowContainer>
        <RowContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={LatitudeIcon}
              text="Latitude"
              value={lat}
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={LongitudeIcon}
              text="Longitude"
              value={lon}
            />
          </SmallCardContainer>
          <SmallCardContainer>
            <SmallCardComponent
              icon={WindDirectionIcon}
              text="Wind Direction"
              value={deg}
              type="wind-direction"
            />
          </SmallCardContainer>
        </RowContainer>
      </Container>
    );
}

export default DetailComponent;