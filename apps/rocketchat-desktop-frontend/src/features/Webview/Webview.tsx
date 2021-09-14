import React, { FC } from 'react';
import * as Styled from './Webview.styled';

export const Webview: FC = () => {  
  const ROCKET_CHAT_CLIENT_URL = 'https://open.rocket.chat';
  const ROCKET_CHAT_CLIENT_WEBVIEW_ID = 'rocket-chat-client-webview';
  return (
    <Styled.Wrapper>
      <Styled.Webview
      id={ROCKET_CHAT_CLIENT_WEBVIEW_ID}
      src={ROCKET_CHAT_CLIENT_URL}
      ></Styled.Webview>
    </Styled.Wrapper>
  );  
};
