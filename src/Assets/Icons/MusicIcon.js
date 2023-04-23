import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MusicIcon = (props) => (
    <Svg
        width="16px"
        height="16px"
        viewBox="0 0 0.48 0.48"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <Path
            cx={6}
            cy={18}
            r={3}
            fill="#ffffff"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.04}
            d="M0.18 0.359a0.06 0.06 0 0 1 -0.061 0.061 0.06 0.06 0 0 1 -0.06 -0.061 0.06 0.06 0 0 1 0.121 0z"
        />
        <Path
            cx={18}
            cy={17}
            r={3}
            fill="#ffffff"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.04}
            d="M0.42 0.34a0.06 0.06 0 0 1 -0.061 0.06 0.06 0.06 0 0 1 -0.06 -0.06 0.06 0.06 0 0 1 0.121 0z"
        />
        <Path fill="#ffffff" d="M0.42 0.06 0.18 0.119v0.08L0.42 0.14V0.06z" />
        <Path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.04}
            d="M0.18 0.359v-0.16m0.24 0.14V0.14M0.18 0.201V0.119L0.42 0.06v0.08M0.18 0.201 0.42 0.141"
        />
    </Svg>
);

export default MusicIcon;