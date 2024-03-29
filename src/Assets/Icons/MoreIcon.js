import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MoreIcon = (props) => (
    <Svg
        width={14}
        height={3}
        viewBox="0 0 14 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 0C2.32843 0 3 0.671573 3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0ZM7 0C7.82843 0 8.5 0.671573 8.5 1.5C8.5 2.32843 7.82843 3 7 3C6.17157 3 5.5 2.32843 5.5 1.5C5.5 0.671573 6.17157 0 7 0ZM12.5 0C13.3284 0 14 0.671573 14 1.5C14 2.32843 13.3284 3 12.5 3C11.6716 3 11 2.32843 11 1.5C11 0.671573 11.6716 0 12.5 0Z"
            fill="#262626"
        />
    </Svg>
);

export default MoreIcon;