import { styled } from '@stitches/react';

export const InputContainer = styled('div', {
  width: '300px',
  color: '#4f4f4f',
  borderRadius: '8px',
  fontSize: '16px',

  backgroundColor: '#F1F1F1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&:focus-within': {
    outline: '2px solid violet',
  },

  variants: {
    inputSize: {
      default: {
        width: '300px',
      },
      full: {
        width: '100%',
      }
    },
    setBorderRadius: {
      none: {
        borderRadius: '0px'
      },
      small: {
        borderRadius: '4px'
      },
      regular: {
        borderRadius: '8px'
      },
      medium: {
        borderRadius: '12px'
      },
      large: {
        borderRadius: '16px'
      },
      full: {
        borderRadius: '50px'
      }
    }
  }
})

export const LeftIconContainer = styled('div', {
  width: '40px',
  height: '30px',
  borderRadius: 'inherit',
  color: '#8f8f8f',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Input = styled('input', {
  flex: '1',
  color: 'inherit',
  fontSize: 'inherit',
  paddingLeft: '8px',

  background: 'transparent',
  border: 'none',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    fontSize: '12px',
    paddingLeft: '8px',
  }
})

export const RightIconContainer = styled('button', {
  width: '40px',
  height: '30px',
  marginLeft: '8px',
  // color: 'inherit',
  fontSize: 'inherit',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: '300ms',
  padding: '0',
  borderRadius: 'inherit',
  color: '#8f8f8f',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})