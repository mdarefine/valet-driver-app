import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function DirectionIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.546 1.453a3.6 3.6 0 00-5.092 0L1.456 7.451a3.6 3.6 0 000 5.09l5.998 5.998a3.6 3.6 0 005.09 0l5.998-5.998a3.6 3.6 0 000-5.09l-5.996-5.998zm-4.244.848a2.4 2.4 0 013.394 0L17.694 8.3a2.4 2.4 0 010 3.394l-5.998 5.997a2.4 2.4 0 01-3.394 0l-5.997-5.997a2.4 2.4 0 010-3.394l5.997-5.998zm3.324 3.072a.6.6 0 10-.85.85l.776.775h-1.55a2.4 2.4 0 00-2.4 2.4v3.6a.6.6 0 001.2 0v-3.6a1.2 1.2 0 011.2-1.2h1.551l-.776.775a.6.6 0 10.848.85l1.8-1.8a.599.599 0 000-.85l-1.799-1.8z"
        fill="#002C69"
      />
    </Svg>
  )
}

export default DirectionIcon
