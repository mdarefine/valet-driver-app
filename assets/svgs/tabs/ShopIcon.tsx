import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function ShopIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_5536_55189)">
        <Path
          d="M21.802.5L24 7v.5c0 2.206-1.794 4-4 4h-1a3.99 3.99 0 01-3-1.357 3.99 3.99 0 01-3 1.357h-2c-1.2 0-2.266-.542-3-1.382A3.975 3.975 0 015 11.5H4c-2.206 0-4-1.794-4-4l.024-.717L2.198.5H7v5h2v-5h6v5h2v-5h4.802zm-6.789 21H8.99l-.846-1H0v1a3 3 0 003 3h18a3 3 0 003-3v-1h-8.14l-.846 1h-.001zm-5.085-2h4.157l.846-1h7.068v-5.35a5.95 5.95 0 01-2 .35h-1a5.997 5.997 0 01-3-.806 5.997 5.997 0 01-3 .806h-2a5.936 5.936 0 01-3-.818 5.936 5.936 0 01-3 .818h-1a5.976 5.976 0 01-2-.35v5.35h7.082l.846 1h.001z"
          fill="#002C69"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5536_55189">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ShopIcon
