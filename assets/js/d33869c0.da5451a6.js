"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[3921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return r?n.createElement(d,i(i({ref:t},h),{},{components:r})):n.createElement(d,i({ref:t},h))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Git Cheat Sheet",l={unversionedId:"cheatsheets/git",id:"cheatsheets/git",title:"Git Cheat Sheet",description:"Rebase",source:"@site/docs/cheatsheets/git.md",sourceDirName:"cheatsheets",slug:"/cheatsheets/git",permalink:"/cheatsheets/git",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/cheatsheets/git.md",tags:[],version:"current",frontMatter:{},sidebar:"cheatsheetSidebar",previous:{title:"Docker Cheat Sheet",permalink:"/cheatsheets/docker"},next:{title:"Java Cheat Sheet",permalink:"/cheatsheets/java"}},c={},s=[{value:"Rebase",id:"rebase",level:2},{value:"Undoing unpublished last commit",id:"undoing-unpublished-last-commit",level:2},{value:"Undoing published commits with git",id:"undoing-published-commits-with-git",level:2},{value:"Squashing commits",id:"squashing-commits",level:2},{value:"Squashing 4 commits into 1",id:"squashing-4-commits-into-1",level:2},{value:"Prune branches no longer on remote",id:"prune-branches-no-longer-on-remote",level:2},{value:"Delete merged branches",id:"delete-merged-branches",level:2},{value:"Resetting local branch to match origin",id:"resetting-local-branch-to-match-origin",level:2},{value:"Checkout tracked remote branch",id:"checkout-tracked-remote-branch",level:2},{value:"Delete all branches forced",id:"delete-all-branches-forced",level:2},{value:"Recovering lost work after rebase",id:"recovering-lost-work-after-rebase",level:2},{value:"Change git commit email",id:"change-git-commit-email",level:2}],h={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-cheat-sheet"},"Git Cheat Sheet"),(0,a.kt)("h2",{id:"rebase"},"Rebase"),(0,a.kt)("p",null,"Useful when you need to put master commits before your branch commits. Last two lines are needed only if there were merge conflicts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git co your-branch\ngit rebase master\ngit add .\ngit rebase --continue\n")),(0,a.kt)("h2",{id:"undoing-unpublished-last-commit"},"Undoing unpublished last commit"),(0,a.kt)("p",null,"This brings the repo back to the state it was right before the last commit. Only use this if you haven't pushed to remote yet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git reset HEAD~1\n")),(0,a.kt)("h2",{id:"undoing-published-commits-with-git"},"Undoing published commits with git"),(0,a.kt)("p",null,"This does not overwrite history. Brings repo back to previous state and creates new commit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git revert --no-commit 0766c053..HEAD\ngit commit\n")),(0,a.kt)("h2",{id:"squashing-commits"},"Squashing commits"),(0,a.kt)("p",null,"Only use this if you haven't pushed to remote yet. Type s next to each commit you want to squash. Read the prompt for more info."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git co your-branch\ngit rebase -i master\n")),(0,a.kt)("h2",{id:"squashing-4-commits-into-1"},"Squashing 4 commits into 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git rebase -i HEAD~4\n")),(0,a.kt)("h2",{id:"prune-branches-no-longer-on-remote"},"Prune branches no longer on remote"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git fetch -p\n")),(0,a.kt)("h2",{id:"delete-merged-branches"},"Delete merged branches"),(0,a.kt)("p",null,"oh-my-zsh alias is gbda"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  git branch --merged | command grep -vE "^(\\*|\\s*master\\s*$)" | command xargs -n 1 git branch -d\n')),(0,a.kt)("h2",{id:"resetting-local-branch-to-match-origin"},"Resetting local branch to match origin"),(0,a.kt)("p",null,"This will reset everything on local branch. You will lose everything that doesn't match remote.\nThis is useful when a feature branch was force pushed on remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git fetch\ngit reset --hard origin/master\n")),(0,a.kt)("h2",{id:"checkout-tracked-remote-branch"},"Checkout tracked remote branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -t origin/my-branch\n")),(0,a.kt)("h2",{id:"delete-all-branches-forced"},"Delete all branches forced"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git branch | grep -v master | xargs git branch -D\n")),(0,a.kt)("h2",{id:"recovering-lost-work-after-rebase"},"Recovering lost work after rebase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git reflog\ngit reset --hard <hash>\n")),(0,a.kt)("h2",{id:"change-git-commit-email"},"Change git commit email"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git config --global user.email "email@example.com"\n')))}m.isMDXComponent=!0}}]);