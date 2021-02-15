import styled from '@emotion/styled';

export default function resume() {
  return (
    <>
      <InfoWrapper id="basic-info">
        <InfoBox> 정희수 연락처 : 010-3777-3751 </InfoBox>
        <InfoBox>이메일 : oung1002@snu.ac.kr</InfoBox>
        <InfoBox>지원 직군 : 프론트엔드(산업기능요원 보충역)</InfoBox>
        <InfoBox>
          학력 사항 : 2016.03~2019.02 : 서울 고등학교
          <br />
          2019.3~ 서울대학교 전기정보공학부 재학중
        </InfoBox>
      </InfoWrapper>
      <InfoWrapper id="ability">
        <InfoBox>
          배움에 대한 강한 욕구가 있습니다. 새로운 것에 매우 쉽게 도전하고,
          빠르게 적응합니다.
        </InfoBox>
        <InfoBox>
          책임감이 높습니다. 어떤 일을 맡으면 해냅니다. 이를 위해서 끊임없이
          노력합니다.
        </InfoBox>
        <InfoBox>
          about: 백지부터 서비스를 만들어 나가는 것을 좋아합니다. 그만큼
          책임감이 높고 좋습니다. 배움에 대한 강한 욕구가 있습니다. 항상
          공부하고, 새로운 것에 쉽게 도전합니다. 그만큼 빠르게 적응합니다. 어떤
          일을 맡으면 책임감을 가지고 완수합니다. 그만큼 끊임없이 노력합니다. 저
          자신에 대해서 피드백을 합니다. 저는 저의 열정에 대해서 자신감이
          있습니다. 어떤 일에 몰두하면 밥 먹는 것도 거를 만큼 집중합니다.
          명료하고, 간결한 코드를 좋아합니다. 더 나은 구조를 위해 노력합니다.
          주도적으로 개발하는 것을 좋아합니다. 스스로 더 발전시킬 부분을 찾고
          고치는 편입니다.
        </InfoBox>
      </InfoWrapper>
      <InfoWrapper id="dev-language">
        front: javascript : 기본적인 문법을 모두 숙지하고 있으며, 개발시
        자유자재로 사용 가능합니다. typescript : 개발할 때 막히는 부분이 종종
        있으나, 공식 문서를 참조하여 금방 해결합니다. 개발하는데 불편함은
        없습니다. 정적 타이핑에서 오는 만족감이 높습니다.React,React-Native,
        redux,emotion, storybook,next-js ,C++ : 기본적인 문법을 모두 숙지하고
        있으며, 개발시 자유자재로 사용 가능합니다. back: nest.js
        <br /> devOps: AWS S3, Cloudfront, Route53, CircleCI
        <br /> Cooperation: slack, confluence, trello, notion
      </InfoWrapper>

      <InfoWrapper></InfoWrapper>
      <InfoWrapper></InfoWrapper>
    </>
  );
}

const InfoBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const InfoWrapper = styled.section`
  box-sizing: border-box;
  width: 50%;
`;
