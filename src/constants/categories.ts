import { Page, IPageProp } from './pageRoute';

export interface ICategoryProp {
  title: string;
  detail: string;
  info: IPageProp;
}

export const categories: ICategoryProp[] = [
  {
    title: '알고리즘',
    detail: '알고리즘 기법 및 문제들을 소개하는 곳',
    info: Page.ALGORITHM,
  },
  {
    title: '일상',
    detail: '나의 일상을 소개하는 곳',
    info: Page.LIFE,
  },
  {
    title: '테크',
    detail: '다양한 테크 지식들을 나누는 곳',
    info: Page.TECH,
  },
];

export enum categoryName {
  AlGORITHM = 'ALGORITHM',
  LIFE = 'LIFE',
  TECH = 'TECh',
}

export type TCategoryName = keyof typeof categoryName;
