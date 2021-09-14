import * as Styled from './App.Styled';
import { Sidebar } from '../features/Sidebar/Sidebar';
import { IFrame } from '../features/IFrame/IFrame';

export function App() {
  return (
    <Styled.ApplicationWrapper>
      <Styled.Columns>
        <Sidebar />
        <IFrame />
      </Styled.Columns>
    </Styled.ApplicationWrapper>
  );
}
