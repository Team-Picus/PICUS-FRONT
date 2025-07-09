import type { IconProps } from '@shared/types/Icon.ts';

const IcMy = ({ active, whiteBackgroundColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
      <path
        d="M21.3749 19.7507C21.3649 15.7607 18.4949 12.3907 14.5249 11.1907"
        stroke={
          whiteBackgroundColor ? (active ? 'black' : '#B2B2B2') : active ? 'black' : '#80CA14'
        }
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
      <path
        d="M1.375 19.7506C1.435 15.8606 4.055 13.1106 7.375 11.3306C7.975 10.7906 6.835 9.98056 6.325 8.91056C4.165 4.87056 8.275 -0.0594375 12.805 1.20056C19.195 2.88056 17.935 11.8406 11.375 12.1106"
        stroke={
          whiteBackgroundColor ? (active ? 'black' : '#B2B2B2') : active ? 'black' : '#80CA14'
        }
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcMy;
