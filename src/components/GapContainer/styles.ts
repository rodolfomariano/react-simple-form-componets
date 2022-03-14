import { styled } from "@stitches/react";

export const GapWrap = styled('div', {
  display: 'flex',
  gap: '8px',

  variants: {
    direction: {
      column: {
        display: 'flex',
        flexDirection: 'column',
      },
      row: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        justifyContent: 'center',
        justifyItems: 'center',
      }
    },
    gapSize: {
      small: {
        gap: '8px',
      },
      medium: {
        gap: '16px',
      },
      large: {
        gap: '24px',
      }
    }

  }
})