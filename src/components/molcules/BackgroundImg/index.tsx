import styled from '@emotion/styled';
import { ReactChild } from 'react';

interface bgdImgProps {
  children: ReactChild | ReactChild[];
}

const BackgroundImgBox = styled.div`
  background-image: url('./assets/background-forest.jpg');
  width: 100%;
  height: 570px;
  background-size: 100% 100%;
  z-index: 1;
`;

const BlurBox = styled.div`
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: brightness(1.1) blur(20px);
  backdrop-filter: grayscale(0.8);
`;

export default function BackgroundImg({ children }: bgdImgProps) {
  return (
    <BackgroundImgBox>
      <BlurBox>{children}</BlurBox>
    </BackgroundImgBox>
  );
}
