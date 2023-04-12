import * as React from "react";
import Svg, { Path } from "react-native-svg";

const VerifiedBadgeIcon = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.94911 0L6.18132 0.803456L7.65231 0.793732L8.25454 2.13583L9.49727 2.92292L9.2783 4.37756L9.89821 5.71157L8.92757 6.81691L8.72785 8.2743L7.31371 8.6794L6.35777 9.79747L4.94911 9.37371L3.54044 9.79747L2.5845 8.6794L1.17036 8.2743L0.970641 6.81691L0 5.71157L0.619915 4.37756L0.400947 2.92292L1.64368 2.13583L2.2459 0.793732L3.71689 0.803456L4.94911 0ZM6.25793 3.51871L4.28924 5.60893L3.64029 4.91992C3.48882 4.75911 3.23567 4.75153 3.07486 4.90299C2.91404 5.05446 2.90646 5.30761 3.05793 5.46842L3.99805 6.46659C4.15597 6.63425 4.4225 6.63425 4.58042 6.46659L6.84029 4.06721C6.99175 3.9064 6.98417 3.65325 6.82336 3.50178C6.66254 3.35032 6.40939 3.3579 6.25793 3.51871Z"
      fill="#3897F0"
    />
  </Svg>
);

export default VerifiedBadgeIcon;