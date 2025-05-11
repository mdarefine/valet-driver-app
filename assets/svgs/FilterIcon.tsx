import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function FilterIcon(props: any) {
  return (
    <Svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.75 5.75h12.5v2.5H3.75v-2.5zM0 .75h20v2.5H0V.75zm7.5 10h5v2.5h-5v-2.5z"
        fill="#000"
      />
    </Svg>
  )
}

export default FilterIcon
