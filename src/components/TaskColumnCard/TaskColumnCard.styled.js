import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Card = styled.div`
  width: 300px;
  height: 112px;
  flex-shrink: 0;
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

export const CardAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid ${globalTheme.colors.primary};
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

// export const Priority = styled.div`
//   display: inline-block;
//   padding: 4px 12px;
//   border-radius: 4px;
//   background: #72c2f8;
// `;

export const Priority = styled.div`
  display: inline-block;
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
