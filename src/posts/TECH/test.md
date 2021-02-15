---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
description: '오늘은 어떻게 제가 글을 썼는 지 공유합니다.'
slug: 'test'
tags: 'test,tagOk,react,redux '
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

> 안녕하세요

| hi everyone

`heesu`

```javascript
function test(){
  console.log("hi")
}
```

```javascript
export async function getStaticProps() {
  const postsData: IMatterWithCategory[] = getCategoryPosts(categoryName.LIFE);
  return {
    props: {
      postsData,
    },
  };
}

```