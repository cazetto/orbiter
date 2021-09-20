import React, { FC, ReactNode } from 'react';
import * as Styled from './RocketChatIframe.styled';

interface Props {}

export const RocketChatIframe: FC<Props> = props => {
  const ROCKETCHAT_CLIENT_URL = 'https://open.rocket.chat';
  const ROCKETCHAT_CLIENT_IFRAME_TITLE = 'Rocket.Chat Client';
  const ROCKETCHAT_CLIENT_IFRAME_ID = 'rocket-chat-client-iframe';

  return (
    <Styled.RocketChatIframeTag>
      <iframe
        src={ROCKETCHAT_CLIENT_URL}
        title={ROCKETCHAT_CLIENT_IFRAME_TITLE}
        id={ROCKETCHAT_CLIENT_IFRAME_ID}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
      />
    </Styled.RocketChatIframeTag>
  );
};