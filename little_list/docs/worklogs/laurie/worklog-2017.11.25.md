### 2017-11-24 15:57:53
Created blank workspace:

```
ionic start little_list blank --type ionic1
```

Then

```
ionic cordova platform add android
```

2017-11-24 15:59:44 added this file

2017-11-24 16:01:00 create ./.vscode/launch.json

This seets up vscode to be able to debug on android.


```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run Android on device",
            "type": "cordova",
            "request": "launch",
            "platform": "android",
            "target": "device",
            "port": 9222,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "ionicLiveReload": false
        },
        {
            "name": "Run iOS on device",
            "type": "cordova",
            "request": "launch",
            "platform": "ios",
            "target": "device",
            "port": 9220,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "ionicLiveReload": false
        },
        {
            "name": "Attach to running android on device",
            "type": "cordova",
            "request": "attach",
            "platform": "android",
            "target": "device",
            "port": 9222,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        },
        {
            "name": "Attach to running iOS on device",
            "type": "cordova",
            "request": "attach",
            "platform": "ios",
            "target": "device",
            "port": 9220,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        },
        {
            "name": "Run Android on emulator",
            "type": "cordova",
            "request": "launch",
            "platform": "android",
            "target": "emulator",
            "port": 9222,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "ionicLiveReload": false
        },
        {
            "name": "Run iOS on simulator",
            "type": "cordova",
            "request": "launch",
            "platform": "ios",
            "target": "emulator",
            "port": 9220,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "ionicLiveReload": false
        },
        {
            "name": "Attach to running android on emulator",
            "type": "cordova",
            "request": "attach",
            "platform": "android",
            "target": "emulator",
            "port": 9222,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        },
        {
            "name": "Attach to running iOS on simulator",
            "type": "cordova",
            "request": "attach",
            "platform": "ios",
            "target": "emulator",
            "port": 9220,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        },
        {
            "name": "Serve to the browser (ionic serve)",
            "type": "cordova",
            "request": "launch",
            "platform": "serve",
            "cwd": "${workspaceRoot}",
            "devServerAddress": "localhost",
            "sourceMaps": true,
            "ionicLiveReload": true
        },
        {
            "name": "Simulate Android in browser",
            "type": "cordova",
            "request": "launch",
            "platform": "android",
            "target": "chrome",
            "simulatePort": 8000,
            "livereload": true,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        },
        {
            "name": "Simulate iOS in browser",
            "type": "cordova",
            "request": "launch",
            "platform": "ios",
            "target": "chrome",
            "simulatePort": 8000,
            "livereload": true,
            "sourceMaps": true,
            "cwd": "${workspaceRoot}"
        }
    ]
}
```
You will also need the vscode extension:
Cordova Tools by Visual Studio Mobile Tools

2017-11-24 16:05:33 On 'debug' in vscode, use the run option "Run Android on device".

OK! Runs on device.


2017-11-25 07:27:22

Added:
moment - useful date formatting libarary
this needs to wrapped in an angular service


Added: 
./events:
events.module.js 
events.service.js
events.list.controller.js	
events.list.html		
events.update.controller.js
events.update.html
events.detail.controller.js
events.detail.html

... added these as scripts to index.html

... and making mods to app.js in order to be able to sub the template html in to the doc:

1. added eventjs module
1. injected $state
1. used it to tell the app to go into the "event_list" state immediately.


Notes: 

The use of the events.module.js defines a set of controller which are instantiated as the the app moves through a set of states. The module registers these staes when it is read by the angular framework.

All the controllers within the module know about the states to call within that module. 

If you define another module which defines another set of controllers, then you will have to watch out for namespace clashes. Name your states differently.








