import * as React from 'react';
const SvgUser = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.28 27.28" {...props}>
    <g data-name="Capa 2">
      <path
        d="M13.64 0a13.64 13.64 0 1 0 13.64 13.64A13.64 13.64 0 0 0 13.64 0Zm0 4.08a4.51 4.51 0 1 1-4.51 4.51 4.51 4.51 0 0 1 4.51-4.51Zm0 19.63a10.06 10.06 0 0 1-6.52-2.4 1.9 1.9 0 0 1-.67-1.46A4.55 4.55 0 0 1 11 15.3h5.25a4.54 4.54 0 0 1 4.56 4.55 1.94 1.94 0 0 1-.67 1.46 10 10 0 0 1-6.51 2.4Z"
        style={{
          fill: props.color && '#0f131b'
        }}
        data-name="Capa 1"
      />
    </g>
  </svg>
);
export default SvgUser;
