function Retangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="320"
      fill="none"
      viewBox="0 0 646 524"
    >
      <g filter="url(#filter0_d_3610_24236)">
        <rect
          width="586"
          height="464"
          // x="5"
          // y="5"
          fill="#046639"
          rx="24"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_d_3610_24236"
          width="646"
          height="524"
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
          <feOffset dy="7"></feOffset>
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.733802 0 0 0 0 0.751002 0 0 0 0 0.804167 0 0 0 0.4 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3610_24236"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3610_24236"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Retangle;

