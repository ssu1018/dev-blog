/**@jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import hljs from 'highlight.js/lib/core';

import { IPostDataProps } from '@/utils/posts';
import markdownStyle from '@/styles/markdown';
import { SideTagWrapper, PostHeading } from '@/components/organisms';
import mq from '@/constants/mediaQuery';

export interface IPostingProps {
  postData: IPostDataProps;
  tags: string[];
}

const CodeBlock = ({ language, value }: { language: string; value: any }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function PostPageTemplate({
  postData,
  tags: AllTags,
}: IPostingProps) {
  const { title, tags, date } = postData;

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <div>
      <SideTagWrapper tags={AllTags} />
      <div css={PostStyle}>
        <PostHeading postTitle={title} postTag={tags} date={date} />
        <ReactMarkdown
          css={markdownStyle}
          escapeHtml={false}
          source={postData.contentHtml}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </div>
  );
}

const PostStyle = css`
  width: 700px;
  box-sizing: border-box;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mq[2]} {
    margin: 5rem 10% 0 10%;
  }
  ${mq[1]} {
    width: 600px;
  }
  ${mq[3]} {
    width: 100%;
    padding: 20%;
    margin: 0;
  }
  ${mq[0]} {
    width: 100%;
    padding: 5%;
    margin: 0;
  }
`;
