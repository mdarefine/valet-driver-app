import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function SearchIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_464_7053)">
        <Path
          d="M19.81 18.912l-5.163-5.081a8.168 8.168 0 002.183-5.55C16.83 3.707 13.062 0 8.415 0 3.768 0 0 3.707 0 8.28c0 4.574 3.768 8.281 8.415 8.281 2.008 0 3.85-.694 5.296-1.849l5.184 5.101a.654.654 0 00.915 0 .63.63 0 000-.901zM8.416 15.287c-3.932 0-7.12-3.137-7.12-7.006 0-3.87 3.188-7.007 7.12-7.007s7.12 3.137 7.12 7.007c0 3.87-3.188 7.006-7.12 7.006z"
          fill="#757575"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_464_7053">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SearchIcon
