import React, { FC, ReactNode } from 'react';
import * as Styled from './Layout.styled';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { children } = props;
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
};