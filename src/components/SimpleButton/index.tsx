import React, { ButtonHTMLAttributes } from 'react';

import {
  ButtonStyle
} from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
  outlined?: true | false
  colorScheme?: 'violet' | 'gray'
  fontSize?: 'small' | 'medium' | 'regular' | 'large' | 'extraLarge'
  setBorderRadius?: 'none' | 'small' | 'regular' | 'medium' | 'large' | 'full'
  children?: React.ReactNode
}

export function SimpleButton({ title, size, outlined, colorScheme, fontSize, setBorderRadius, children, ...rest }: ButtonProps) {
  return (
    <ButtonStyle
      size={size}
      colorScheme={colorScheme}
      outlined={outlined}
      fontSize={fontSize}
      setBorderRadius={setBorderRadius}
      {...rest}
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
  outlined: false
}