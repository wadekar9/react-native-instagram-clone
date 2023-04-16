import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

const MoreMiniIcon = (props) => (
    <Svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 8 8"
        style={{
            enableBackground: "new 0 0 60 60",
        }}
        xmlSpace="preserve"
        width={20}
        height={20}
        {...props}
    >
        <G>
            <Path d="M4 2.133c0.588 0 1.067 -0.479 1.067 -1.067S4.588 0 4 0 2.933 0.479 2.933 1.067s0.479 1.067 1.067 1.067z" />
            <Path d="M4 5.867c-0.588 0 -1.067 0.479 -1.067 1.067S3.412 8 4 8s1.067 -0.479 1.067 -1.067 -0.479 -1.067 -1.067 -1.067z" />
            <Path d="M4 2.933c-0.588 0 -1.067 0.479 -1.067 1.067s0.479 1.067 1.067 1.067 1.067 -0.479 1.067 -1.067 -0.479 -1.067 -1.067 -1.067z" />
        </G>
    </Svg>
);

export default MoreMiniIcon;