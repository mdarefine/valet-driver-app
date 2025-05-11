import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function DealsIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.292 11.996L12.498 1.202A2.415 2.415 0 0010.8.5H2.4A2.4 2.4 0 000 2.9v8.4c0 .666.27 1.266.708 1.698l10.8 10.8a2.39 2.39 0 001.692.702c.66 0 1.266-.27 1.698-.702l8.4-8.4A2.415 2.415 0 0024 13.7c0-.666-.27-1.266-.708-1.704zM4.2 6.5c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8S6 3.704 6 4.7s-.804 1.8-1.8 1.8z"
        fill="#002C69"
      />
    </Svg>
  )
}

export default DealsIcon
