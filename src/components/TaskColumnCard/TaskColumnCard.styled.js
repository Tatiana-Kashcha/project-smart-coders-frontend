import styled from 'styled-components';
// import { globalTheme } from 'theme';

export const Card = styled.div`
  width: 300px;
  height: 112px;
  padding: 14px 14px 18px 14px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: ${props => props.theme.colors.taskItemBg};
`;

export const CardDescr = styled.div`
  width: 296px;
  height: 16px;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const CardEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardAvAndPri = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const Priority = styled.div`
  display: flex;
  padding: 4px 12px;
  border-radius: 4px;
  background: ${props => {
    switch (props.globalTheme) {
      case 'Medium':
        return 'mainYellow';
      case 'Low':
        return '#008000';
      case 'High':
        return '#FF0000';
      default:
        return '#72c2f8';
    }
  }};
`;

export const Elipse = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 44px;
  border: 1.8px solid #3e85f3;
  background-color: #3e85f3;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    font-family: Inter;
    font-size: 18px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-position: 50% 50%;
  border-radius: 44px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
