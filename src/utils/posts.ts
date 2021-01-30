import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

interface SortedPostType extends MatterResultType {
  id: string;
}

interface MatterResultType {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface PostIdsType {
  params: {
    id: string;
  };
}

export interface PostDataType extends SortedPostType {
  contentHtml: string;
}

const postsDirectory: string = path.join(process.cwd(), 'src', 'posts');
console.log(postsDirectory);
export function getSortedPostsData(): SortedPostType[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: SortedPostType[] = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '');
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');

    const matterData: MatterResultType = matter(fileContents)
      .data as MatterResultType;

    return {
      id,
      ...matterData,
    };
  });

  return allPostsData.sort((a: SortedPostType, b: SortedPostType): number =>
    a.date.localeCompare(b.date)
  );
}

export function getAllPostIds(): PostIdsType[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory);

  return fileNames.map(
    (fileName): PostIdsType => ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    })
  );
}

export async function getPostData(id: string): Promise<PostDataType> {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml: string = processedContent.toString();
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as MatterResultType),
  };
}
