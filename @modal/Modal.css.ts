import { atoms, media, ease, vars } from '@zoralabs/zord'
import { keyframes, style } from '@vanilla-extract/css'

const MODAL_BACKDROP_LAYER = 2000

export const overlay = style([
  {
    background: 'rgba(0, 0, 0, 0.4)',
    inset: 0,
    placeItems: 'center',
    zIndex: MODAL_BACKDROP_LAYER,
  },
  atoms({ position: 'fixed', display: 'grid' }),
])

export const content = style([
  {
    width: 'calc(100vw - 30px)',
    zIndex: MODAL_BACKDROP_LAYER + 1,
    selectors: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
  atoms({ position: 'fixed' }),
])

export const background = style([
  {
    borderRadius: 'normal',
    maxHeight: 'calc(100vh - 30px)',
    background: 'white',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  atoms({ 
    overflowY: 'auto',
    width: '100%',
  }),
])

export const customContent = style([
  {
    maxWidth: 500,
  },
])

export const customBackground = style([
  {
    background: vars.color.background.primary,
    borderRadius: 40,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    animation: `0.3s cubic-bezier(0.65, 0, 0.35, 1), ${keyframes({
      '0%': { opacity: 0, transform: 'scale(0.95)' },
      '100%': { opacity: 1, transform: 'scale(1)' },
    })}`,
  },
  atoms({
    overflowY: 'scroll',
  }),
])

export const close = style([
  {
    border: 'none',
    background: 'none',
  },
  atoms({
    position: 'absolute',
    top: 'x0',
    right: 'x0',
    p: 'x3',
    cursor: 'pointer',
  }),
])
