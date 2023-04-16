import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MiniSearchIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.266 12.027a6.667 6.667 0 0 0 -9.98 -8.804 6.666 6.666 0 0 0 8.804 9.98l0.036 0.037 3.535 3.536a0.834 0.834 0 1 0 1.179 -1.179l-3.536 -3.535a0.93 0.93 0 0 0 -0.037 -0.035Zm-1.73 -7.625a5 5 0 1 1 -7.071 7.071 5 5 0 0 1 7.071 -7.071Z"
            fill="#484848"
        />
    </Svg>
);
export default MiniSearchIcon;