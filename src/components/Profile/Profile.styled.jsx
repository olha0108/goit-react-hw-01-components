import styled from '@emotion/styled';
export const ProfileUser = styled.div`
  width: 240px;
  outline: 2px solid ${props => `${props.theme.colors.silver}`};
  background-color: ${props => `${props.theme.colors.valentine}`};
  text-align: center;
  margin: 8px;
`;
export const ProfileDescription = styled.div`
  width: 240px;
  background-color: ${props => `${props.theme.colors.white}`};
  padding-top: 16px;
  padding-bottom: 16px;
  margin: auto;
`;
export const ProfileAvatar = styled.img`
  width: 80px;
  border-radius: 50%;
  background-color: ${props => `${props.theme.colors.silver}`};
`;
export const ProfileName = styled.p`
  color: ${props => `${props.theme.colors.valentine}`};
  font-weight: 700;
`;
export const ProfiletTag = styled.p`
  color: ${props => `${props.theme.colors.silver}`};
`;
export const ProfileLocation = styled.p`
  color: ${props => `${props.theme.colors.silver}`};
`;
export const ProfileStats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const ProfileStatsItem = styled.li`
  flex-basis: 33.33%;
  padding: 10px;
  outline: 1px solid ${props => `${props.theme.colors.silver}`};
`;
export const ProfileLabel = styled.span`
  display: block;
  color: ${props => `${props.theme.colors.white}`};
  font-size: 16px;
`;
export const ProfileQuantity = styled.span`
  display: block;
  font-weight: 700;
  color: ${props => `${props.theme.colors.white};`};
`;
