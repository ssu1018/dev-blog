/**@jsxRuntime classic */
/** @jsx jsx */

import Head from 'next/head';
import markdownStyle from '../../../styles/markdown';
import {
  getAllPostIds,
  getPostData,
  PostIdsType,
  PostDataType,
} from '@/utils/posts';
import { jsx, css } from '@emotion/react';

interface PostingProps {
  postData: PostDataType;
}

export default function Posting({ postData }: PostingProps) {
  return (
    <div css={postContainerStyle}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div
          css={markdownStyle}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        {postData.contentHtml}
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostIdsType) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const postContainerStyle = css`
  width: 500px;
`;
