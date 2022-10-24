# Git Cheat Sheet

## Rebase
Useful when you need to put master commits before your branch commits. Last two lines are needed only if there were merge conflicts.

    git co your-branch
    git rebase master
    git add .
    git rebase --continue

## Undoing unpublished last commit
This brings the repo back to the state it was right before the last commit. Only use this if you haven't pushed to remote yet

    git reset HEAD~1

## Undoing published commits with git
This does not overwrite history. Brings repo back to previous state and creates new commit.

    git revert --no-commit 0766c053..HEAD
    git commit

## Squashing commits
Only use this if you haven't pushed to remote yet. Type s next to each commit you want to squash. Read the prompt for more info.

    git co your-branch
    git rebase -i master

## Squashing 4 commits into 1

    git rebase -i HEAD~4

## Prune branches no longer on remote

    git fetch -p

## Delete merged branches
oh-my-zsh alias is gbda

      git branch --merged | command grep -vE "^(\*|\s*master\s*$)" | command xargs -n 1 git branch -d

## Resetting local branch to match origin
This will reset everything on local branch. You will lose everything that doesn't match remote.
This is useful when a feature branch was force pushed on remote.

    git fetch
    git reset --hard origin/master

## Checkout tracked remote branch

    git checkout -t origin/my-branch

## Delete all branches forced

    git branch | grep -v master | xargs git branch -D

## Recovering lost work after rebase

    git reflog
    git reset --hard <hash>

## Change git commit email

    git config --global user.email "email@example.com"

