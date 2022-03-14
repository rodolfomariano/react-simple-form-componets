
import { ReactNode } from 'react';

import {
  GapWrap
} from './styles'

interface GapContainerProps {
  children: ReactNode
  direction?: 'row' | 'column'
  gapSize?: 'small' | 'medium' | 'large'
}

export function GapContainer({ children, direction, gapSize }: GapContainerProps) {
  return (
    <GapWrap
      direction={direction}
      gapSize={gapSize}
    >
      {children}
    </GapWrap>
  )
}

GapContainer.defaultProps = {
  direction: 'column',
  gapSize: 'small',
}