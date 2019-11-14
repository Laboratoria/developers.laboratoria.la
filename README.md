# Laboratoria Developers Chapter

**The Developers Chapter at Laboratoria is a community made up of all the
developers within the organisation**. That includes any Laboratorian that fits the
developer profile: _developers_ working on software products, _coaches_, ...

The DevsChapter's **main goal is to promote peer learning, sharing and
cross-pollination across teams**. The community has a bunch of resources to
enable collaboration, sharing and support among devs.

The DevsChapter **also serves the purpose of providing design, implementation
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
  - [Office Hours](#office-hours)
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
    + [L4B](#)
    + [www.laboratoria.la](#www.laboratoria.la)
    + [community.laboratoria.la](#community.laboratoria.la)
* [Stack](#stack)
  - [Core](#core)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Testing, building and CI](#testing-building-and-CI)
  - [Other](#other)
* [Coding standards](#coding-standards)
  - [JavaScript](#javascript)
  - [Node.js](#nodejs)
  - [React/JSX](#reactjsx)
  - [CSS](#css)
  - [HTML](#html)
  - [Shell](#shell)
* [Git Workflow](#git-workflow)
* [Dependency management](#dependency-management)
* [Internationalisation](#internationalisation)
* [Releases](#releases)
* [Deployment](#deployment)
  - [Domains](#domains)
  - [DNS](#dns)
  - [SSL](#ssl)
  - [Node.js modules and CLI tools](#nodejs-modules-and-cli-tools)
  - [Node.js servers](#nodejs-servers)
  - [Cloud functions](#cloud-functions)
  - [Static hosting](#static-hosting)
  - [Databases](#databases)
  - [Continuous delivery](#continuous-delivery)
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
| [laboratoria-ui](https://github.com/Laboratoria/ui) | [@gmoura](https://github.com/gmoura) [@RuthMeryCardenas](https://github.com/RuthMeryCardenas) | It's our React Components library, extended from [Material-UI](https://material-ui.com/). The proposal is to standardize our components and Laboratoria's brand in our products.
| [react-project-example](https://github.com/Laboratoria/react-project-example) | [@gmoura](https://github.com/gmoura) | It's our React Project example, based on [create-react-app](https://github.com/facebook/create-react-app) with some features that all projects in Laboratoria must/should be have.
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

Job Placement App

It's public website to show your graduate's profile to the hiring companies.

* PM: [@andreamarianalm](https://github.com/andreamarianalm)
* Tech lead: [@gmoura](https://github.com/gmoura)
* Devs: [@rafaelbcerri](https://github.com/rafaelbcerri)
* Kanban: https://github.com/Laboratoria/talento.laboratoria.la/projects/3
* Tracker: https://github.com/Laboratoria/talento.laboratoria.la/issues
* Architecture: https://github.com/Laboratoria/talento.laboratoria.la/wiki/Architecture
* Git Workflow: https://github.com/Laboratoria/talento.laboratoria.la/wiki/Git-workflow
* Stack: https://github.com/Laboratoria/talento.laboratoria.la/wiki/Stack
* URL: https://app.talento.laboratoria.la/

#### [admission.laboratoria.la](https://github.com/Laboratoria/admission.laboratoria.la)

An application for applicants of Laboratoria to go through the admission process.

* PM: [@danielasarzosa](https://github.com/danielasarzosa)
* Tech lead: [@xpktro](https://github.com/xpktro)
* Devs: [@arku](https://github.com/arku)

#### alumnae.laboratoria.la

* PM: Franco???
* Tech lead: [@FabianBravoA](https://github.com/FabianBravoA)
* Devs: [@AnaSalazar](https://github.com/AnaSalazar)

#### [laboratoria-admin](https://github.com/Laboratoria/admin)

CLI tool used for amdin tasks related to API and LMS.

* Tech lead: [@lupomontero](https://github.com/lupomontero)

#### L4B???

* PM: [@claudiaalf](https://github.com/claudiaalf)

#### www.laboratoria.la

Instapage???

#### [community.laboratoria.la](http://community.laboratoria.la/)

???

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

```yml
language: node_js
node_js:
  - 8
  - 10
```

Status badge

#### Code coverage

```sh
npx jest --coverage
xdg-open coverage/lcov-report/index.html
```

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

## Dependency management

When and how to upgrade deps.

Semver (`^`, `~` and pinning deps).

`npm` vs `yarn`

Lock files (when to add to git and when not to).

***

## Internationalisation, localisaion and translation

`react-intl`

***

## Releases

We aim to use Git, GitHub, NPM and Travis for all (or most) repos, and our
release process relies heavily on these. By this we mean that releases MUST:

1. Pass all tests (`npm test`).
2. Have coverage above 80% (`npx jest --coverage`).
3. Increase the version number in `package.json`.
3. Be _tagged_ using the following format: `v` followed by a [`semver`](https://semver.org/)
   version (ie: `v1.0.0`, `v2.3.11`, `v2.0.0-alpha.1`, ...).
4. Push tag to _upstream_'s `master` branch.
5. Include _title_, _description_, _changelog_, upgrade instructions, ... in
   GitHub release.
6. Be installable via `npm i Laboratoria/repo-name#version-tag` is an `npm`
   _module_ or CLI tool.
7. Be _deployable_ via `npm deploy`.

Example using `git` and `npm` (with manual deploy):

```sh
# Releases are normally tagged from `master`, so we switch to `master` if we are
# on a different branch.
git checkout master

# Merge in `develop` branch if not already merged.
git merge develop

npm test
npx jest --coverage

# Run build if required
npm run build

# The following command increases the "patch" number in `package.json` and adds
# a new `git` "tag" (ie: for version 1.0.0 it creates tag "v1.0.0").
npm version patch -m "bump to %s"

# We can also increase minor and major numbers with `npm version`:
# npm version minor -m "bump to %s"
# npm version major -m "bump to %s"

# Once we have tagged our release we push the new tag to upstream master
git push upstream master --tags

# Check Travis build

npm run deploy

# Go back to develop branch and update it with master's changes
git checkout develop
git merge master
git push upstream develop
```

### A few notes on version numbers and semver

We adhere to the Semantic Versioning as described here: https://semver.org/

We also use `git` _tags_ with a `v` followed by the release number.

#### Releases

* Major (new API, breaking changes)
* Minor (new features, internals, backwards compatible non-breaking changes)
* Patch (hot fixes and minor patches)

Example: `2.1.3` (major: `2`, minor: `1`, patch: `3`)

#### Pre-releases

The same as with _releases_, but adding the `alpha`, `beta` or `bc` plus a
number. Pre-releases are not normally used for _patches_.

* `alpha`: implies unstable implementation in design stage.
* `beta`: denotes a _pre-release_ is ready to be tested with _users_ in a
  controlled environment, still open to changes and redesign.
* `rc`: (_release candidate_) is used when design is locked and only minor issues
  are still to be addressed.

For example:

`2.0.0-alpha.1` < `2.0.0-alpha.2` < `2.0.0-beta.1` < `2.0.0-rc.1` < `2.0.0-rc.2` < `2.0.0` < `2.0.1` < `2.1.0` < `3.0.0-alpha.1`

***

## Deployment

Each repo should have detailed deployment documentation available in the repo's
`README.md` file. In this document we aim to provide some context and guidelines
for different kind of repos.

### Domains

Our domain name registrations are managed via [Digital Ocean](https://www.digitalocean.com/).

* `laboratoria.la`

### DNS

We currently use [Digital Ocean](https://www.digitalocean.com/) to manage DNS. A
proposal was made a while ago to move DNS to CloudFlare in order to get DDoS
protection as well as free SSL and other useful features.

### SSL

???

* [x] https://www.laboratoria.la/ (???)
* [x] https://api.laboratoria.la/ (SSL provided by Firebase)
* [x] https://lms.laboratoria.la/ (SSL provided by Firebase)
* [x] https://app.talento.laboratoria.la/ (???)
* [x] http://developers.laboratoria.la/ (SSL provided by GitHub Pages)
* [ ] http://community.laboratoria.la/ :warning:

### Node.js modules and CLI tools

For the time being we are using GitHub releases for our `npm` _modules_ and CLI
tools. This means that modules can be installed via
`npm i Laboratoria/repo-name#tag`, or adding to your `package.json`.

Example as dependency in `package.json`:

```json
{
  "dependencies": {
    "schemas": "Laboratoria/schemas#v1.0.0-alpha.3"
  }
}
```

Example installing the `curriculum-parser` globally:

```sh
# install current release
npm i -g Laboratoria/curriculum-parser

# install a specific version
npm i -g "Laboratoria/curriculum-parser#v2.0.0-alpha.2"
```

GitHub vs NPM Orgs???

### Node.js Servers

Zeit.co vs Docker vs VM

talento.laboratoria.la y api-next???

### Cloud functions

Firebase functions

### Static hosting

* Firebase hosting
* ...

### Databases

Firestore

MongoDB

Atlas vs Docker vs VM

### Continuous delivery

Projects requiring _deployment_ to 3rd party service (ie: Firebase, Zeit, NPM,
...) should aim to use _continuous delivery_ using
[Travis' Deployment features](https://docs.travis-ci.com/user/deployment).

Let's see an example using a custom script to deploy Firebase.

Let's start with the `package.json`. The important thing here is that we have
a `deploy` key in `scripts`:

```json
{
  "scripts": {
    "deploy": "firebase deploy"
  },
  "dependencies": {
    "firebase-tools": "6.4.0"
  }
}
```

This will allow us to manually invoke our deploy command:

```sh
npm run deploy

# or passing some flags...
npm run deploy --project staging-env
npm run deploy --only functions
```

Now that we have defined our `deploy` task as an `npm-script`, let's look at the
deploy script that we want Travis to trigger. In this example we will use a
shell script (ie: `scripts/deploy.sh`):

```sh
#! /usr/bin/env bash

deploy() {
  echo "Deploying to project ${1}..."
  npm run deploy --project ${1} --token "$FIREBASE_TOKEN"
}

if [[ "${TRAVIS_TAG}" == v* ]]; then
  deploy production-env
elif [[ "$TRAVIS_BRANCH" == "develop" ]]; then
  deploy staging-env
else
  echo "ignoring branch ${TRAVIS_BRANCH}..."
  exit 0
fi
```

As we see in our script, we are assuming an environment variable called
`FIREBASE_TOKEN` exists (and hopefully with the right value). We do not want to
add _secrets_ like this token to the source code, and we want to make sure they
remain secret. To achieve this we use [encrypted environment variables](https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml).
To do so you will need to install the [`travis` CLI tool](https://github.com/travis-ci/travis.rb#installation).

```sh
gem install travis -v 1.8.9 --no-rdoc --no-ri
```

Now that we have the `travis` CLI, we can create a Firebase CI token and then
encrypt it.

```sh
# This generates a token, e.g. "1/AD7sdasdasdKJA824OvEFc1c89Xz2ilBlaBlaBla"
firebase login:ci

# Encrypt the token
travis encrypt FIREBASE_TOKEN="1/AD7sdasdasdKJA824OvEFc1c89Xz2ilBlaBlaBla" --add
```

The `--add` flag in the previous command should automatically add the encrypted
variable to your `.travis.yml`. Now it's time to add the `deploy` (and
optionally `before_deploy` keys to our `.travis.yml`:

```yml
language: node_js
node_js:
  - 10
env:
  - secure: "XXXXXXXXXXXX="
before_deploy:
  - echo "Do something before deploying!"
deploy:
  provider: script
  script: ./scripts/deploy.sh
  skip_cleanup: true
  on:
    repo: Laboratoria/some-repo
    all_branches: true
```

***

## Code of conduct

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
