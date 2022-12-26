import * as React from "react";
const SvgEdit = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M372 49.1c-14.5 2.2-26.8 7.8-39.3 17.9-4 3.2-63.7 62.4-132.9 131.6L74.2 324.5l-1.5 7c-21 97.5-24.9 116.7-24.3 120 .9 4.6 5.7 10.1 10.3 11.6 1.9.6 5.4.9 7.7.6 3-.4 98.3-20.7 118.6-25.2 2.7-.7 252.6-249.6 260.9-260 27.9-34.9 22.4-86-12.1-113.1C416.9 52.2 393 45.9 372 49.1zm22.3 32.4c24.3 5.1 41 29.4 36.9 53.7-2.3 13.9-5.9 19.3-27.5 41.3l-19.2 19.6-34-34.1-34-34 20.1-20c17.4-17.4 20.9-20.4 26.6-22.9 11-5 19.7-6 31.1-3.6zm-68.8 173.6c-19.8 19.8-62.8 62.5-95.5 94.9l-59.6 58.8-42.3 9.1c-23.3 5-42.5 9-42.7 8.8-.1-.1 3.8-19.4 8.8-42.7l9-42.5 95.1-95.3 95.2-95.2 34 34 34 34-36 36.1z"
      fill={props.color}
    />
  </svg>
);
export default SvgEdit;
