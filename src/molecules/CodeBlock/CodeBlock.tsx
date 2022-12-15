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
      require('prismjs/themes/prism-tomorrow.min.css');
      require('prismjs/components/prism-javascript.min.js');
      require('prismjs/components/prism-typescript.min.js');
      require('prismjs/components/prism-jsx.min.js');
      require('prismjs/components/prism-tsx.min.js');

      Prism.highlightAll();
    });
    // Prism.highlightAll();
  }, []);

  return (
    <StyledPre>
      <StyledCode className={`language-${node.language}`}>{node.code}</StyledCode>
    </StyledPre>
  );
};

export default CodeBlock;
