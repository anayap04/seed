import * as React from "react";
const SvgTwitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M114.1 1.5C96.3 5.4 79.3 18.7 71.2 35.1c-7.7 15.6-7.3 6.1-6.9 164.2.3 140 .3 141.3 2.4 152.7 7.8 41.3 25.4 75 53.8 103.5C149 484 182.9 501.6 224 509.2c11 2.1 14.8 2.2 88.6 2.5 86.9.4 85.2.6 100.3-6.9 21-10.3 35.1-33.2 35.1-56.8 0-23.6-14.1-46.5-35.1-56.8-14.6-7.2-13.7-7.2-92.9-7.2s-78.3 0-92.9-7.2c-11.9-5.9-22-16-27.9-27.9-6-12.1-7.2-18.8-7.2-41.7V288h99.3c111.1 0 106.6.2 121.6-7.2 21-10.3 35.1-33.2 35.1-56.8 0-23.6-14.1-46.5-35.1-56.8-15-7.4-10.5-7.2-121.6-7.2H192v-51.3c0-57.9-.2-59.4-7.2-73.6-12.6-25.6-42.3-39.7-70.7-33.6z"
      fill={props.color}
    />
  </svg>
);
export default SvgTwitter;
