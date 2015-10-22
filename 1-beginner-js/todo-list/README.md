## TODO List

You're going to make a TODO list application using HTML/CSS and JavaScript.

### Prerequisites

- Have git working -- ask for help if you are having trouble with git

- Have a text editor: Sublime, Atom, Vim, etc.

- Have a recent version of Chrome (try going to the [finished project](https://carpetfizz.github.io/imgur-voice/) to see if your browser is recent enough

- Know how to use the developer tools in Chrome [refresher](https://github.com/dvcoders/intro-html-css/blob/master/reference/README.md#what-are-your-browsers-developer-tools-and-how-can-they-be-used)

### Getting the workshop

If you were at last week's workshop and already forked/cloned the dvcoders/intro-js repository:

1. `cd` into your intro-js directory
2. Run `git status`.
3. If it doesn't say `nothing to commit, working directory clean`:
 - `git add -A` to add the files you've changed
 - and `git commit -m "finished rocketship workshop"`
 - and `git push origin master` to push those changes (assuming you are on branch master)
 - Now all your work from the last workshop is on github!
4. Make sure you're on `master`, you can check with `git status`
 - If needed, `git checkout master`
4. Now you should set "upstream" to track the dvcoder's intro-js repostiory:
 - `git remote add upstream https://github.com/dvcoders/intro-js.git`
5. `git fetch upstream`
 - This fetches the new changes added to the intermediate-js/todo-list folder in the dvcoder's intro-js repository
 - It places the changes in branches called upstream/[branch-name]
6. `git merge upstream/master` to merge the changes to your master branch

- Github goes into detail about this process [here](https://help.github.com/articles/syncing-a-fork/)

