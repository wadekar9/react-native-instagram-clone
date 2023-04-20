import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckFillIcon = (props) => (
    <Svg
        fill="#000000"
        width="23px"
        height="23px"
        viewBox="0 0 0.69 0.69"
        id="check-mark-circle"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
        {...props}
    >
        <Path
            id="primary"
            cx={12}
            cy={12}
            r={10}
            style={{
                fill: "#3797EF",
            }}
            d="M0.633 0.345a0.288 0.288 0 0 1 -0.288 0.288 0.288 0.288 0 0 1 -0.287 -0.288 0.288 0.288 0 0 1 0.575 0z"
        />
        <Path
            id="secondary"
            d="M0.316 0.445A0.029 0.029 0 0 1 0.294 0.437L0.208 0.351A0.029 0.029 0 1 1 0.248 0.309l0.066 0.066 0.123 -0.123A0.029 0.029 0 0 1 0.478 0.293L0.335 0.437a0.029 0.029 0 0 1 -0.021 0.008Z"
            style={{
                fill: "#ffffff",
            }}
        />
    </Svg>
);

export default CheckFillIcon;