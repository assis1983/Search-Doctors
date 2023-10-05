function Pencil() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 60 60"
    >
      <g filter="url(#filter0_d_6449_10806)">
        <rect
          width="39"
          height="39"
          x="8.5"
          y="8.5"
          fill="#fff"
          stroke="#E0E0E0"
          rx="7.5"
        ></rect>
        <path
          fill="#004CE8"
          fillRule="evenodd"
          d="M33.204 26.796L35 25c.545-.545.818-.818.963-1.112a2 2 0 000-1.776c-.145-.294-.418-.567-.963-1.112-.545-.545-.818-.818-1.112-.964a2 2 0 00-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 004.023 3.977zm-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9-.14.26-.199.555-.317 1.145l-.615 3.077c-.067.332-.1.498-.005.593.094.095.26.061.593-.005l3.077-.616c.59-.117.884-.176 1.145-.316.262-.14.474-.352.9-.777l6.889-6.89a12.9 12.9 0 01-4.02-3.98z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_6449_10806"
          width="60"
          height="60"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.733802 0 0 0 0 0.751002 0 0 0 0 0.804167 0 0 0 0.6 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6449_10806"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_6449_10806"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Pencil;
