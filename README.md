# Spentless. Mobile

[![Build Status](https://travis-ci.com/SpentlessInc/spentless-mobile.svg?branch=master)](https://travis-ci.com/SpentlessInc/spentless-mobile)

# Description
This is a react-native mobile Spentless application.

## How to run?
1. Create an .env file at the root of the project that is the same as .env.example
    * APP_MODE: dev/staging/production
    * API_HOST:
        * if you're using docker server: your local machine IP address and port
        * if you're using staging server: hostname of staging API server
2. Install dependencies:
```
yarn install
```
3. Run the application:
```
yarn start
```

## How to debug?
1. Install React Native Debugger application. [Here you can find package for your OS.](https://github.com/jhen0409/react-native-debugger/releases) 
2. Open application on your phone using expo.
3. Shake the phone in order to open dev menu.
4. Enable remote debug js.
5. In the React Native Debugger press: `Ctrl + t`
6. Set port to 9001 and press `Confirm`
7. Here you go ...


## Other

#### How to run local server?
Follow the instructions placed in this repository: [spentless-infrastructure](https://github.com/SpentlessInc/spentless-infrastructure)

#### How to get local IP Address
Run the following command in you terminal. The first IP address from the input will be your IP address.
Here is an example:
```
-> hostname -L
192.168.1.106 172.18.0.1 172.17.0.1
```
