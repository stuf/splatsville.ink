import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { intervalToDuration, formatDuration } from 'date-fns';

import css from '@/styles/lab/Countdown.module.css';

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

  return (
    <div className={clsx(css.body)}>
      <div className={clsx(css.display)}>
        <code>{s.join(':')}</code>
      </div>
    </div>
  );
}
