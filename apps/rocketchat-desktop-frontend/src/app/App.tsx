import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideBar } from '../components/SideBar/SideBar';
import { RocketChatIframe } from '../components/RocketChatIframe/RocketChatIframe';

function App() {
  const ROCKET_CHAT_CLIENT_URL = 'https://open.rocket.chat';
  const ROCKET_CHAT_CLIENT_IFRAME_ID = 'rocket-chat-client-iframe';

  return (
    <Layout>
      <SideBar>asd</SideBar>
      <RocketChatIframe />
    </Layout>
  );
}

export default App;