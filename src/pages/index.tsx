import {
  getAllPosts,
  IMatterWithCategory,
  getCategoryPosts,
} from '@/utils/posts';

import { Home as HomeTemplate } from '@/components/templates';
import {
  categories,
  TCategoryName,
  categoryName,
} from '@/constants/categories';

export type IFeedPostsDataProps = {
  [key in TCategoryName]: IMatterWithCategory[];
};

export interface IHomeProps {
  allPostData: IMatterWithCategory[];
}

export default function Home({ allPostData }: IHomeProps) {
  return <HomeTemplate allPostData={allPostData} />;
}

export async function getStaticProps() {
  const allPostData = getAllPosts();

  return {
    props: {
      allPostData,
    },
  };
}
