import React, { FC } from 'react';
import * as Styled from './IFrame.styled';

export const IFrame: FC = () => {  
  const ROCKET_CHAT_CLIENT_URL = 'https://open.rocket.chat';
  const ROCKET_CHAT_CLIENT_WEBVIEW_ID = 'rocket-chat-client-webview';
  return (
    <Styled.Wrapper>
      <Styled.IFrame
      id={ROCKET_CHAT_CLIENT_WEBVIEW_ID}
      src={ROCKET_CHAT_CLIENT_URL}
      ></Styled.IFrame>
    </Styled.Wrapper>
  );  
};
