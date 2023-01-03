import type { GetColorDefinition } from 'atoms/colors/colors';
import type { PageGeneratorModelComponentsField } from 'graphql/types.gen';

type GetSectionInfo<T = PageGeneratorModelComponentsField> = (component: T) => {
  sectionId?: string;
  backgroundColor?: GetColorDefinition;
};

const getSectionInfo: GetSectionInfo = component => {
  const sectionId = 'sectionId' in component ? component.sectionId || '' : undefined;
  const backgroundColor =
    'sectionBackgroundColor' in component ? (component.sectionBackgroundColor as GetColorDefinition) : undefined;

  return {
    sectionId,
    backgroundColor,
  };
};

export default getSectionInfo;
