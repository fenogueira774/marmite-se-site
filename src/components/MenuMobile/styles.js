import styled from 'styled-components';

export const Container = styled.div`
  background-color: palevioletred;
  position: fixed;
  height: fit-content;
  top: 0px;
  left: 0px;
  width:fit-content;
  left: ${props => props.menumobile ? '0' : '-100%'};
  animation: showMenuMobile .4s;
  > svg {
    
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 250px;
    cursor: pointer;
    
  }

  
  @keyframes showMenuMobile {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  
  font-size: 2em;
`;


