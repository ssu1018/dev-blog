import { categories } from '@/constants/categories';
import Link from 'next/link';

export default function Categories() {
  const renderedCategories = categories.map((category) => (
    <div>
      <h1>
        <Link href={category.info.path}>{category.title}</Link>
      </h1>
      <div>{category.detail}</div>
    </div>
  ));

  return <div>{renderedCategories}</div>;
}
