import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchOutlineIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.96 9.6c0 -5.17 -4.19 -9.36 -9.36 -9.36S0.24 4.43 0.24 9.6s4.19 9.36 9.36 9.36a9.324 9.324 0 0 0 6.09 -2.252l5.75 5.75 0.081 0.07a0.72 0.72 0 0 0 0.937 -1.088l-5.75 -5.75A9.324 9.324 0 0 0 18.96 9.6Zm-17.28 0a7.92 7.92 0 1 1 15.84 0 7.92 7.92 0 0 1 -15.84 0Z"
            fill="#262626"
        />
    </Svg>
);

export default SearchOutlineIcon;