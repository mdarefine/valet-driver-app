import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ShopIcon(props: any) {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.5 4.75V3.5a.53.53 0 00-.055-.22L14.225.83A1.5 1.5 0 0012.88 0H3.12a1.5 1.5 0 00-1.345.83L.555 3.275A.53.53 0 00.5 3.5v1.25a2.255 2.255 0 001 1.87V14H1a.5.5 0 000 1h14a.5.5 0 000-1h-.5V6.62a2.255 2.255 0 001-1.87zm-1 0a1.25 1.25 0 01-2.5 0V4h2.5v.75zm-13 0V4H4v.75a1.25 1.25 0 01-2.5 0zM5 4h2.5v.75a1.25 1.25 0 01-2.5 0V4zm3.5 0H11v.75a1.25 1.25 0 01-2.5 0V4zM2.67 1.275A.5.5 0 013.12 1h9.76a.5.5 0 01.45.275L14.19 3H1.81l.86-1.725zM9.5 14h-3v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3zm4 0h-3v-3A1.5 1.5 0 009 9.5H7A1.5 1.5 0 005.5 11v3h-3V7c.083.013.166.022.25.025a2.25 2.25 0 001.75-.86 2.25 2.25 0 003.5 0 2.25 2.25 0 003.5 0A2.25 2.25 0 0013.25 7c.083.005.167.005.25 0v7z"
        fill="#002C69"
      />
    </Svg>
  )
}

export default ShopIcon
