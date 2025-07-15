import type { IconProps } from '@shared/types/Icon.ts';

export const IcArrowBottom = ({ active }: IconProps) => {
  return (
    <>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 15C6.37518 13.6572 8.47156 11.6035 9.93841 10.1648C10.5129 9.65142 10.8185 9.16621 11.4297 9.00259C11.8148 8.96874 12.102 9.27341 12.3832 9.51037C13.905 10.9716 16.4354 13.4767 18 15"
            stroke="#1d1d1d"
            strokeWidth="1.3"
            strokeMiterlimit="10"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 9C16.6248 10.3428 14.5284 12.3965 13.0616 13.8352C12.4871 14.3486 12.1815 14.8338 11.5703 14.9974C11.1852 15.0313 10.898 14.7266 10.6168 14.4896C9.09497 13.0284 6.56465 10.5233 5 9"
            stroke="#666666"
            strokeWidth="1.3"
            strokeMiterlimit="10"
          />
        </svg>
      )}
    </>
  );
};
