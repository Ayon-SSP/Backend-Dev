
**origin/main vs main:**



`git pull`: fetch and merge changes from the remote repository
  eg. feature/branch1 -> origin/feature/branch1

`git pull` is equivalent to `git fetch` + `git merge`

VsCode Git
==========
Staged Changes (staging area)
==========
Changes (working area)
==========


```bash
git help
git config --list
git config --global user.name "Your Name"
git config --global user.email "

git init
git status
git add . | --all | file.txt | *.txt | docs/*.txt
git commit -m "Initial commit"
git log               # show commit history

git diff              # show changes between working area and staging area
git diff --staged     # show changes between staging area and last commit.

```



**change any git commit message:**
```bash
# ⚠ don't forget to stash your changes first!
git rebase -i HEAD~2 <or> git rebase -i bd3d024^
          
          VS code: 
          chose `edit` for the commit you want to change.
          git commit --amend

press `esc`
  `I` to edit the commit message

pick -> edit

  `esc`
  SHIFT + ZZ

git commit --amend            # modify the last commit
  "edit the commit message"
  `esc`
  SHIFT + ZZ

git rebase --continue
git push -f

```

**squash commits to single commit:**
```bash
git rebase -i HEAD~2
```










Basic Git Commands
git init – Initialize a new Git repository.
git clone <repository-url> – Clone a repository from a remote URL to your local machine.
git status – Check the status of your working directory and staging area.
git add <file> – Add changes in a specific file to the staging area.
git commit -m "message" – Commit changes in the staging area with a descriptive message.
git push – Push local changes to the remote repository.
git pull – Fetch and merge changes from the remote repository to your local branch.
git fetch – Fetch changes from the remote repository without merging them.
git log – Show the commit history.
git diff – Show the changes between the working directory and the staging area.
git diff <commit-id> – Compare changes between two commits.
git reset <file> – Unstage a file that was added to the staging area.
git reset --hard <commit-id> – Reset the working directory and the staging area to a specific commit (warning: this will discard local changes).
git rm <file> – Remove a file from both the working directory and the staging area.
git restore <file> – Restore a file to the state of the last commit.
Branching and Merging
git branch – List all branches in your repository.
git branch <branch-name> – Create a new branch.
git checkout <branch-name> – Switch to a different branch.
git merge <branch-name> – Merge changes from one branch into the current branch.
git rebase <branch-name> – Rebase the current branch onto another branch (replay the changes).
git branch -d <branch-name> – Delete a branch.
git checkout -b <branch-name> – Create and switch to a new branch in one step.
git stash – Stash the changes in your working directory temporarily.
git stash pop – Apply the latest stashed changes.
git stash list – List all stashes.
Remote Repositories
git remote -v – List remote repositories.
git remote add <remote-name> <url> – Add a new remote repository.
git remote remove <remote-name> – Remove a remote repository.
git push origin <branch-name> – Push changes to a specific branch of the remote repository.
git pull origin <branch-name> – Pull changes from a specific branch of the remote repository.
Undo Changes
git revert <commit-id> – Create a new commit that undoes the changes made in a previous commit.
git reset <commit-id> – Reset the current branch to a specific commit (without changing the working directory).
git checkout -- <file> – Discard changes in a file and revert it to the last committed state.
git commit --amend – Modify the last commit.
Tagging
git tag – List all tags.
git tag <tag-name> – Create a new tag at the current commit.
git push origin <tag-name> – Push a tag to the remote repository.
git push --tags – Push all tags to the remote repository.
Collaboration and Conflict Resolution
git merge --no-ff <branch-name> – Create a merge commit even when a fast-forward merge is possible.
git rebase --interactive <commit-id> – Start an interactive rebase from a specific commit.
git cherry-pick <commit-id> – Apply the changes from a specific commit to the current branch.
git blame <file> – Show line-by-line blame information for a file, indicating who made changes.