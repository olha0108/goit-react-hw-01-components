import PropTypes from 'prop-types';
import {
  StatisticsDesk,
  StatisticsTitle,
  StatisticsStatlist,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';
const randomColor = () => {
  return Math.random() > 0.5 ? '#E55451' : '#8C001A';
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsDesk>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsStatlist>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsStatlist>
    </StatisticsDesk>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
