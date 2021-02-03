import { getPostsWtihTag, IMatterDataProps } from '@/utils/posts';
import { getAllTagPath, ITagPathProps } from '@/utils/tags';

interface IPostDataProps {
  postsData: IMatterDataProps[];
}

export default function Tagging({ postsData }: IPostDataProps) {
  const renderedPosts = postsData.map((post) => <div> {post.title}</div>);
  return <div>{renderedPosts}</div>;
}

export async function getStaticPaths() {
  const paths = getAllTagPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ITagPathProps) {
  const postsData: IMatterDataProps[] = getPostsWtihTag(params.tag);
  return {
    props: {
      postsData,
    },
  };
}
