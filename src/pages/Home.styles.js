import styled from 'styled-components';

import { background } from '../constants'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${background.layer};
    padding: 2rem;
    display: flex;

    & > * {
    margin: 0 1rem;
    }
`;

export const MainCardContainer = styled.div`
    width: 75%;
    height: 100%;
`;

export const ListCardContainer = styled.div`
    width: 25%;
    height: 100%;
`;


