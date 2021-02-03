import {
  getPostData,
  getCategoryPostsPath,
  IPostPathProps,
  IPostDataProps,
} from '@/utils/posts';
import { getCategoryTags } from '@/utils/tags';

import { PostPageTemplate, IPostingProps } from '@/components/templates';

const TECH = 'TECH';

export default function Posting({ postData, tags }: IPostingProps) {
  return <PostPageTemplate postData={postData} tags={tags} />;
}

export async function getStaticPaths() {
  const paths = getCategoryPostsPath(TECH);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: IPostPathProps) {
  const postData: IPostDataProps = await getPostData(TECH, params.slug);
  const tags: string[] = getCategoryTags(TECH);
  return {
    props: {
      postData,
      tags,
    },
  };
}
