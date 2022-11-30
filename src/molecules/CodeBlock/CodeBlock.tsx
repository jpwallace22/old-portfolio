import { Code } from 'datocms-structured-text-utils';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-tomorrow.min.css';
import React, { FC, useEffect } from 'react';

import { StyledCode, StyledPre } from 'molecules/CodeBlock/codeBlock.styles';

interface ICodeBlock {
  node: Code;
}

const CodeBlock: FC<ICodeBlock> = ({ node }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <StyledPre>
      <StyledCode className={`language-${node.language}`}>{node.code}</StyledCode>
    </StyledPre>
  );
};

export default CodeBlock;
