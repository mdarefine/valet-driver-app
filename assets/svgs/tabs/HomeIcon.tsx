import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function HomeIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_260_786)">
        <Path
          d="M23.353 10.939l-.002-.002-9.79-9.79A2.194 2.194 0 0012 .5c-.59 0-1.145.23-1.563.647L.652 10.932l-.01.01a2.212 2.212 0 00.004 3.12 2.197 2.197 0 001.534.648h.39v7.204A2.589 2.589 0 005.156 24.5h3.83a.703.703 0 00.704-.703v-5.649c0-.65.529-1.18 1.18-1.18h2.259c.65 0 1.18.53 1.18 1.18v5.649c0 .388.314.703.702.703h3.83a2.589 2.589 0 002.587-2.586V14.71h.361c.59 0 1.145-.23 1.563-.648.86-.86.86-2.261 0-3.123z"
          fill="#002C69"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_260_786">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeIcon
