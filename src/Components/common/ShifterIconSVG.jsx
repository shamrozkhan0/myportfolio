const ShifterIcon = ({ size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M16.6302 17.7156L10.9818 23.3739L0.157632 23.2161L0 12.3731L5.6485 6.71478L5.77985 17.584L16.6302 17.7156Z"
        fill="currentColor"
      />
      <path
        d="M6.86279 5.65832L12.5113 0L23.3354 0.157906L23.493 11.0009L17.8445 16.6591L17.7132 5.78991L6.86279 5.65832Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="25" height="24" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export default ShifterIcon;
