import {
  getPostData,
  getCategoryPostsPath,
  IPostPathProps,
  IPostDataProps,
} from '@/utils/posts';
import { getCategoryTags } from '@/utils/tags';

import { PostPageTemplate, IPostingProps } from '@/components/templates';

const LIFE = 'LIFE';

export default function Life({ postData, tags }: IPostingProps) {
  return <PostPageTemplate postData={postData} tags={tags} />;
}

export async function getStaticPaths() {
  const paths = getCategoryPostsPath(LIFE);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: IPostPathProps) {
  const postData: IPostDataProps = await getPostData(LIFE, params.slug);
  const tags: string[] = getCategoryTags(LIFE);
  return {
    props: {
      postData,
      tags,
    },
  };
}
