import { BackgroundImg } from '@/components/molcules';
import { PostFeed, PostPreview } from '@/components/organisms';
import { TCategoryName } from '@/constants/categories';

import { IHomeProps as IHomeTemplateProps } from '@/pages/index';
import { customFunc } from '@/utils/helper';
import { IMatterDataProps } from '@/utils/posts';

export default function Home({
  feedPostsData,
  allPostData,
}: IHomeTemplateProps) {
  const feedPostsDataEntry = customFunc.entries(feedPostsData);
  const renderedPostFeed = feedPostsDataEntry.map(
    ([categoryName, postData]) => (
      <PostFeed
        randomPosts={postData}
        category={categoryName}
        key={categoryName}
      />
    )
  );

  const renderedAllPosts = allPostData.map((post) => {
    const { title, description, tags } = post;
    return <PostPreview title={title} description={description} tags={tags} />;
  });

  return (
    <section>
      <BackgroundImg>{renderedPostFeed}</BackgroundImg>
      {renderedAllPosts}
    </section>
  );
}
