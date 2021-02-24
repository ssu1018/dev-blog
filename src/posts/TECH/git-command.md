---
title: '프로젝트에서 많이 사용하는 git 명령어 모음'
date: '2021-02-24'
description: '프로젝트를 하면 사용할 일이 꼭 있는 git 명령어들을 알아보자'
slug: 'git-command'
tags: 'git'
---

## Introduction

git은 협업시에 빼놓을 수 없는 툴이다. 자신이 코드를 어떻게 변화시켰는지 기록하고(commit), 다른 사람과 같은 코드 베이스를 가지고 작업환경을 달리해 동시에 작업할 수 있으며, 코드에 문제가 생겼을 시 되돌아 갈 수도 있다. 하지만.. `Git is easy to learn`이라는 git 공식문서와는 다르게 생각보다 복잡하고, 암기할 명령어들이 많다. 

git에 대해 이해하고, 적절한 명령어를 사용해 사랑받는 팀원이 되자.

### basic

|명령어|설명|
|---|---|
|`git status`|staged 된 파일, modified 된 파일,untracted 파일을 보여준다.|
|`git log`|커밋 히스토리를 조회한다.|
|`git log -p -2`| 최근 2개의 커밋 diff 결과를 보여준다.|
|`git reflog` | 최근 reflog 목록 확인|

### ADD

`working directory`에 존재하는 파일 변경사항(content)의 snapshot을 `index`로 옮긴다.

|명령어|설명|
|---|---|
|`git add .`|현재 디렉토리 밑의 모든 파일 변경사항을 staging 한다.|
|`git add --all`| .git 디렉토리가 존재하는 root 디렉토리 밑의 모든 파일 변경사항을 staging한다.|
|`git reset HEAD [file]`| index의 file을 working directory로 끌고 온다. file 명이 없으면 add 한 파일 전체를 취소한다.|

### commit

HEAD란 현재 브랜치를 가리키는 포인터며, 가장 최근 커밋의 스냅샷이다. `~`와 `^`를 이용해 그 브랜치의 특정 커밋을 가리킬 수 있다. HEAD~2인 경우 HEAD에서 두 번 앞선 커밋이다. `^`는 HEAD 이전에 브랜치 병합이 있었다면, 몇 번째 원본이었는 지 지정할 수 있다.

|명령어|설명|
|---|---|
|`git commit -m <'msg'>`| 커밋 메세지를 변경할 수 있다.|
|`git commit --amend`| 커밋 메세지를 변경할 수 있다.|
|`git reset HEAD~2`| 마지막 2개의 commit을 취소하고 unstage 시킨다.|
|`git reset HEAD@{<number>}`|원하는 시점으로 돌아간다.|
|`git revert <commit>`|해당 커밋을 되돌린다. 이미 push한 상태거나, 되돌리려는 commit 이후에 여러 commit을 했다면 reset 대신 revert를 사용한다. |

### push

원격 저장소에 커밋 내역을 push 한다

|명령어|설명|
|---|---|
|`git push <remote> <branch name>`| 원격 저장소에 push, -f 옵션 주면 warning을 무시한다.|

### stash

커밋되지 않은 변경 사항이 stage와 작업 트리에 남아 있는 경우 다른 브랜치로 checkout 하면 전환된 브랜치에서 커밋할 수 있다. 하지만 변경된 content가 전환할 브랜치에 존재하고, 변경된 상태라면 checkout할 수 없다. 이때 stash를 이용해 임시로 파일 변경 사항을 기록해두고, stash cache를 불러와 해당 브랜치나 다른 브랜치에서 커밋할 수 있다.

stash 명령어 실행시 다음의 파일을 임시 저장한다.

- Tracked 파일 중에서 컨텐츠의 변화가 있는 것(modified)
- index의 파일들

|명령어|설명|
|---|---|
|`git stash save <name>`|새로운 stash를 만들어 파일 컨텐츠를 저장한다.|
|`git stash list`| stash 목록 확인|
|`git stash apply`| 가장 최근 stash를 가져온다.|
|`git stash apply <stash name>`|  해당 stash를 가져온다.  ex)stash@{i}|
|`git stash drop`| 가장 상위의 stash를 제거한다. stash apply 이후 drop을 해야 제거된다.|
|`git stash pop`| git stash apply + git stash drop|
|`git stash show -P | git apply -R`|가장 최근 적용한 stash를 되돌린다.|

### merge & rebase

보통 배포를 위한 main 브랜치를 두고, feature 브랜치에서 작업한 후 main 브랜치에 병합한다. 브랜치를 병합하기 위해서 `merge`와 `rebase`를 사용할 수 있다.

