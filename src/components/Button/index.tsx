import React from 'react';

import {
  ButtonStyle
} from './styles'

interface ButtonProps {
  title?: string
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
  outlined?: true | false
  colorScheme?: 'violet' | 'gray'
  fontSize?: 'small' | 'medium' | 'regular' | 'large' | 'extraLarge'
  setBorderRadius?: 'none' | 'small' | 'regular' | 'medium' | 'large' | 'full'
  children?: React.ReactNode
}

export function SimpleButton({ title, size, outlined, colorScheme, fontSize, setBorderRadius, children }: ButtonProps) {
  return (
    <ButtonStyle
      size={size}
      colorScheme={colorScheme}
      outlined={outlined}
      fontSize={fontSize}
      setBorderRadius={setBorderRadius}

    >
      {title}
      {children}
    </ButtonStyle>
  )
}

SimpleButton.defaultProps = {
  title: 'Button',
  size: 'medium',
  colorScheme: 'gray',
  outlined: true
}