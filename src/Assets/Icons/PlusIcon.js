import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusIcon = (props) => (
    <Svg
        width={19}
        height={18}
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.75 0V8H18.75V10H10.75V18H8.75V10H0.75V8H8.75V0H10.75Z"
            fill="#262626"
        />
    </Svg>
);

export default PlusIcon;