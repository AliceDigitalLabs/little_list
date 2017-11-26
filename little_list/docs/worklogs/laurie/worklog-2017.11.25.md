### 2017-11-26 19:44:37

Checked download of .zip file from https://github.com/AliceDigitalLabs/little_list

expanded, and then called:

```
adanac:little_list coops$ pwd
/Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list
```
```
adanac:little_list coops$ npm install

> node-sass@4.7.2 install /Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list/node_modules/node-sass
> node scripts/install.js

Cached binary found at /Users/coops/.npm/node-sass/4.7.2/darwin-x64-57_binding.node

> node-sass@4.7.2 postinstall /Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list/node_modules/node-sass/vendor/darwin-x64-57/binding.node
Testing binary
Binary is fine
npm WARN little_list@0.0.1 No repository field.
npm WARN little_list@0.0.1 No license field.

added 403 packages in 16.963s
```

```
adanac:little_list coops$ ionic cordova platform add android

? The Ionic CLI has an update available (3.13.0 => 3.19.0)! Would you like to in
stall it? No
[INFO] Not automatically updating your CLI.
> cordova platform add android --save
✖ Running command - failed!
[ERROR] Exception: Using cordova-fetch for cordova-android@^6.2.3

        Adding android project...
        Creating Cordova project for the Android platform:
        	Path: platforms/android
        	Package: io.ionic.starter
        	Name: MyApp
        	Activity: MainActivity
        	Android target: android-26
        Subproject Path: CordovaLib
        Android project created with cordova-android@6.4.0
        Error: Source path does not exist: 
        resources/android/icon/drawable-hdpi-icon.png
```

This is me not checking the resources folder. Must be some bad with.gitignore?

.gitignore shows /resources. Which means this isn't being checked in. Don't know why this should be in the .gitignore if it causes problems. 

Ah. Should have removed the platform before checking in, or checked in the resources. Makes sense.

2017-11-26 19:55:35 Copied resources over from original project, and checked in.

Trying again.

```
        
adanac:little_list coops$ ionic cordova platform add android
> cordova platform add android --save
✖ Running command - failed!
[WARN] Platform already added. Saving platforms to config.xml.
> cordova platform save
✔ Running command - done!
```

Now trying to run

```
adanac:little_list coops$ ionic cordova run android
> cordova platform add android --save
✖ Running command - failed!
[WARN] Platform already added. Saving platforms to config.xml.
> cordova platform save
✔ Running command - done!
[ERROR] Gulpfile (or dependent module) not found: ./gulpfile.js

        For custom Gulpfile locations, you can run ionic config set gulp.file 
        <path>. Otherwise, the default Ionic Gulpfile can be downloaded from 
        https://github.com/ionic-team/ionic-app-base/blob/master/gulpfile.js
        
        Or, if you don't use gulp, you can disable it by running ionic config 
        set gulp.enabled false.
        Full error:
        
        Error: Cannot find module 
        '/Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list/gulpfile.js'
            at Function.Module._resolveFilename (module.js:485:15)
            at Function.Module._load (module.js:437:25)
            at Module.require (module.js:513:17)
            at require (internal/module.js:11:18)
            at 
        /usr/local/lib/node_modules/ionic/node_modules/@ionic/cli-utils/lib/gulp.js:32:13
            at Generator.next (<anonymous>)
            at fulfilled 
        (/usr/local/lib/node_modules/ionic/node_modules/tslib/tslib.js:100:62)
            at <anonymous>
```

No gulpfile.js
Not sure if we needed this, or why it wasn't checked in.
Interestingly, the original project has one. Wondered if it was generated on creating the platform.
Will remove platform and re-instate
.
```
adanac:little_list coops$  ionic cordova platform remove android
> cordova platform remove android --save
✔ Running command - done!
Removing platform android from config.xml file...
Removing android from cordova.platforms array in package.json
adanac:little_list coops$  ionic cordova platform add android
> cordova platform add android --save
✔ Running command - done!

```

Tried again, but same error. Checked the repo. No gulpfile.js.
Ah. I had been building and running the app with visual studio code. This is using Gradle. (Actually, that's a misleading statement. All I know is that it runs OK with visual studio; I haven't used the command line on the that build, and there is no gulpfile.js checked in. ERG: there was no gulpfile to begin with, because I was using different tools.)
Right. SoI don't think we have been using gulp to build.
Will take the advice: 
"if you don't use gulp, you can disable it by running ionic config 
        set gulp.enabled false."

```
ionic config set gulp.enabled false
[OK] gulp.enabled set to false in ./ionic.config.json!
adanac:little_list coops$ ionic cordova run android
[ERROR] Gulpfile (or dependent module) not found: ./gulpfile.js

        For custom Gulpfile locations, you can run ionic config set gulp.file 
        <path>. Otherwise, the default Ionic Gulpfile can be downloaded from 
        https://github.com/ionic-team/ionic-app-base/blob/master/gulpfile.js
        
        Or, if you don't use gulp, you can disable it by running ionic config 
        set gulp.enabled false.
        Full error:
        
        Error: Cannot find module 
        '/Users/coops/Documents/playpen/checking/little_list-master/little_list/code/little_list/gulpfile.js'
            at Function.Module._resolveFilename (module.js:485:15)
            at Function.Module._load (module.js:437:25)
            at Module.require (module.js:513:17)
            at require (internal/module.js:11:18)
            at 
        /usr/local/lib/node_modules/ionic/node_modules/@ionic/cli-utils/lib/gulp.js:32:13
            at Generator.next (<anonymous>)
            at fulfilled 
        (/usr/local/lib/node_modules/ionic/node_modules/tslib/tslib.js:100:62)
            at <anonymous>
```

OK. That didn't work either. I will do the next thing:
Downloaded from:
https://github.com/ionic-team/ionic-app-base/blob/master/gulpfile.js

And placed in top level.

OK. This worked, because I am running a different build system on VSCode.


Now we get to the blank screen issue. This is because the momentjs module has a dependency on angular, which is an external dependency, and nothing to do with Ionic...?

Moving the libs over to check. ... and the build run properly. Looks like the .gitignore was pants.

Fixed the .git ignore. Hoping this now works OK! Will check-in and do another check from fresh.



-------------------------

2017-11-26 20:52:10 

Downloaded fresh from https://github.com/AliceDigitalLabs/little_list

Expanded .zip 

```
adanac:little_list coops$ npm install
npm WARN little_list@0.0.1 No repository field.
npm WARN little_list@0.0.1 No license field.
``` 

Tried

```
ionic cordova add android
```

but got error saying platform already exsits. This is because it exists in the ionic side of things. But we know it doesn't exist in the cordova side of things, because we didn't check it in. We just need to do this:

```
cordova add android
```

so that the the plaform is added properly to the filesystem.

Now the 

```
ionic cordova run android 
```

works fine :-)






