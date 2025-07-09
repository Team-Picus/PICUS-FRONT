import type { IconProps } from '@shared/types/Icon.ts';

const IcExplore = ({ active }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 15 23" fill="none">
      <path
        d="M5.8149 18.14H1.5249V1H13.5249V18.14"
        stroke={active ? 'black' : '#80CA14'}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M8.38494 12.14L5.81494 13V13.86V21.57L13.5249 18.14V1L5.81494 3.57V11.29"
        stroke={active ? 'black' : '#80CA14'}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcExplore;
