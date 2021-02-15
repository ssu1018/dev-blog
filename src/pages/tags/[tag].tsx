import { getPostsWtihTag, IMatterWithCategory } from '@/utils/posts';
import { getAllTagPath, ITagPathProps } from '@/utils/tags';
import { Text } from '@/components/atoms';
import { PostPreview } from '@/components/organisms';
import { Home as HomeTemplate } from '@/components/templates';
interface IPostDataProps {
  postsData: IMatterWithCategory[];
  tag: string;
}

export default function Tagging({ postsData, tag }: IPostDataProps) {
  const renderedPosts = postsData.map((post) => {
    const { title, description, tags, category, slug } = post;
    const link = `/${category}/${slug}`;
    return (
      <PostPreview
        title={title}
        description={description}
        tags={tags}
        link={link}
        key={slug}
      />
    );
  });
  return (
    <div>
      <Text typo="title">{tag}</Text>
      <HomeTemplate allPostData={postsData} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllTagPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ITagPathProps) {
  const postsData = getPostsWtihTag(params.tag);
  console.log(params.tag);
  return {
    props: {
      postsData,
      tag: params.tag,
    },
  };
}
