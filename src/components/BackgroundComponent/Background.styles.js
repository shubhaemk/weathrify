import styled from 'styled-components';

import { borderRadius } from '../../constants'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    border-radius: ${borderRadius};
    background-image: url(${(props) => `${props.url}`});
    background-size: cover;
`;