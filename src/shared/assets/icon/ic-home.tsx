import type { IconProps } from '@shared/types/Icon.ts';

const IcHome = ({ active }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
      <path
        d="M11.15 17H3.05002C1.72002 17 0.650024 16.08 0.650024 14.94V6.5C0.650024 5.81 1.05002 5.17 1.72002 4.78L8.32002 0.999999C9.13002 0.539999 10.18 0.539999 10.98 0.999999L17.82 4.92C18.36 5.23 18.73 5.7 18.85 6.24C19.44 8.92 20.9 17 17.15 17C14.15 17 15.65 10.55 21.65 7.97"
        stroke={active ? 'black' : '#80CA14'}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcHome;
