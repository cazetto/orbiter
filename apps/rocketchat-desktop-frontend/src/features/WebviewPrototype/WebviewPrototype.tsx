import React, { FC } from 'react';
import * as Styled from './WebviewPrototype.Styled';

export const WebviewPrototype: FC = () => {  
  
  return (
    <Styled.Wrapper>
      <webview
      id="webview"
      src="https://www.github.com"
      data-home="https://www.github.com"
      ></webview>
    </Styled.Wrapper>
  );  
};
