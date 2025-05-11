import * as React from 'react'
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg'

function PlanIcon(props: any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        fill="#DBEAFE"
      />
      <Path
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        stroke="#E5E7EB"
      />
      <Path d="M13 12h14v16H13V12z" stroke="#E5E7EB" />
      <G clipPath="url(#clip0_458_3915)">
        <Path
          d="M16 13v1h-1.5a1.5 1.5 0 00-1.5 1.5V17h14v-1.5a1.5 1.5 0 00-1.5-1.5H24v-1a.999.999 0 10-2 0v1h-4v-1a.999.999 0 10-2 0zm11 5H13v8.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V18z"
          fill="#2563EB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_458_3915">
          <Path d="M13 12h14v16H13V12z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PlanIcon
