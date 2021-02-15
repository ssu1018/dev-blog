import { getCategoryPosts, IMatterWithCategory } from '@/utils/posts';
import { categoryName } from '@/constants/categories';
import { CategoryPostsPage } from '@/components/templates';

interface ITechHomeProps {
  postsData: IMatterWithCategory[];
}

export default function Algorithm({ postsData }: ITechHomeProps) {
  // return <CategoryPageTemplate postsData={postsData} />;
  return <CategoryPostsPage allPostData={postsData} />;
}

export async function getStaticProps() {
  const postsData: IMatterWithCategory[] = getCategoryPosts(
    categoryName.AlGORITHM
  );
  return {
    props: {
      postsData,
    },
  };
}
