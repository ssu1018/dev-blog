/**@jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>Copyright © Jeongheesu All rights reserved</FooterItem>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FooterItem = styled.div`
  ${(props) => ({ ...props.theme.typography.caption })};
  padding: 2px 4px;
  margin: 0 2rem;
`;

export default Footer;
