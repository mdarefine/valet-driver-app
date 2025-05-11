import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function DealsOutlineIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_260_789)" fill="#989898">
        <Path d="M12.577 1.305A2.755 2.755 0 0010.565.5L2.872.697A2.744 2.744 0 00.197 3.373L0 11.065a2.758 2.758 0 00.803 2.012l10.62 10.62a2.749 2.749 0 003.883 0l7.889-7.89a2.746 2.746 0 000-3.883l-10.62-10.62zm9.842 13.726l-7.889 7.888a1.65 1.65 0 01-2.33 0L1.581 12.3a1.655 1.655 0 01-.482-1.207L1.295 3.4A1.647 1.647 0 012.9 1.795l7.693-.196h.041c.437 0 .856.174 1.166.483L22.42 12.7a1.65 1.65 0 010 2.33z" />
        <Path d="M6.6 4.1a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm0 3.803a1.403 1.403 0 110-2.806 1.403 1.403 0 010 2.806z" />
      </G>
      <Defs>
        <ClipPath id="clip0_260_789">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DealsOutlineIcon
