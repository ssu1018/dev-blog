export interface IPageProp {
  path: string;
  name: TPageNames;
}

interface PageProps {
  ABOUT: IPageProp;
  TECH: IPageProp;
  TAG: IPageProp;
  ALGORITHM: IPageProp;
  LIFE: IPageProp;
  CATEGORY: IPageProp;
}

type TPageNames = keyof typeof Page;

export const Page: PageProps = {
  ABOUT: {
    path: '/about',
    name: 'ABOUT',
  },
  TECH: {
    path: '/tech',
    name: 'TECH',
  },
  TAG: {
    path: '/tag',
    name: 'TAG',
  },
  ALGORITHM: {
    path: '/algorithm',
    name: 'ALGORITHM',
  },
  LIFE: {
    path: '/life',
    name: 'LIFE',
  },
  CATEGORY: {
    path: '/category',
    name: 'CATEGORY',
  },
};
