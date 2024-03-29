import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SaveOutlineIcon = (props) => (
    <Svg
        width={22}
        height={25}
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.860565 1.17859V22.831C0.860565 23.0938 0.963999 23.346 1.1485 23.5331C1.53627 23.9264 2.16941 23.9308 2.56268 23.5431L11.1113 15.1139L19.6599 23.5431C19.847 23.7276 20.0993 23.831 20.362 23.831C20.9143 23.831 21.362 23.3833 21.362 22.831V1.17859C21.362 0.902446 21.1382 0.678589 20.862 0.678589H1.36057C1.08442 0.678589 0.860565 0.902446 0.860565 1.17859ZM2.36057 21.6358V2.17859H19.862V21.6358L11.8134 13.6997C11.4241 13.3158 10.7985 13.3158 10.4092 13.6997L2.36057 21.6358Z"
            fill="#262626"
        />
    </Svg>
);

export default SaveOutlineIcon;