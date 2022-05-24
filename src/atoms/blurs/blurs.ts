const blur = {
  background: {
    light: 'rgba(255, 255, 255, 0.6)',
    dark: 'rgba(52, 64, 84, 0.6)',
  },
  sizing: {
    sm: 'blur(8px)',
    md: 'blur(16px)',
    lg: 'blur(24px)',
    xl: 'blur(40px)',
  },
} as const;

export type BlurDefinition = typeof blur;
export type BlurSizes = keyof BlurDefinition['sizing'];

export default blur;
