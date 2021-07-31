import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  justify-content: space-between;
  color:#fff;
  background-color: #673AB7;
  display: flex;
  height: 70px;
  padding: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const HeaderCenter = styled.div`
  display: flex;
`;

export const HeaderRight = styled.div`
  align-items: center;
  display: flex;
  
  span {
    margin-right: 16px;
  }
`;