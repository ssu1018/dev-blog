import { getCategoryPosts, getAllPosts, IMatterDataProps } from './posts';
import { TCategoryName } from '@/constants/categories';

export interface ITagPathProps {
  params: {
    tag: string;
  };
}

export function getCategoryTags(categoryName: TCategoryName): string[] {
  const matterResults = getCategoryPosts(categoryName);
  const tagDatas = matterResults.map((matterResult) => matterResult.tags);

  return [...new Set(tagDatas.map((tagData) => tagData.split(',')).flat())];
}

export function getAllTagPath(): ITagPathProps[] {
  const postsData: IMatterDataProps[] = getAllPosts();
  const tagDatas = postsData.map((post) => post.tags);
  const tagSet = [
    ...new Set(tagDatas.map((tagData) => tagData.split(',')).flat()),
  ];

  return tagSet.map((tag) => ({
    params: {
      tag,
    },
  }));
}
