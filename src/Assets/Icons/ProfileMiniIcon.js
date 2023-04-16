import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileMiniIcon = (props) => (
    <Svg
        width="25px"
        height="25px"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.667 9.375a4.167 4.167 0 1 1 -8.333 0 4.167 4.167 0 0 1 8.333 0Zm-2.083 0a2.083 2.083 0 1 1 -4.167 0 2.083 2.083 0 0 1 4.167 0Z"
            fill="black"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 1.042C6.172 1.042 1.042 6.172 1.042 12.5s5.13 11.458 11.458 11.458 11.458 -5.13 11.458 -11.458S18.828 1.042 12.5 1.042ZM3.125 12.5c0 2.177 0.743 4.181 1.988 5.773A9.36 9.36 0 0 1 12.568 14.583a9.358 9.358 0 0 1 7.388 3.602A9.375 9.375 0 1 0 3.125 12.5Zm9.375 9.375a9.336 9.336 0 0 1 -5.908 -2.096A7.283 7.283 0 0 1 12.568 16.667a7.282 7.282 0 0 1 5.926 3.042A9.338 9.338 0 0 1 12.5 21.875Z"
            fill="black"
        />
    </Svg>
);

export default ProfileMiniIcon;