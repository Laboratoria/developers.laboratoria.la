---
title: etiquette
date: 2018-07-06 15:20:48
---

# Digital Etiquette for Laboratorians

> Etiquette (/ˈɛtᵻˌkɛt/ or /ˈɛtᵻkᵻt/, French: [e.ti.kɛt]) is a code of behavior
> that delineates expectations for social behavior according to contemporary
> conventional norms within a society, social class, or group.
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Etiquette)

Time is of the essence, and communication can be time consuming. In order to
prevent headaches, misunderstandings and reduce communication issues, we ask
all team members and contributors to abide by a set conventions outlined here.

This document is intended for all Laboratorians, not just developers :wink:

***

## Table of contents

* [Digital identity](#digital-identity)
* [Writing](#writing)
  - [Plain text](#plain-text)
  - [Markdown](#markdown)
* [Platforms](#platforms)
  - [Slack](#slack)
  - [Email](#email)
  - [Calendar](#calendar)
  - [Hangouts](#hangouts)
  - [Forum](#forum)
  - [GitHub](#github)
  - [Medium](#medium)
  - [Bamboo](#bamboo)
  - [Google Drive](#google-drive)
* [Contributing](#contributing)
* [Code of conduct](#code-of-conduct)


***

## Digital identity

* Use **consistent username and full name** across services. You are the same
  person, and it helps if you are called the same across platforms.
* Use [Gravatar](https://gravatar.com/) (this will be your identity on many
  different services)
* Use a _memorable_ picture, avatar or image. **Default profile pics suck!**
* Try to use the **same pic across services**. It really helps add context,
  instantly knowing who you are, who is involved in what conversation, ... in
  the end it helps build familiarity and trust.

***

## Writing

**Pretty text is not just easier to read, it is also easier and quicker to
understand**. In real time communications (ie: Slack) it's all about quick,
expressive, short messages. But in all other forms of writing we have the
advantage of being able to stare at our words after the fact and then iterate
over them. So we should always aim to exploit that fundamental advantage when
writing down our thoughts, proposals, arguments, explanations, ...

* **Think** before you write.
* **Read** before you send.
* Add **context**.
* Careful **grammar** and **spelling** are not optional.
* **Punctuation** has meaning, use it as part of your message.
* **White space** matters.
* Be **corteous** and **kind**, but **clinical** when details matter.
* Be **transparent** and **inviting**.

### Plain text

When writing plain text (be it a markdown document, code, an issue, a blog post,
a forum message, ...), we follow these conventions:

* Use `ut8` charset
* Use spaces instead of tabs
* Use 2 spaces for indentation
* Avoid trailing whitespace
* Include blank line at the end of file
* Keep line length under 80 characters

This is how our standard [`.editorconfig`](https://editorconfig.org/) looks
like:

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```

### Markdown

* As a digital native, you are expected to be familiar with markdown syntax.
* Use markdown in Slack, Medium, GitHub, ... even in emails when applicable.

[Markdown cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

***

## Platforms

We communicate on many different platforms. Each one of these platforms has its
own distinct characteristics, and it is important to know what to post where,
and to whom.

Should it be a direct message on Slack, or maybe a message on a channel, or, ...
wait, should't this be an email, ... or even a forum discussion, ... or a blog
post to share this world?

When writing, always keep these in mind:

* Minimise interruption, favour async comms.
* Do you need an immediate answer? If so, try realtime platforms like Slack or
  WhatsApp. Always try texting/chat before calling.
* Who should read it? Just one person? Maybe your whole team? The organisation?
  The world?
* Avoid silos.
* Aim for the wider audience (ie: if replying to a question asked via DM, and
  the answer could be helpful to others, consider the wider audience,
  colleagues, contributors, students, alumni, employers, ... the best options
  could be a group message, forum thread or blog post).
* Is it a transient conversation or does it need to survive over time? If you
  expect (or want) the conversation to be searchable and available in the
  future, silos like chats are not appropriate; use a forum or GitHub repo
  (issues, ...).
* Does it start a discussion? If you intend to start a discussion, be inclusive
  and use open channels so that others can _join_ the conversation, _see_ what
  is happening and _refer_ to it in future discussions.

### [Slack](https://laboratoriala.slack.com/messages/C7TE6F4G7/)

Slack is intended as a _real time_ communication platform for conversations
between staff, as well as with students (in a [separate account](https://claseslaboratoria.slack.com/)).

* A simple reaction can be really helpful and meaningful.
* Share stuff worth sharing.
* Remember it's a chat app, if your message does not have a "real time" or
  "group" nature it should probably go elsewhere.
* Do not stalk.
* Messages and conversations are transient.
* Use @mentions to make sure people are notified, but there's no need to
  @mention them every time we refer to them.
* If it is important and does not need to be real-time it should probably be an
  email.

### Email

Email is old school, but it still has a place.

* Favour plain text email when written by a human (it's ok for newsletters,
  and other automated emails to be branded in html format).
* Keep your signature simple. No need for unnecessary clutter.
* Only add a full "footer type signature" in your first communication with
  someone. You only give someone your business card once.
* You don't need to add your signature to every response.
* When replying take the time to ask yourself the question: "reply", "reply to
  all" or "reply to some".
* An email without a subject is not helpful.
* The subject is important and should summarise your message. If you can not
  summarise it, you probably want to split it in more than one email.

### Calendar

[ wip ]

### Hangouts

[ wip ]: Google Hangouts, Zoom, Slack, Skype?

### [Forum](http://community.laboratoria.la/)

We host a discourse forum at [community.laboratoria.la](http://community.laboratoria.la/),
aimed both at hosting staff discussions and having a space dedicated to web
development questions/answers, cared for and nurtured by our
[Developers Chapter](http://developers.laboratoria.la/). This forum is open to
all staff, students, alumni, mentors, contributors, employers and public in
general.

* Do not post private or confidential data in public categories
* Use mentions to draw specific users to a thread
* Do not abuse mentions
* Search before you ask
* Read before you post or reply
* Always provide context
* Be kind and welcoming
* Celebrate contribution
* Always be transparent
* Be critical of ideas, not people

### [GitHub](https://github.com/Laboratoria)

* [Tell the world you are a team member](https://help.github.com/articles/publicizing-or-hiding-organization-membership/)
* Always create a [`.gitignore`](https://git-scm.com/docs/gitignore) file when
  you create a new repo.
* Always create a `README.md` file when you create a new repo.
* Write commit messages starting with a verb in 3rd person present tense
  describing what the change set does (it "fixes something...", "adds
  something").
* Add [references to issues, commit messages and pull requests](https://help.github.com/articles/autolinked-references-and-urls/) in
  other issues, commit messages and pull requests.
* Use `Closes #n` to have issues automatically closed on push/merge.
* Use multiline commit messages when appropriate.
* Use markdown profusely.
* Always provide context when reporting _issues_.

### Medium

Publications: [Laboratoria](https://medium.com/laboratoria), [Laboratoria Developers](https://medium.com/laboratoria-how-to).

* Ask for peer review
* Review others
* Use quotes and add references
* Research is not optional
* Aim for literary value: you are telling a story

### [Bamboo](https://laboratoria.bamboohr.com/home)

[ wip ]

### Google Drive

[ wip ]

***

## Contributing

[ wip ]

* Pull, not push
* Learn, follow, nurture and contribute to conventions
* ...

***

## Code of conduct

http://es.confcodeofconduct.com/