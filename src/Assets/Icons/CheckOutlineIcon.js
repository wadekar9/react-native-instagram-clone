import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckOutlineIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 0.6 0.6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            cx={12}
            cy={12}
            r={10}
            stroke="#ffffff"
            strokeWidth={0.05}
            d="M0.55 0.3a0.25 0.25 0 0 1 -0.25 0.25 0.25 0.25 0 0 1 -0.25 -0.25 0.25 0.25 0 0 1 0.5 0z"
        />
    </Svg>
);

export default CheckOutlineIcon;