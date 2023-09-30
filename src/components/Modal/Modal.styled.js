import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalField = styled.div`
  position: relative;
  width: 335px;
  min-height: 155px;
  padding: 20px;

  background-color: #ffffff;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
`;
