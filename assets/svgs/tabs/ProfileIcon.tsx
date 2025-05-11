import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function ProfileIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_260_915)" fill="#002C69">
        <Path d="M12 14.065c1.529 0 2.941-.442 4.072-1.192a2.252 2.252 0 012.784.238c2.135 1.983 3.349 4.797 3.344 7.754v1.267c0 1.31-1.038 2.368-2.316 2.368H4.116c-1.278 0-2.316-1.058-2.316-2.368v-1.267c-.01-2.952 1.204-5.77 3.34-7.75a2.252 2.252 0 012.784-.237c1.135.745 2.543 1.187 4.076 1.187z" />
        <Path d="M12 12.5a6 6 0 100-12 6 6 0 000 12z" />
      </G>
      <Defs>
        <ClipPath id="clip0_260_915">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ProfileIcon
