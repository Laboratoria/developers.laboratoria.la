---
title: Github Workflow
desc: A mostly reasonable approach Github and Git
date: 2018-07-15 16:14:30
categories: code-standards
permalink: github-workflow
---

## Workflow

Currently there are two type of projets, some are in production stage and other projects in early stage.

### Projects in Production 

For projects that are in production, that's means projects that have a scheduled release live cycle, we could work with Git Flow:

[Learn Git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) *by Atlassian*


### Projects in Early stage

For project that are in early stage, that's means not alredy in production, we could work with Feature Branch Workflow:

[learn Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) *by Atlassian*

## Good commit messages

Good commit messages serve at least three important purposes:

* To speed up the reviewing process.
* To help us write a good release note.
* To help the future maintainers (it could be you!), say five years into the future, to find out why a particular change was made to the code or why a specific feature was added.

Structure your commit message like this:

From: http://git-scm.com/book/ch5-2.html

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Further paragraphs come after blank lines.

  - Bullet points are okay, too

  - Typically a hyphen or asterisk is used for the bullet, preceded by a
    single space, with blank lines in between, but conventions vary here
```

### Good to do

* Write the summary line and description of what you have done in the imperative mode, that is as if you were commanding someone. Start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed".
* Always leave the second line blank.
* Line break the commit message (to make the commit message readable without having to scroll horizontally in gitk).

### Commit message examples

```
Start to create a new Filer version

A new version of the Filter that we are creating with some UI improvements
  - Changed the color
  - Mobile friendly
```

## Branch naming conventions

### Basic rules

* Use grouping tokens (words) at the beginning of your branch names.
* Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow.
* Use slashes to separate parts of your branch names.
* Do not use bare numbers as leading parts.
* Avoid long descriptive names for long-lived branches.

### Group tokens

Use "grouping" tokens in front of your branch names.

Examples:

```
group1/foo
group2/foo
group1/bar
group2/bar
group3/bar
group1/baz
```

### Short well-defined tokens

Choose short tokens so they do not add too much noise to every one of your branch names. I use these:

```
wip       Works in progress; stuff I know won't be finished soon
feat      Feature I'm adding or expanding
bug       Bug fix or experiment
junk      Throwaway branch created to experiment
```

*Source: [stackoverflow](https://stackoverflow.com/questions/273695/git-branch-naming-best-practices/6065944#6065944)*