import { useEffect, useState } from 'react';
import { getTimeAgo } from '@widget/home/feature/date.ts';

export const useTimeAgo = (createdAt: string) => {
  const [timeAgo, setTimeAgo] = useState(getTimeAgo(createdAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo(createdAt));
    }, 60 * 1000); // 1분마다 갱신

    return () => clearInterval(interval);
  }, [createdAt]);

  return timeAgo;
};
