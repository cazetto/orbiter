import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideBar } from '../components/SideBar/SideBar';
import { RocketChatIframe } from '../components/RocketChatIframe/RocketChatIframe';

function App() {
  return (
    <Layout>
      <SideBar>asd</SideBar>
      <RocketChatIframe />
    </Layout>
  );
}

export default App;