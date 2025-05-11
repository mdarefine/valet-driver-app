import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CallIcon(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.972 11.482v2.107a1.406 1.406 0 01-1.532 1.405 13.904 13.904 0 01-6.062-2.156 13.7 13.7 0 01-4.216-4.216 13.903 13.903 0 01-2.156-6.09A1.405 1.405 0 012.404 1H4.51a1.405 1.405 0 011.405 1.208 9.02 9.02 0 00.492 1.974 1.405 1.405 0 01-.316 1.483l-.892.892a11.24 11.24 0 004.215 4.215l.892-.892a1.405 1.405 0 011.482-.316c.638.238 1.3.403 1.975.492a1.404 1.404 0 011.208 1.426z"
        stroke="#002C69"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CallIcon
