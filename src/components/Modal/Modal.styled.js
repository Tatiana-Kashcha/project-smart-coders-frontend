import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8); // змінна //
  z-index: 1200;
`;

export const ModalField = styled.div`
  position: relative;
  width: 335px;
  min-height: 155px;
  padding: 20px;

  background-color: #ffffff; //${({ theme }) => theme.modal_window})
  border-radius: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 468px;
    padding: 32px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 14px;
  right: 14px;
  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 18px;
    right: 18px;
  }
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.primary_text_mode})
`;
