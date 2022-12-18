import styled from '@emotion/styled';

export const StatisticsDesk = styled.section`
  max-width: 316px;
  text-align: center;
  border: 2px solid ${props => `${props.theme.colors.valentine}`};
`;
export const StatisticsTitle = styled.h2`
  color: ${props => `${props.theme.colors.valentine}`};
  text-transform: uppercase;
  padding: 16px;
  margin: 0px;
  font-size: 16px;
`;
export const StatisticsStatlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const StatisticsItem = styled.li`
  padding: 16px;
`;
export const StatisticsLabel = styled.span`
  display: block;
  font-size: 12px;
  padding-bottom: 4px;
`;
export const StatisticsPercentage = styled.span`
  font-size: 16px;
`;
