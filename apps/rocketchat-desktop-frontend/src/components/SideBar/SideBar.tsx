import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SideBar.styled';

interface Props {
  children?: ReactNode;
}

export const SideBar: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Styled.SideBarWrapper>
      {children}
    </Styled.SideBarWrapper>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
}