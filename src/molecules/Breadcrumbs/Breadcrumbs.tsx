import { TiChevronRight } from 'react-icons/ti';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import type { FC } from 'react';

interface BreadcrumbsProps extends BasicProps {
  breadcrumbs: {
    label: string;
    link: string;
  }[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const breadcrumbsLength = breadcrumbs.length;

  return (
    <Flex flexDirection="row" flexWrap="nowrap" alignItems="center" gap="16px">
      {breadcrumbs &&
        breadcrumbs.map(
          (item, idx) =>
            item?.label && (
              <>
                <Link
                  key={item?.label}
                  href={item?.link || ''}
                  fontSize={14}
                  textDecoration="none"
                  textColor={idx < breadcrumbsLength - 1 ? 'gray-500' : 'primary-600'}
                  hover={{ textDecoration: 'underline' }}
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Text fontWeight="bold">{item?.label}</Text>
                  </Flex>
                </Link>
                {idx < breadcrumbsLength - 1 && <TiChevronRight />}
              </>
            ),
        )}
    </Flex>
  );
};

export default Breadcrumbs;
