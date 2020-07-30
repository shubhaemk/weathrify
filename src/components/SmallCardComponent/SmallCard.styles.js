import styled from 'styled-components';

import { background, text } from '../../constants';


export const Container = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 0.5rem;
    background-color: ${background.layer};

    display: flex;
    flex-direction: column;

    padding: 2rem 0;

    & > * {
        &:not(:last-child){
            margin-bottom: 0.5rem;
        }
    }
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 3rem;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
        color: ${text.light};
        font-weight: 300;
        font-size: ${props => {
            if(props.type === 'info'){
                return '1.7rem;';
            }

            return '2.3rem;';
        }}
    }
`;

