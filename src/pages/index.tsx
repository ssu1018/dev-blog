import { getAllPosts, IMatterDataProps, getCategoryPosts } from '@/utils/posts';

import { Home as HomeTemplate } from '@/components/templates';
import { categories, TCategoryName } from '@/constants/categories';

export type IFeedPostsDataProps = {
  [key in TCategoryName]: IMatterDataProps[];
};

export interface IHomeProps {
  allPostData: IMatterDataProps[];
  feedPostsData: IFeedPostsDataProps;
}

export default function Home({ allPostData, feedPostsData }: IHomeProps) {
  return (
    <HomeTemplate feedPostsData={feedPostsData} allPostData={allPostData} />
  );
}

export async function getStaticProps() {
  const allPostData = getAllPosts();
  const feedPostsData: IFeedPostsDataProps = categories.reduce(
    (x, category) => ({
      ...x,
      [category.info.name]: getCategoryPosts(category.info.name),
    }),
    {}
  ) as IFeedPostsDataProps;

  return {
    props: {
      allPostData,
      feedPostsData,
    },
  };
}
