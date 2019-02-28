# Laboratoria Developers Chapter

**The Developers Chapter at Laboratoria is a community made up of all the
developers within the organisation**. That includes any Laboratorian that fits the
developer profile: _developers_ working on software products, _coaches_, ...

The DevsChapter's **main goal is to promote peer learning, sharing and
cross-pollination across teams**. The community has a bunch of resources to
enable collaboration, sharing and support among devs.

The DevsChapter **also serves as the purpose of providing design, implementation
and collaboration guidelines**.

As part of the team at Laboratoria, we invite you to familiarise yourself with
our [digital etiquette](https://github.com/Laboratoria/etiquette).

***

## TOC

* [Resources](#resources)
* [Rituals](#rituals)
  - [Monthly hangouts](#monthly-hangouts)
  - [Pair programming](#pair-programming)
  - [Code review](#code-review)
  - [Office Hourse](#office-hours)
  - [Contributing](#contributing)
* [Products](#products)
  - [Open Source](#open-source)
  - [Private repos](#private-repos)
    + [api.laboratoria.la](#api.laboratoria.la)
    + [lms.laboratoria.la](#lms.laboratoria.la)
    + [talento.laboratoria.la](#talento.laboratoria.la)
    + [admission.laboratoria.la](#admission.laboratoria.la)
    + [alumnae.laboratoria.la](#)
    + [laboratoria-admin](#laboratoria-admin)
    + [laboratoria-ui](#laboratoria-ui)
    + [L4B](#)
* [Stack](#stack)
  - [Core](#core)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Testing, building and CI](#testing--building-and-CI)
  - [Other](#other)
* [Coding standards](#coding-standards)
  - [JavaScript](#javascript)
  - [Node.js](#node-js)
  - [React/JSX](#react-jsx)
  - [CSS](#css)
  - [HTML](#html)
  - [Shell](#shell)
* [Git Workflow](#git-workflow)
* [Internationalisation](#internationalisation)
* [Releases](#releases)
* [Deployment](#deployment)
* [Code of conduct](#code-of-conduct)

***

## Resources

The main channels of communication are:

* The website at [developers.laboratoria.la](http://developers.laboratoria.la/)
* The [#developers channel Laboratoria's Slack](https://laboratoriala.slack.com/messages/C7TE6F4G7/)
* The [DevsChapter category on our forum at community.laboratoria.la](http://community.laboratoria.la/c/devs-chapter)
* [This repo](https://github.com/Laboratoria/developers.laboratoria.la/) with
  info and guidelines.
* The [repos under the Laboratoria org on GitHub](https://github.com/Laboratoria)
  (repos, projects, issues, milestones, ...)
* The [developers blog on Medium](https://medium.com/laboratoria-developers)
* The [YouTube channel](https://www.youtube.com/channel/UCuWmQYAvytwSl6tqjOxV5Ow)
* The mailing list ([developers@laboratoria.la](mailto:developers@laboratoria.la))

***

## Rituals

### Monthly hangouts

Announced in the [DevsChapter category on our forum at community.laboratoria.la](http://community.laboratoria.la/c/devs-chapter).

NOTE: This is currently being discussed [here](https://github.com/Laboratoria/developers.laboratoria.la/issues/25).

View [calendar](https://calendar.google.com/calendar/embed?src=laboratoria.la_vhr2j0gerq2oidffm14fo3tuio%40group.calendar.google.com&ctz=America%2FLima).

### Pair programming

As part of the chapter, we encourage peer-learning and peer-review. As such, we
recommend devs pairing up with peers (both product devs and coaches) when
designing and implmenting software.

A clearer way for achieving this in practice still needs to be agreed.

### Code review

As a rule of thumb, every PR that will potentially end up in _production_ (as in
a release that will be used by other people), should have been reviewed by at
least two people. Each product/project has its own _rules_ and _conventions_,
but ideally repos will enforce reviews.

When sending a PR with new features always include context, design proposal and
instructions on how to test/verify the changes. Reviewing is hard, let's always
try to make it as easy as possible for potential reviewers.

### Office hours

All devs are encouraged to seek _office hours_ with more senior devs (or other
peers) in order to answer questions, ask for help, deep dive into a topic, ...
or whatever you may be struggling with.

In order to book _office hours_ please contact directly the dev you'd like to
book time with (via Slack). The following devs have offered themeselves to
provide these _office hours_:

* [@lupomontero](https://github.com/lupomontero)
* [@FabianBravoA](https://github.com/FabianBravoA)
* [@gmoura](https://github.com/gmoura)
* [@xpktro](https://github.com/xpktro)

### Contributing

We tag issues as `help-wanted` :wink:

Each repository should have a `CONTRIBUTING.md` file with a contributing guide
for potential contributors.

***

## Products

### Open Source

| Product |  Maintainers  | Description |
|----------|-----------|-------------|
| [curricula-js](https://github.com/Laboratoria/curricula-js) | [@lupomontero](https://github.com/lupomontero), [@merunga](https://github.com/merunga), [@rafaelbcerri](https://github.com/rafaelbcerri), [@gmoura](https://github.com/gmoura) | Bootcamp Curriculum (JavaScript).
| [curricula-ux](https://github.com/Laboratoria/curricula-ux) | [@lalogf](https://github.com/lalogf) | Bootcamp Curriculum (UX).
| [curriculum-parser](https://github.com/Laboratoria/curriculum-parser) | [@lupomontero](https://github.com/lupomontero), [@MaiaRojas](https://github.com/MaiaRojas) | CLI tool used to parse curriculum topics and projects in Markdown format and produce a JSON representation to be later pushed to the _database_.
| [schemas](https://github.com/Laboratoria/schemas) | [@lupomontero](https://github.com/lupomontero) | Mongoose _schemas_ describing shared entities. This _module_ is meant to be used both in Node.js and in the browser.
| [models](https://github.com/Laboratoria/models) | [@lupomontero](https://github.com/lupomontero) | Mongoose _models_ based on `schemas`. This _module_ is meant to be used ONLY in Node.js. :warning: Does this need to be public?
| [firemin](https://github.com/Laboratoria/firemin) | [@lupomontero](https://github.com/lupomontero) | Firebase/Firestore extra CLI features. This is mainly used to interact with `firestore` as the official `firebase` CLI tool doesn't include much functionality for `firestore`.
| [mdlint](https://github.com/Laboratoria/mdlint) | [@lupomontero](https://github.com/lupomontero) | Markdown linter (CLI) used in `curricula-js`.
| [developers.laboratoria.la](https://github.com/Laboratoria/developers.laboratoria.la) | [@lupomontero](https://github.com/lupomontero), [@gmoura](https://github.com/gmoura) | DevsChapter's _conventions_, guidelines and website.
| [fetch-gsheets](https://github.com/Laboratoria/fetch-gsheets) | [@lupomontero](https://github.com/lupomontero) | CLI tool used to extract data from Google spreadsheets as JSON.

### Private repos

#### [api.laboratoria.la](https://github.com/Laboratoria/api.laboratoria.la)

HTTP JSON API sitting on top of our databases (Firestore and MongoDB), offering
a single point of access for authentication and data from any of our apps. This
app is currently hosted as [Firebase Cloud Functions](https://firebase.google.com/docs/functions/).

* PM: [@bouli](https://github.com/bouli)
* Tech lead: [@lupomontero](https://github.com/lupomontero)
* Devs: [@xpktro](https://github.com/xpktro), [@MaiaRojas](https://github.com/MaiaRojas),
  [@corosteg](https://github.com/corosteg)
* Kanban: https://github.com/orgs/Laboratoria/projects/9
* Tracker: https://github.com/Laboratoria/api.laboratoria.la/issues
* API Docs: https://laboratoria.github.io/api.laboratoria.la/
* URL: https://api.laboratoria.la/

#### [lms.laboratoria.la](https://github.com/Laboratoria/lms.laboratoria.la)

Learning Management System (LMS). This is the main web interface used by our
students (both Bootcamp and L4B) in order to follow our different training
programs.

* PM: [@chamodev](https://github.com/chamodev)
* Tech lead: [@xpktro](https://github.com/xpktro)
* Devs: [@MaiaRojas](https://github.com/MaiaRojas), [@corosteg](https://github.com/corosteg)
  [@RuthMeryCardenas](https://github.com/RuthMeryCardenas)
* URL: https://lms.laboratoria.la/

#### [talento.laboratoria.la](https://github.com/Laboratoria/talento.laboratoria.la)

Job Placemente App

* PM: [@andreamarianalm](https://github.com/andreamarianalm)
* Tech lead: [@gmoura](https://github.com/gmoura)
* Devs: [@rafaelbcerri](https://github.com/rafaelbcerri)
* URL: https://app.talento.laboratoria.la/

#### [admission.laboratoria.la](https://github.com/Laboratoria/admission.laboratoria.la)

* PM: [@danielasarzosa](https://github.com/danielasarzosa)
* Tech lead: [@arun1595](https://github.com/arun1595)

#### alumnae.laboratoria.la

* PM: Franco???
* Tech lead: [@FabianBravoA](https://github.com/FabianBravoA)
* Devs: [@AnaSalazar](https://github.com/AnaSalazar)

#### [laboratoria-admin](https://github.com/Laboratoria/admin)

CLI tool used for amdin tasks related to API and LMS.

* Tech lead: [@lupomontero](https://github.com/lupomontero)

#### laboratoria-ui

???

#### L4B???

* PM: [@claudiaalf](https://github.com/claudiaalf)

***

## Stack

`tl;dr`: Full Stack JavaScript, and we favor the [functional paradigm](https://medium.com/laboratoria-developers/tagged/functional-programming),
TDD, and if it can be a _pure function_, it must be one.

### Core

* JavaScript (E6, ES7, ES8)
* [Node.js](https://nodejs.org/) / [NPM](https://www.npmjs.com/) / [Yarn](https://yarnpkg.com/en/)
* Git + GitHub
* Markdown

### Backend

* [Firebase](https://firebase.google.com/) (hosting)
* [Firebase functions](https://firebase.google.com/docs/functions/) (hosting)
* [Firestore](https://firebase.google.com/docs/firestore/) (database)
* MongoDB / Atlas
* Express

### Frontend

In [this blog post](https://medium.com/laboratoria-developers/arquitectura-de-interfaces-web-parte-1-a41053c2a1f2)
you can find a description of the basic **JavaScript stack** we use in the
front-end (article is in spanish).

* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Redux](https://redux.js.org/)
* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/) ????
* `create-react-app` ???
* Boilerplate ???

### Testing, building and CI

#### npm-scripts

As a task runner we use _vanilla_ `npm-scripts`.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "pretest": "eslint .",
    "test": "jest --verbose --coverage",
    "build": "./scripts/build.sh",
    "deploy": "gh-pages -d build"
  },
  ...
}
```

#### Linter

All projects containing JavaScript should _lint_ the source code using
[ESLint](https://eslint.org/). Check the [Coding standards](#coding-standards)
section for details on the different `eslint` configurations used in different
environments.

Make sure your `package.json` includes a `pretest` _script_ (as in
`npm-scripts`). For example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "pretest": "eslint .",
    "test": "jest --verbose --coverage"
  },
  "devDependencies": {
   "eslint": "^5.13.0",
   "eslint-config-airbnb-base": "^13.1.0",
   "eslint-plugin-import": "^2.16.0",
   "jest": "^24.1.0"
 }
}
```

#### Unit tests

[Jest](https://jestjs.io/)

#### Continuous Integration

[Travis CI](https://travis-ci.org/)

`.travis.yml`

Status badge

#### Code coverage

`jest --coverage`

Coveralls??

### Other

* Zapier
* TypeForm
* Spreadsheets
* Mandrill
* ...

***

## Coding standards

All text formats should follow the guidelines provided in our [etiquette](https://github.com/Laboratoria/etiquette#writing), including
[plain text](https://github.com/Laboratoria/etiquette#plain-text) and
[markdown](https://github.com/Laboratoria/etiquette#markdown).

### [Javascript](https://github.com/airbnb/javascript)

[`eslint-config-airbnb-base`](https://github.com/airbnb/javascript)

```sh
yarn add -D eslint eslint-config-airbnb-base eslint-plugin-import
```

`.eslintrc`

`.eslintignore`

### Node.js

`v8` vs `v10`

`require` vs `import` ???

Package manager? `yarn` vs `npm` ???

`npm` in cli apps ???

### [React/JSX](https://github.com/airbnb/javascript/tree/master/react)

[`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/react)

### CSS

[`airbnb/css`](https://github.com/airbnb/css)

JSS??? Styled Components???

### HTML

???

### Shell

Bash???

***

## Git Workflow

Git Hooks?? Husky? @gmoura???

See [GIT_WORKFLOW.md](./GIT_WORKFLOW.md).

***

## Internationalisation, localisaion and translation

`react-intl`

***

## Releases

TBD

`tags`

`semver`

`npm version patch -m "bump to %s"`

***

## Deployment

* DNS
* SSL
* Node / Now
* Cloud functions
* Static hosting
* Atlas

***

## Code of conduct

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
