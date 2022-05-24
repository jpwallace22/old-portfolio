import { FC, ReactNode } from 'react';

import Flex from 'quarks/Flex';
import { FlexProps } from 'quarks/interpolations/flex';

const badgeSizes = {
  normal: {
    sm: {
      paddingX: 8,
      paddingY: 0,
    },
    md: {
      paddingX: 12,
      paddingY: 4,
    },
    lg: {
      paddingX: 16,
      paddingY: 8,
    },
  },
  iconOnly: {
    sm: {
      paddingX: 4,
      paddingY: 4,
    },
    md: {
      paddingX: 8,
      paddingY: 8,
    },
    lg: {
      paddingX: 12,
      paddingY: 12,
    },
  },
} as const;

export const badgeSizeOptions = badgeSizes['normal'];

interface BadgeProps extends FlexProps {
  /**
   * The badge can accept a string, icon, or any ReactNode.
   */
  children: ReactNode;
  /**
   * This displays the variant of badge you want.
   */
  variant?: 'iconOnly' | 'normal';
  /**
   * Selects the size of the badge, set mostly using padding
   */
  size?: keyof typeof badgeSizeOptions;
  /**
   * Choose the horizontal size of the icon, with height set automatically. Takes any valid CSS width.
   */
  iconSize?: string;
  /**
   * Choose an icon to appear on the left of the normal badge variant, before text. Takes any ReactNode.
   */
  startIcon?: ReactNode;
  /**
   * Choose an icon to appear on the right of the normal badge variant, after text. Takes any ReactNode.
   */
  endIcon?: ReactNode;
}

const Badge: FC<BadgeProps> = ({
  children,
  startIcon,
  endIcon,
  size = 'md',
  iconSize,
  variant = 'normal',
  textColor,
  ...props
}) => {
  const isIconOnly = variant === 'iconOnly';

  return (
    <Flex
      textColor={textColor}
      alignItems="center"
      borderRadius={isIconOnly ? '50%' : '4px'}
      paddingX={badgeSizes[variant][size].paddingX}
      paddingY={badgeSizes[variant][size].paddingY}
      fontSize={12}
      lineHeight={isIconOnly ? 0 : 20}
      {...props}
    >
      {startIcon && !isIconOnly && (
        <Flex marginRight={4} width={iconSize}>
          {startIcon}
        </Flex>
      )}
      {children}
      {endIcon && !isIconOnly && (
        <Flex marginLeft={4} width={iconSize}>
          {endIcon}
        </Flex>
      )}
    </Flex>
  );
};

export default Badge;

Badge.defaultProps = {
  variant: 'normal',
  size: 'sm',
  iconSize: '12px',
  backgroundColor: 'primary-50',
  textColor: 'primary-900',
  width: 'fit-content',
  fontWeight: 'semiBold',
};
