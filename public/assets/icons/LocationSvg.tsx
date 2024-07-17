export const LocationSvg = ({
  height = "10px",
  width = "14px",
}: {
  height: string;
  width: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 " + "10" + " " + "14"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_66349_978"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.00146484 13.6305V0.630493H9.99234V13.6305H0.00146484Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_66349_978)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99239 5.67937C9.99239 9.72217 5.47603 13.4664 5.47603 13.4664C5.21214 13.6852 4.78025 13.6852 4.51636 13.4664C4.51636 13.4664 0 9.72217 0 5.67937C2.51256e-05 2.89094 2.23691 0.630493 4.99621 0.630493C7.7555 0.630493 9.99239 2.89094 9.99239 5.67937Z"
          fill="#DF9186"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99628 8.21948C3.61025 8.21948 2.48267 7.07997 2.48267 5.67938C2.48267 4.27875 3.61028 3.13922 4.99628 3.13922C6.38226 3.13922 7.50988 4.27873 7.50988 5.67935C7.50988 7.07995 6.38231 8.21948 4.99628 8.21948Z"
        fill="#FBDDCE"
      />
    </svg>
  );
};
