import * as Styled from './App.Styled';
import { Sidebar } from '../features/Sidebar/Sidebar';
import { Webview } from '../features/Webview/Webview';

export function App() {
  return (
    <Styled.ApplicationWrapper>
      <Styled.Columns>
        <Sidebar />
        <Webview />
      </Styled.Columns>
    </Styled.ApplicationWrapper>
  );
}
