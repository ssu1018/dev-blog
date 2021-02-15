import {
  getPostData,
  getCategoryPostsPath,
  IPostPathProps,
  IPostDataProps,
} from '@/utils/posts';
import { getCategoryTags } from '@/utils/tags';

import { PostPageTemplate, IPostingProps } from '@/components/templates';

const ALGO = 'ALGORITHM';

export default function Posting({ postData, tags }: IPostingProps) {
  return <PostPageTemplate postData={postData} tags={tags} />;
}

export async function getStaticPaths() {
  const paths = getCategoryPostsPath(ALGO);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: IPostPathProps) {
  const postData: IPostDataProps = await getPostData(ALGO, params.slug);
  const tags: string[] = getCategoryTags(ALGO);
  return {
    props: {
      postData,
      tags,
    },
  };
}
