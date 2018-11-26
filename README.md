# Bloody Health Cycle Tracker

A menstrual cycle tracking app that's open-source and leaves your data on your phone. Use it to track your menstrual cycle or for fertility awareness!

## Development setup
1. Install [Android Studio](https://developer.android.com/studio/) - you'll need it to install some dependencies.

1. Either start a virtual device in Android Studio (or make sure it's already running, you should see a phone on your screen) or [set your physical device like your phone up](https://developer.android.com/training/basics/firstapp/running-app) to run the app.

2. Clone this repository:

    ```
    git clone git@gitlab.com:bloodyhealth/drip.git
    cd drip
    ```

4. Make sure you are running Node 8 or 9. It's easiest to switch Node versions using `nvm`. Here's [how to set it up](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
5. Run `npm install`
5. You may need to open your app's /android folder in Android Studio, so that it detects, downloads and cofigures requirements that might be missing, like the NDK and CMake to build the native code part of the project. Also check out nodejs-mobile repository for the necessary prerequisites for your system.
5. Run `npm run android`
7. In another tab, run `npm run log` to see logging output
8. Run `adb shell input keyevent 82` and select enable hot reloading (see https://facebook.github.io/react-native/docs/debugging.html)
9. We recommend installing an [ESLint plugin in your editor](https://eslint.org/docs/user-guide/integrations#editors). There's an `.eslintrc` file in this project which will be used by the plugin to check your code for style errors and potential bugs.

## Tests
You can run the tests with `npm test`.

## Debugging
When running into an old version of the app try to run the following command first:
`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

## NFP rules
More information about how the app calculates fertility status and bleeding predictions in the [wiki on Gitlab](https://gitlab.com/bloodyhealth/drip/wikis/home)
