import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CarIcon(props: any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        fill="#F3E8FF"
      />
      <Path
        d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z"
        stroke="#E5E7EB"
      />
      <Path d="M12 12h16v16H12V12z" stroke="#E5E7EB" />
      <Path d="M12 12h16v16H12V12z" stroke="#E5E7EB" />
      <Path
        d="M16.225 15.669L15.409 18h9.182l-.816-2.331a1 1 0 00-.944-.669H17.17a1 1 0 00-.944.669zm-2.988 2.481l1.1-3.14A3 3 0 0117.17 13h5.662a3 3 0 012.832 2.01l1.1 3.14A2.004 2.004 0 0128 20v6c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1.5H15V26c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-6c0-.834.512-1.55 1.238-1.85zM16 21a1 1 0 10-2 0 1 1 0 002 0zm9 1a1 1 0 100-2 1 1 0 000 2z"
        fill="#9333EA"
      />
    </Svg>
  )
}

export default CarIcon
