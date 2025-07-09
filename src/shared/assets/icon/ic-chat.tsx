import type { IconProps } from '@shared/types/Icon.ts';

const IcChat = ({ active, whiteBackgroundColor }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
      <g clipPath="url(#clip0_1703_1152)">
        <path
          d="M6.92491 19.4201C8.22491 18.0601 9.83491 15.1701 11.4749 14.6001C13.2349 14.2301 15.5549 14.4901 17.2049 13.4501C22.2749 10.8701 21.6549 3.02011 16.3249 1.22011C14.6549 0.570108 12.9949 0.670108 11.1949 0.660108C9.30491 0.700108 7.58491 0.520108 5.80491 1.00011C-0.885086 2.85011 -0.885086 11.9201 5.66491 14.1501"
          stroke={
            whiteBackgroundColor ? (active ? 'black' : '#B2B2B2') : active ? 'black' : '#80CA14'
          }
          strokeWidth="1.3"
          strokeMiterlimit="10"
        />
        <path
          d="M6.68506 5.41992H14.6851"
          stroke={
            whiteBackgroundColor ? (active ? 'black' : '#B2B2B2') : active ? 'black' : '#80CA14'
          }
          strokeWidth="1.3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M6.68506 8.41992H12.6851"
          stroke={
            whiteBackgroundColor ? (active ? 'black' : '#B2B2B2') : active ? 'black' : '#80CA14'
          }
          strokeWidth="1.3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1703_1152">
          <rect width="21.21" height="19.87" fill="white" transform="translate(0.125)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcChat;
