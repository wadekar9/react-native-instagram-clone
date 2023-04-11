import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeartFillIcon = (props) => (
    <Svg
        width={24}
        height={21}
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.2175 1.88951L11.8725 2.65511L12.6042 1.88951C15.179 -0.685229 19.1711 -0.565474 21.8185 1.88951L22.005 2.06914C24.5798 4.64387 23.9489 9.79014 21.4939 12.4375L21.171 12.7788L20.8115 13.1454C19.4262 14.5366 12.8077 20.2293 12.8077 20.2293C12.2439 20.6986 11.4234 20.6913 10.8681 20.212L8.85115 18.4612L7.05542 16.8815C4.92092 14.9887 3.31874 13.5074 2.24888 12.4375C-0.387159 9.80151 -0.894471 4.70518 1.74157 2.06914C4.37761 -0.5669 8.58142 -0.746533 11.2175 1.88951Z"
            fill="#262626"
        />
    </Svg>
);

export default HeartFillIcon;