import React from 'react';

export type Props = React.SVGProps<SVGSVGElement>;

export const Settings: React.FC<Props> = (props: Props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_1719)">
        <path
          d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z"
          fill="grey"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1719">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};