import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GalleryOutlineIcon = (props) => (
    <Svg
        width={17}
        height={17}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.333 0.708a2.833 2.833 0 0 1 2.833 2.833V11.333a2.833 2.833 0 0 1 -2.833 2.833H3.542a2.833 2.833 0 0 1 -2.833 -2.833V3.542a2.833 2.833 0 0 1 2.833 -2.833H11.333Zm3.778 2.611c0.58 0.519 0.944 1.272 0.944 2.111V13.222a2.833 2.833 0 0 1 -2.833 2.833H5.431a2.827 2.827 0 0 1 -2.112 -0.944H13.222a1.889 1.889 0 0 0 1.889 -1.889V3.32ZM3.542 1.653H11.333a1.889 1.889 0 0 1 1.889 1.889V11.333a1.889 1.889 0 0 1 -1.889 1.889H3.542a1.889 1.889 0 0 1 -1.889 -1.889V3.542a1.889 1.889 0 0 1 1.889 -1.889Z"
            fill="white"
        />
    </Svg>
);

export default GalleryOutlineIcon;