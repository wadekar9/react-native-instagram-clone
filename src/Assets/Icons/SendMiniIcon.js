import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SendMiniIcon = (props) => (
    <Svg
        width="24px"
        height="24px"
        viewBox="0 0 1.44 1.44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M1.44 0H0v1.44h1.44V0Z" fill="white" fillOpacity={0.01} />
        <Path
            d="M1.29 0.15 0.891 1.29l-0.228 -0.513L0.15 0.549 1.29 0.15Z"
            stroke="#262626"
            strokeWidth={0.12}
            strokeLinejoin="round"
        />
        <Path
            d="M1.29 0.15 0.663 0.777"
            stroke="#262626"
            strokeWidth={0.12}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SendMiniIcon;