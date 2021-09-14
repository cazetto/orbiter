import React, { FC } from 'react';
import * as Styled from './Webview.styled';

export const Webview: FC = () => {  
  const ROCKET_CHAT_CLIENT_URL = 'https://open.rocket.chat';
  
  return (
    <Styled.Wrapper>
      <Styled.Webview
      id="rocket-chat-client-webview"
      src={ROCKET_CHAT_CLIENT_URL}
      ></Styled.Webview>
    </Styled.Wrapper>
  );  
};
