import styled from 'styled-components/native';

interface propType {
  position?: string
}

export const LoaderContainer = styled.View<propType>`
  alignItems: center;
  position: ${props => props.position || 'absolute'};
  borderRadius: 0px;
  height: 100%;
  width : 100%;
  top: 0;
  left: 0;
  backgroundColor: rgba(50, 50, 50, 0.8);
  justifyContent: center;
  zIndex: 9;
`