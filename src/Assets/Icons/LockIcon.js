import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const LockIcon = (props) => (
    <Svg
        width={17}
        height={20}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_0_2716)">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 0C9.76878 0 11 1.23122 11 2.75L11.0008 4.26557C11.987 4.38895 12.75 5.23037 12.75 6.25V9.75C12.75 10.8546 11.8546 11.75 10.75 11.75H6C4.89543 11.75 4 10.8546 4 9.75V6.25C4 5.31809 4.63738 4.53504 5.49998 4.31301L5.5 2.75C5.5 1.23122 6.73122 0 8.25 0ZM8.25 1.2C7.39396 1.2 6.7 1.89396 6.7 2.75L6.699 4.25H9.8V2.75C9.8 1.89396 9.10604 1.2 8.25 1.2Z"
                fill="#262626"
            />
        </G>
        <Defs></Defs>
    </Svg>
);

export default LockIcon;