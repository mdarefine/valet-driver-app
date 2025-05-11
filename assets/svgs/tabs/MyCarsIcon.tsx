import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function MyCarsIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.9 16.593a2.99 2.99 0 00-2.864-2.093h-2.072A2.99 2.99 0 008.1 16.593l-.672 2.12C7.205 19.81 6.256 22.313 8 22.5v1a1 1 0 102 0v-1h4v1a1 1 0 002 0v-1c1.744-.188.8-2.688.568-3.789l-.668-2.118zm-4.936-.093h2.072a1 1 0 01.953.7l.411 1.3H9.6l.414-1.3a1 1 0 01.95-.7zM24 10.262v9.365a5.01 5.01 0 01-3.748 4.841A1.001 1.001 0 0119 23.494V13.5a3 3 0 00-3-3H8a3 3 0 00-3 3v9.994a1 1 0 01-1.252.974A5.01 5.01 0 010 19.628v-9.366a5 5 0 012.2-4.144l7-4.724a5 5 0 015.594 0l7 4.724A5 5 0 0124 10.262z"
        fill="#002C69"
      />
    </Svg>
  )
}

export default MyCarsIcon
