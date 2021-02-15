import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

import { categories, TCategoryName } from '@/constants/categories';

export interface IMatterDataProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string;
}

export interface IPostDataProps extends IMatterDataProps {
  slug: string;
  contentHtml: string;
}

export interface IMatterWithCategory extends IMatterDataProps {
  category: string;
}

export interface IPostPathProps {
  params: {
    slug: string;
  };
}

export const postsDirectory: string = path.join(process.cwd(), 'src', 'posts');

export function getCategoryPosts(category: string): IMatterWithCategory[] {
  const fileNames: string[] = fs.readdirSync(
    path.join(postsDirectory, category)
  );

  const allPostsData: IMatterWithCategory[] = fileNames.map((fileName) => {
    const fullPath: string = path.join(postsDirectory, category, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const matterData: IMatterDataProps = matter(fileContents)
      .data as IMatterDataProps;
    category = category.toLowerCase();
    return { ...matterData, category };
  });

  return allPostsData.sort((a, b): number => -a.date.localeCompare(b.date));
}

export function getCategoryPostsPath(
  categoryName: TCategoryName
): IPostPathProps[] {
  const postsData: IMatterDataProps[] = getCategoryPosts(categoryName);

  return postsData.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export async function getPostData(
  categoryName: TCategoryName,
  slug: string
): Promise<IPostDataProps> {
  const fullPath: string = path.join(
    postsDirectory,
    categoryName,
    `${slug}.md`
  );
  const fileContents: string = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml: string = processedContent.toString();
  const matterData: IMatterDataProps = matterResult.data as IMatterDataProps;

  return {
    contentHtml,
    ...matterData,
  };
}

export function getPostsWtihTag(tag: string) {
  const postsData: IMatterDataProps[] = getAllPosts();

  const filtedPostsWithTag: IMatterDataProps[] = postsData.filter((post) =>
    post.tags.includes(tag)
  );

  return filtedPostsWithTag;
}

interface ICategoriesObjProps {
  [x: string]: string[];
}

export function getAllPosts(): IMatterDataProps[] {
  const categoriesObj: ICategoriesObjProps = categories.reduce(
    (obj, category) => {
      const categoryName = category.info.name;
      return {
        ...obj,
        [categoryName]: fs.readdirSync(path.join(postsDirectory, categoryName)),
      };
    },
    {}
  );

  const allPostsData: IMatterWithCategory[] = Object.entries(categoriesObj)
    .map(([category, files]) =>
      files.map((fileName) => {
        const fullPath: string = path.join(postsDirectory, category, fileName);
        const fileContents: string = fs.readFileSync(fullPath, 'utf8');
        const matterData: IMatterDataProps = matter(fileContents)
          .data as IMatterDataProps;

        category = category.toLowerCase();
        return { ...matterData, category };
      })
    )
    .flat();

  return allPostsData.sort((a, b): number => -a.date.localeCompare(b.date));
}
