import clsx from 'clsx';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { intervalToDuration, formatDuration } from 'date-fns';

import css from '@/styles/lab/Countdown.module.css';

const pluralize = (n, s, p) => (n === 1 ? s : p);

export default function CountdownPage() {
  const [state, setState] = useState({
    start: new Date(),
    end: new Date(2024, 1, 10, 6, 40, 0),
    // end: new Date(2023, 7, 24, 6, 40, 0),
  });

  const dur = useMemo(() => intervalToDuration(state), [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(s => ({ ...s, start: new Date() }));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  const s = [dur.months, dur.days, dur.hours, dur.minutes, dur.seconds].map(x =>
    `${x}`.padStart(2, '0'),
  );

  const xs = [
    [dur.days, 'day', 'days'],
    [dur.hours, 'hour', 'hours'],
    [dur.minutes, 'minute', 'minutes'],
    [dur.seconds, 'second', 'seconds'],
  ];

  return (
    <div className={clsx(css.body)}>
      <div className={clsx(css.display)}>
        <div className="text-3xl grid grid-cols-2 items-end gap-4 gap-y-8">
          {xs.map(([n, s, p], ix) => (
            <Fragment key={ix}>
              <div className="text-8xl text-right">{n}</div>
              <div>{pluralize(n, s, p)}</div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
