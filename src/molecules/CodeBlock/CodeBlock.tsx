import React, { useEffect } from 'react';

import { StyledCode, StyledPre } from 'molecules/CodeBlock/codeBlock.styles';

import type { Code } from 'datocms-structured-text-utils';
import type { FC } from 'react';

interface ICodeBlock {
  node: Code;
}

const CodeBlock: FC<ICodeBlock> = ({ node }) => {
  useEffect(() => {
    import('prismjs').then(Prism => {
      // @ts-expect-error test
      import('prismjs/themes/prism-tomorrow.min.css');
      Prism.highlightAll();
    });
  }, []);

  return (
    <StyledPre>
      <StyledCode className={`language-${node.language}`}>{node.code}</StyledCode>
    </StyledPre>
  );
};

export default CodeBlock;
