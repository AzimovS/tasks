import styled from 'styled-components';


export const StyledActorItem = styled.div<{
  selected: boolean;
}>`
  margin-bottom: 1rem;
  background-color: ${props => props.selected ? 'green' : 'none'};
`;

export const StyledItemImg = styled.img`
  width: 200px;
  height: 200px;
`;