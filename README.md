# little_list
a simple ionic + cordova app which displays a list of canned events, and navigates to a detail view for one of them

## Quick Start

ionic cordova platform add android

ionic cordova run android


### Notes

1. gulpfile.js is missing. Download from https://github.com/ionic-team/ionic-app-base/blob/master/gulpfile.js place the gulpfile.js in the top level of the ionic project

#### Getting this working in MMU Student Windows 10

You will find most of the apps needed to get LittleList to build and install on an android phone, but the OS set-up is a little idiosyncratic!

Android Studio and Android SDK 26 are already installed
MS VS Code is installed
npm and node are installed.

You will need to do the following, from the command line. Note: this is cmd.exe **not** powershell, or anything else.
* Install cordova

```
npm install -g cordova
```

* Install ionic
```
npm install -g ionic@3.20.0
```  

Note: The latest version (4.3) of the Ionic CLI contains a breaking change. Make sure you use the above version: 3.20.0


* check your installation:

For ionic:  

```
ionic -v
```

For cordova: 
```
cordova -v
```

... you may get a complaint that windows can't find ionic. This is largely due to the way that the OS has been set up with roaming profiles, so that you can use many machines if you need to.

if this happens, it means that you must put npm in your PATH

* add the following to you user-environment variable, PATH:
```
C:\Users\<your windows login number>\AppData\Roaming\npm
```
What's a user environment variable? ([Windows](https://www.computerhope.com/issues/ch000549.htm))


When you can successfully run ionic, you're on to trying a build!  

* Add the android platform to your project.
 * in the top-level of the project (where you can see config.xml) use the following command:

```
ionic cordova platform add android
```

* Adding the platform should go OK.


* Check you have a gulpfile.js in the top level of your project. If not, download it from https://github.com/ionic-team/ionic-app-base/blob/master/gulpfile.js  

* Check that you have Gradle installed.
```
gradle -v
```
We're running version 4.10

* If Gradle is not installed, go to https://gradle.org/install/
 * Download the zip file. DON'T use a package manager!
 * Create a folder in which to put Gradle: 
 ```
 H:\Documents\Gradle
 ```
 * Extract the contents of the .zip file here.
 * Note that you just installed the tool on your shared drive. This means you'll be able to build when you use another machine.
 * You now need to add the location of the Gradle binaries to your PATH environmnent variable:
 
 For example:
 ```
 H:\Documents\Gradle\gradle-4.10.2\bin
 ```


* you will need to add the ionic v1 toolkit  package to the ionic CLI:
(little_list is an ionic v1 project (yes, we're still using ionic v1 and angularjs. BECAUSE.))

```
npm i -D @ionic/v1-toolkit
```


* Now you're ready to try a build:

```
ionic cordova build android
```

This should create an android .apk file for you, in the little_list\code\little_list\platforms\android\app\build\outputs\apk\debug

* Android Studio is installed, but you will need to put the tools in your PATH before you can deploy to a phone.

```
C:\AndroidSDK\platform-tools
```

* connect up your android phone to your PC, using a USB cable. Make sure the device is ready to accept your deployed app:
 * You will need to do that special ['thing'](https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/) to get 'Developer Options' available.
 * In developer options, enable USB debugging.
* check that your device is available
```
adb devices
```

* you should see an entry for your device.



* Now give it a try:


```
ionic cordova run android
```


* Hey, presto! Little list is now on your device. You can step through it using VSCode, too. But you will need Cordova Tools installed. Make sure you 'attach to running app'.






