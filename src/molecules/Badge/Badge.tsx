import { Link } from 'quarks';

import Flex from 'quarks/Flex';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC, ReactNode } from 'react';

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

const colorMap = {
  css: 'danger-600',
  typescript: 'primary-600',
  javascript: 'purple-600',
  gatsby: 'purple-300',
  nextjs: 'common-black',
} as const;

export type BadgeTitles = keyof typeof colorMap;

export const badgeSizeOptions = badgeSizes['normal'];

interface BadgeProps extends FlexProps {
  /**
   * The badge can accept a string, icon, or any ReactNode.
   */
  children?: ReactNode;
  /**
   * The badge can accept a string.
   */
  title?: BadgeTitles;
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
  url?: string | null;
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
  title,
  url,
  ...props
}) => {
  const isIconOnly = variant === 'iconOnly';

  return (
    <Link href={url || ''}>
      <Flex
        cursor={url && 'pointer'}
        fontFamily="secondaryFont"
        textColor={title ? colorMap[title] : textColor}
        alignItems="center"
        borderRadius={isIconOnly ? '50%' : '8px'}
        paddingX={badgeSizes[variant][size].paddingX}
        paddingY={badgeSizes[variant][size].paddingY}
        fontSize={12}
        lineHeight={isIconOnly ? 0 : 20}
        hover={{ filter: url && 'brightness(.92)' }}
        {...props}
      >
        {startIcon && !isIconOnly && (
          <Flex marginRight={4} width={iconSize}>
            {startIcon}
          </Flex>
        )}
        {typeof children === 'string' ? children.toUpperCase() : children || title?.toUpperCase()}
        {endIcon && !isIconOnly && (
          <Flex marginLeft={4} width={iconSize}>
            {endIcon}
          </Flex>
        )}
      </Flex>
    </Link>
  );
};

export default Badge;

Badge.defaultProps = {
  variant: 'normal',
  size: 'md',
  iconSize: '12px',
  backgroundColor: { dark: 'gray-50', light: 'gray-200' },
  textColor: 'purple-900',
  width: 'fit-content',
  fontWeight: 'semiBold',
};
