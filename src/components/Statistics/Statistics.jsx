import { Stats } from 'components/Statistics/Stats/Stats';
import { titlePresence } from 'utils/titlePresence';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {titlePresence(title)}
      <ul className={css.statlist}>
        {stats.map(data => (
          <Stats
            key={data.id}
            id={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
