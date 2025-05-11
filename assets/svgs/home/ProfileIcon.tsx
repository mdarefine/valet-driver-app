import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ProfileIcon(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 9.043a4.91 4.91 0 002.715-.794 1.501 1.501 0 011.856.158 7.036 7.036 0 012.23 5.17v.844c0 .873-.693 1.579-1.545 1.579H2.744c-.852 0-1.544-.706-1.544-1.579v-.844A7.015 7.015 0 013.427 8.41a1.502 1.502 0 011.856-.158c.756.497 1.695.791 2.717.791z"
        fill="#EEE"
      />
      <Path d="M8 8a4 4 0 100-8 4 4 0 000 8z" fill="#EEE" />
    </Svg>
  )
}

export default ProfileIcon
