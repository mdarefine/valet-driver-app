import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SuccessIcon(props: any) {
  return (
    <Svg
      width={108}
      height={105}
      viewBox="0 0 108 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M104 48.048v4.485c-.006 10.514-3.498 20.744-9.953 29.165-6.456 8.42-15.53 14.581-25.87 17.562a51.212 51.212 0 01-31.505-1.02c-10.114-3.644-18.749-10.378-24.617-19.198-5.869-8.82-8.656-19.254-7.947-29.744.71-10.491 4.878-20.478 11.883-28.47 7.006-7.992 16.473-13.562 26.99-15.88A51.177 51.177 0 0174.35 7.972M104 13.5L54 62.305 39 47.68"
        stroke="#004B8D"
        strokeWidth={6.44955}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SuccessIcon
