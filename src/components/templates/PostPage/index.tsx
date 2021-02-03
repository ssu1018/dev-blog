/**@jsxRuntime classic */
/** @jsx jsx */

import markdownStyle from '@/styles/markdown';
import { IPostDataProps } from '@/utils/posts';
import { jsx, css } from '@emotion/react';
import { SideTagWrapper, PostHeading } from '@/components/organisms';
export interface IPostingProps {
  postData: IPostDataProps;
  tags: string[];
}

export default function PostPageTemplate({
  postData,
  tags: AllTags,
}: IPostingProps) {
  const { title, tags, date } = postData;
  return (
    <div>
      <SideTagWrapper tags={AllTags} />
      <div css={PostStyle}>
        <PostHeading postTitle={title} postTag={tags} date={date} />
        <article>
          <div
            css={markdownStyle}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          {postData.contentHtml}
        </article>
      </div>
    </div>
  );
}

const PostStyle = css`
  width: 768px;
  margin: 5rem auto 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
