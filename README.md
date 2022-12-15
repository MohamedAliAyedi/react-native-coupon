Camion is using the React Native Framework.

- **React native**: Native runtime for the cross app [React](https://reactnative.dev/)

**📖 Glossary**

- [👩‍🏫 Coding Guidelines](#-coding-guidelines)
- [🔍 Repo Structure](#-repo-structure)
- [🚀 Installation](#-installation)
- [:zap: Run the app](#zap-run-the-app)
- [🛠 Test your code](#-test-your-code)
- [🕹 Sandbox mode](#-sandbox-mode)
- [🔬 Distribute testing applications](#-distribute-testing-applications)
- [🔧 Codemagic](#-fastlane)

# 👩‍🏫 Coding Guidelines

## Global

# Project react-native-coupon
## Progress ...
![ScreenShot](https://raw.githubusercontent.com/MohamedAliAyedi/react-native-coupon/main/Screenshot/Project_1.png)
![ScreenShot](https://raw.githubusercontent.com/MohamedAliAyedi/react-native-coupon/main/Screenshot/Project_2.png)

## testing application APK 0.0.1

[Download APK](https://github.com/MohamedAliAyedi/react-native-coupon/Screenshot/app-test.apk "download")

# 🔍 Repo Structure

```
src => Application sources
├── App.tsx => Layout
│── assets => Assets
│   ├── fonts => Fonts
│   ├── icons => Icons
│   ├── images => Images
├── components => Created components (Need a refactoring)
│──   config => Configuration
│   ├── api-constants => Api(s) of project
│   ├── constants => constants
│   ├── global-styles => Global css of project
│   ├── helpers => Global function needed in project
│   ├── i18n => Translate files (ar/en)
│   ├── interceptor => api fetcher
│   ├── navigation => map of project
├── redux => Session holder
├── Screens => Feature screens
├── services => Created services (Need a refactoring)

android => Build source directory android.
ios => Build source directory for ios.
.husky => pre commits.
```

# 🚀 Installation

[🛠 Install the required tools](https://reactnative.dev/docs/environment-setup)

## Setup (macOs and Linux way)

Steps:

1. Install dependencies with `Yarn`
2. Run `yarn` or `yarn install`
3. Compile source on native mode

## Reset the project

```sh
yarn reset
```

Steps:

1. Delete `node_modules` folder
2. Delete `www` folder
3. Run `yarn` or `yarn install`

## 📱 Developer mode

Build app sources and watch them to do a livereload.

```sh
# default ENV=development

# To run app in android emulator
yarn android

# To run app in IOS emulator ( ! this need macOS )
yarn ios

```

## 🎁 Build an app release package

This command produces a release application package.
This is the one that is sent to app stores.

> 💡 Release packaging is built by the CI. You should not need to run this command locally.

Steps:

1. Build app sources with `react-native link`
2. Build a signed application package (iOS or android)

```sh
# Android
yarn release

#IOS
# We need to open xcode and genrate a relase version
```

# 🛠 Test your code

To test all at once:

```sh
npm test
```

To watch your changes, run `npm start`, then:

```sh
yarn test:watch
```

To test one file, you can specify it by an env variable:

```sh
KARMA_TEST_FILES=app/App.spec.js yarn test[:watch]
```

To test files that are written the modern way (EsModule / TS) you can use which is way more quick (because it works outside the build).

Beware that you will need to adapt the test code to modern requirements
ex: no globals except mocha's (describe / it, ...)

To lint the code

```sh
npm lint
```

# 🕹 Sandbox mode

The sandbox is an environment for developing components.

[📚 How to use it]( under develop)

# 🔬 Distribute testing applications

Testing applications aim for QA and product to test the current work.

Applications are automatically deployed for the following branches:

- `develop`
- `main/*`

## Build a new App

You can create an new app and build automatically on a specific branch by running this command and follow the instructions:

```sh
yarn create:appcenter
```

It will create necessary configuration files to trigger a build on each commit.

[📚 See more](https://codemagic.io/apps)

## App center Access

1. Ask for an **invite** to organization.
2. After you receive the mail, **Sign in** to with your google account.
3. Follow the instructions to install the app on your mobile phone.

### For iOS users

To register a new device, follow this documentation: [App Center iPhone access](https://developer.apple.com/documentation/xcode/distributing-your-app-to-registered-devices)

# 🔧 Codemagic CI

[Codemagic](https://fastlane.tools/) is automated the deployment of the application.

It is responsible to build and deploy the app:

- Download certificates
- Run application package command
- Upload packages to the right platform
- Notify on slack

Fastlane commands are ran by the CI.

## Deploy two factor authentication

To sign iOS packages, we need to provide a token to the CI.

This token is sent on a real phone by Apple.

This is hard to script so a manual manipulation has to be done during the release process.

You can find more information following [this link](https://docs.fastlane.tools/best-practices/continuous-integration/#two-step-or-two-factor-auth)
