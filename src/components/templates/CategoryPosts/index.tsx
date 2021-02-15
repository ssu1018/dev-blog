import { useState, useMemo, useEffect, MouseEvent } from 'react';

import { PostPreview } from '@/components/organisms';
import { IMatterWithCategory } from '@/utils/posts';
import { MaxPerPage } from '@/constants/pagenation';
import Pagination from '@/components/organisms/Pagination';
interface IHomeTemplate {
  allPostData: IMatterWithCategory[];
}

export default function CategoryPosts({ allPostData }: IHomeTemplate) {
  const [postsPerPage, setPostsPerPage] = useState(
    allPostData.slice(0, MaxPerPage)
  );

  useEffect(() => {
    setPostsPerPage(allPostData.slice(0, MaxPerPage));
  }, [allPostData.length]);

  const [currPage, setCurrPage] = useState(1);

  const PageNum = useMemo(() => Math.ceil(allPostData.length / MaxPerPage), [
    allPostData,
  ]);

  const onPageClick = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    const start: number = (target.value - 1) * MaxPerPage;
    setCurrPage(target.value);
    setPostsPerPage(allPostData.slice(start, start + MaxPerPage));
  };

  const renderedAllPosts = useMemo(() => {
    return postsPerPage.map((post) => {
      const { title, description, tags, slug, category } = post;

      const link = `/${category}/${slug}`;
      return (
        <PostPreview
          link={link}
          title={title}
          description={description}
          tags={tags}
          key={slug}
        />
      );
    });
  }, [postsPerPage]);

  return (
    <section>
      {renderedAllPosts}
      <Pagination onPageClick={onPageClick} currPage={currPage} num={PageNum} />
    </section>
  );
}
