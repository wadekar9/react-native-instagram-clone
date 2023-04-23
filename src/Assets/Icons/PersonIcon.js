import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PersonIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        width="16px"
        height="16px"
        viewBox="0 0 0.48 0.48"
        {...props}
    >
        <Path d="M0.24 0.24c0.044 0 0.08 -0.036 0.08 -0.08s-0.036 -0.08 -0.08 -0.08 -0.08 0.036 -0.08 0.08 0.036 0.08 0.08 0.08zm0 0.04c-0.053 0 -0.16 0.027 -0.16 0.08v0.04h0.32v-0.04c0 -0.053 -0.107 -0.08 -0.16 -0.08z" />
    </Svg>
);

export default PersonIcon;