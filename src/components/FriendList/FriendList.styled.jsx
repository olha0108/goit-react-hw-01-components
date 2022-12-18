import styled from '@emotion/styled';

export const FriendListFragment = styled.ul`
  list-style: none;
  margin: 16px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 4px ${props => `${props.theme.colors.silver}`};
  margin: 16px;
  width: 160px;
`;
export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${p => (p.online ? '#8C001A' : '#E55451')};
`;
export const FriendAvatar = styled.img`
  margin-left: 8px;
`;
export const FriendName = styled.p`
  margin-left: 8px;
`;
