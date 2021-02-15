import { getCategoryPosts, IMatterWithCategory } from '@/utils/posts';
import { categoryName } from '@/constants/categories';
import { CategoryPostsPage } from '@/components/templates';

interface ITechHomeProps {
  postsData: IMatterWithCategory[];
}

export default function Tech({ postsData }: ITechHomeProps) {
  return <CategoryPostsPage allPostData={postsData} />;
}

export async function getStaticProps() {
  const postsData: IMatterWithCategory[] = getCategoryPosts(categoryName.TECH);
  return {
    props: {
      postsData,
    },
  };
}
