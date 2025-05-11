// components/ui/flex-grid.tsx
import { View, ViewProps } from 'react-native'
import React, { ReactNode, Children, isValidElement, cloneElement } from 'react'
import cn from '@/lib/utils'

type FlexGridProps = {
  children: ReactNode
  className?: string
  columns?: number
} & ViewProps

type ColProps = {
  className?: string
  children: ReactNode
} & ViewProps

type RowProps = {
  className?: string
  children: ReactNode
} & ViewProps

const FlexGrid = ({
  children,
  className,
  columns = 3,
  ...props
}: FlexGridProps) => {
  const childrenArray = Children.toArray(children)

  if (
    childrenArray.length > 0 &&
    isValidElement(childrenArray[0]) &&
    childrenArray[0].type === Row
  ) {
    return (
      <View className={cn('mx-auto', className)} {...props}>
        {children}
      </View>
    )
  }

  const rows = []
  for (let i = 0; i < childrenArray.length; i += columns) {
    const rowChildren = childrenArray.slice(i, i + columns)

    const isLastRow = i + columns >= childrenArray.length
    const emptyColsNeeded = isLastRow ? columns - rowChildren.length : 0

    const rowContent = [...rowChildren]

    for (let j = 0; j < emptyColsNeeded; j++) {
      rowContent.push(<></>)
    }

    rows.push(
      <Row key={`row-${i}`} className="mb-4">
        {rowContent.map((child, index) => {
          if (
            child &&
            typeof child === 'object' &&
            'type' in child &&
            child.type === React.Fragment
          ) {
            return (
              <Col key={`empty-col-${i}-${index}`} className="flex-1 mx-1">
                <View style={{ width: 0, height: 0 }} />
              </Col>
            )
          }

          if (isValidElement(child) && child.type === Col) {
            return cloneElement(child, { key: `col-${i}-${index}` })
          }

          return (
            <Col key={`col-${i}-${index}`} className="flex-1 mx-1">
              {child}
            </Col>
          )
        })}
      </Row>
    )
  }

  return (
    <View className={cn('mx-auto', className)} {...props}>
      {rows}
    </View>
  )
}

const Row = ({ children, className, ...props }: RowProps) => {
  return (
    <View className={cn('flex-row', className)} {...props}>
      {children}
    </View>
  )
}

const Col = ({ children, className, ...props }: ColProps) => {
  return (
    <View className={cn(className)} {...props}>
      {children}
    </View>
  )
}

FlexGrid.Row = Row
FlexGrid.Col = Col

export { FlexGrid }
