import styled from 'styled-components';

import { text } from '../../constants';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 2rem 0;

    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 30%;

    display: flex;
`;

export const TemperatureContainer = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    align-items: flex-start;

    & > p {
        color: ${text.secondary};
        font-size: 5rem;
        font-weight: 100;
    }
`;

export const HighLowContainer = styled.div`
    width: 70%;
    height: 100%;

    padding: 1rem 0;

    display: flex;
    align-items: flex-start;

    & > p {
    color: ${text.secondary};
    font-size: 3rem;
    font-weight: 100;

        &:not(:last-child) {
            margin-right: 1rem; 
        }
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: column;
`;

export const DateContainer = styled.div`
    width: 100%;
    height: 30%;

    display: flex;
    align-items: center;

    & > p {
        color: ${text.mediumLight};
        font-size: 3rem;
        font-weight: 100;
        text-transform: capitalize;
    }
`;

export const CityContainer = styled.div`
    width: 100%;
    height: 70%;

    margin-left: -1rem;

    display: flex;
    align-items: center;

    & > p {
        color: ${text.light};
        font-size: 10rem;
        font-weight: 300;
    }
`;