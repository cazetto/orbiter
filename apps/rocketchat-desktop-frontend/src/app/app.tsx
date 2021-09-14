import * as Styled from './App.Styled';
import { Sidebar } from '../features/sidebar/Sidebar';
import { WebviewPrototype } from '../features/WebviewPrototype/WebviewPrototype';

export function App() {
  return (
    <Styled.ApplicationWrapper>
      <Styled.Columns>
        <Sidebar />
        <WebviewPrototype />
      </Styled.Columns>
    </Styled.ApplicationWrapper>
  );
}
