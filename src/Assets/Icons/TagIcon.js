import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TagIcon = (props) => (
    <Svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.104 0.637 2.363 2.363h6.032a3 3 0 0 1 3 3v15A3 3 0 0 1 20.5 24H3A3 3 0 0 1 0 21V6a3 3 0 0 1 3 -3h6.03L11.396 0.637a0.501 0.501 0 0 1 0.707 0Zm-0.354 1.767L9.944 4.208a1 1 0 0 1 -0.707 0.292H3A1.501 1.501 0 0 0 1.501 6v15a1.501 1.501 0 0 0 1.499 1.501h1a5 5 0 0 1 5 -5h5.5a5 5 0 0 1 5 5h1a1.501 1.501 0 0 0 1.499 -1.501V6a1.501 1.501 0 0 0 -1.501 -1.501h-6.24a1 1 0 0 1 -0.707 -0.293L11.75 2.404Zm2.75 16.597a3.5 3.5 0 0 1 3.5 3.5H5.5a3.5 3.5 0 0 1 3.5 -3.5h5.5ZM11.75 6.5a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0 -9.5Zm-3.249 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1 -6.5 0Z"
            fill="black"
            fillOpacity={0.4}
        />
    </Svg>
);

export default TagIcon;