#### merge

`fast-forward` 와 `3-way merge`가 존재한다. 브랜치 분기가 이뤄진 후 조상 브랜치에서 추가적인 커밋이 없는 경우 fast-forward가 이루어지고, 변화가 있었을 경우 공통 조상 커밋과 두 브랜치의 커밋을 고려해 3-way merge가 된다. 3-way merge의 경우  머지 커밋이 생성되고, HEAD가 이 커밋으로 옮겨진다. 하지만 이런 경우 불필요한 머지 커밋으로 인해 머지 로그를 보기 힘들어진다. `rebase`로 이 문제를 해결할 수 있다.

|명령어|설명|
|---|---|
|`git merge [branch]`|선택한 브랜치를 현재 브랜치에 머지한다.|

#### rebase

merge 커밋 없이 브랜치를 병합하기 위해서는 공통되는 조상 커밋을 바꿔야 한다. base commit을 base 브랜치의 가장 최근 commit으로 바꾼다. 이후 머지하려는 브랜치의 커밋들을 이어 붙인다.
rebase 과정을 거친 후 merge를 하면 fast-forward가 발생하여 깔끔한 commit log를 얻을 수 있다.
rebase -> (add -> continue) 반복을 통해 rebase 할 수 있다.

이미 원격 repo에 올라간 커밋을 rebase하면 안된다. 동일한 커밋 메세지가 여러 개 존재하기 때문에 헷갈린다.

|명령어|설명|
|---|---|
|`git rebase [branch]`|현재의 branch를 원하는 branch에 rebase 한다.|
|`git add [file] & git rebase --continue`| rebase중 conflict가 나면 conflict를 수정하고 다시 rebase를 한다.|
|`git rebase -i HEAD~<i>`| i개의 커밋을 합치거나 조정해 새 커밋을 만든다.|

### pull

`fetch` + `merge`이다.

|명령어|설명|
|---|---|
|`git pull <remote> <branch>`|선택한 브랜치 fetch한 후 현재의 branch에 merge한다. 커밋 내역이 모두 보존되는 장점이 있지만 히스토리가 복잡해 보기 힘들다.|
|`git pull --rebase <stream> <branch>`| pull한 후 현재 브랜치의 커밋을 새로운 커밋으로 rebase한다. 커밋 히스토리가 깔끔하다는 장점이 있지만 머지 시점을 알기 힘들다.|

### branch

|명령어|설명|
|---|---|
|`git checkout [branch]`|선택한 브랜치로 checkout.|
|`git checkout -b [branch]`|브랜치를 만든다.|
|`git branch -d [branch]`|선택한 브랜치를 삭제한다.|

### tag

tag는 커밋을 참조하기 쉽게 이름을 붙이는 것이다. 일반적으로 v0.3.0같이 주석 태그를 사용해서 릴리즈 버전을 나타낸다.

|명령어|설명|
|---|---|
|`git tag [-n]`| tag list를 본다. -n 옵션을 주면 주석 내용도 확인할 수 있다.|
|`git tag [tagName]`|Head가 가리키고 있느 커밋에 tag를 단다. -am 옵션을 주면 태그 설명을 달 수 있다.|
|`git tag -am [tag msg] [tag name]`| 주석 태그를 단다.|
|`git tag -d [tag name]`| 태그를 삭제한다.|

### cherry-pick

풀리퀘의 code change가 500줄 이상이 되는 경우 브랜치 두개로 풀리퀘를 쪼갤 때, 특정 브랜치에 잘못 추가한 커밋을 옮길 때, 코드 설계를 잘못 해서 대부분을 날려야 하지만 건지고 싶은 커밋이 있을 때 `cherry-pick`을 이용해서 특정 커밋만 옮길 수 있다. git merge를 한 후 rebase 및 reset을 이용해 같은 목적을 달성할 수도 잇다.

|명령어|설명|
|---|---|
|`git cherry-pick <branch>`| 현재의 브랜치에 선택한 branch의 가장 최근 commit을 추가한다.|
|`git cherry-pick <commit msg>`|현재의 브랜치에 commit msg를 추가한다.|
|`git cherry-pick --continue`|체리픽 과정 중 conflict이 발생하면 수정, staging 후 다음 명령어를 실행한다.|

## Reference

- git docs [https://git-scm.com/docs/git-cherry-pick]
- 누구나 쉽게 이해할 수 있는 Git 입문 [https://backlog.com/git-tutorial/kr/stepup/stepup1_3.html]
- git stash 명령어 사용하기 [https://gmlwjd9405.github.io/2018/05/18/git-stash.html]