import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RowContainer = styled.div`
    width: 100%;
    height: 33.3%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const SmallCardContainer = styled.div`
    width: 33%;
    height: 97%;

    &:not(:last-child) { 
        margin-right: 1rem;
    }
`;