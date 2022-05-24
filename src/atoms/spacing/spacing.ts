const spacing = {
  0: '0',
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  20: '1.25rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  64: '4rem',
  80: '5rem',
  96: '6rem',
  128: '8rem',
  160: '10rem',
  192: '12rem',
  224: '14rem',
  256: '16rem',
} as const;

export const margin = {
  ...spacing,
  auto: 'auto',
} as const;

export const padding = {
  ...spacing,
} as const;

export type MarginDefinition = keyof typeof margin;
export type PaddingDefinition = keyof typeof padding;
