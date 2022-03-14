
import { styled } from '@stitches/react';

export const ButtonStyle = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '8px',
  padding: '8px 16px',
  cursor: 'pointer',
  border: 'none',
  transition: '300ms',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: 'lightgray',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'opacity(25%)'
  },

  variants: {
    colorScheme: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
    size: {
      small: {
        fontSize: '10px',
        padding: '6px 12px',
      },
      medium: {
        fontSize: '12px',
        padding: '8px 16px'
      },
      large: {
        fontSize: '16px',
        padding: '10px 18px'
      },
      fullWidth: {
        width: '100%',
        padding: '8px 16px'
      }
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid lightgray',
        color: '#2A2A2A'
      }
    },
    fontSize: {
      small: {
        fontSize: '10px',
      },
      medium: {
        fontSize: '12px',
      },
      regular: {
        fontSize: '16px',
      },
      large: {
        fontSize: '20px',
      },
      extraLarge: {
        fontSize: '24px',
      },
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

  },
  compoundVariants: [
    {
      colorScheme: 'violet',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid blueviolet',
        color: 'blueviolet',

        '&:hover': {
          color: 'white',
        },
      },
    },
    {
      colorScheme: 'gray',
      outlined: true,
      css: {
        color: 'gray',
        borderColor: 'lightgray',
        '&:hover': {
          color: 'black',
        },
      },
    },
  ],


});