# CVApp tutorial






# I use macOS



## First (if you don't have NativeScript installed)
--> https://docs.nativescript.org/start/quick-setup


### 1) install node.js
download node.js by this link:  https://nodejs.org/


### 2) Install the NativeScript CLI
copy and paste the command for mac: sudo npm install -g nativescript
___________________________ for windows: npm install -g nativescript

You may be asked two questions during the installation—Do you want to visit the official documentation?, and Do you want to run the setup script? Go ahead and answer “No” to both questions for now as we’ll cover the documentation and scripts momentarily.

after that, running on the terminal : tns
it displays the aids of nativescript


### 3) Install iOS and Android requirements

#### Windows ______________________________________________________________________________________________

-->https://docs.nativescript.org/start/ns-setup-win

If you’re on Windows, copy and paste the script below into your command prompt as an administrator and press Enter:

Please be sure that you run this command in cmd as an administator (Windows key > type "cmd" > right click > Run as Administrator ).

@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"

During installation you may need to accept a User Account Control prompt to grant the script administrative privileges. Also, be aware that the script downloads and installs some big dependencies—so it’s common for the script to take a while to complete. When the script finishes, close and reopen your command prompt.


-----or, install step by step if you prefer


##### Install Chocolatey to simplify the installation and configuration of the requirements.

Run the command prompt as an Administrator.
Copy and paste the following script in the command :

@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

Restart the command prompt.

##### Install JDK 8

In the command prompt, run the following command.

choco install jdk8 -y

##### Install the Android SDK.

In the command prompt, run the following command.

choco install android-sdk -y

Restart the command prompt.

Install all packages for the Android SDK Platform 25, Android SDK Build-Tools 25.0.2 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages.

"%ANDROID_HOME%\tools\bin\sdkmanager" "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"


##### Install Android virtual devices (AVDs)

Go to Setup Android emulators: --> https://developer.android.com/studio/run/managing-avds.html
Follow the steps to create and start AVD with enabled HAXM.


On Windows systems you can only use the NativeScript CLI to develop Android apps. This is because the NativeScript CLI uses Xcode to build iOS apps, which is only available on the macOS operating system. If you’re interested in building iOS apps on Windows, you may want to try out the public preview of NativeScript Sidekick.


#### macOS ______________________________________________________________________________________________


If you’re on a Mac, copy and paste the script below into your terminal and press Enter:
ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"

-----or, install step by step if you prefer


##### Install the dependencies for iOS development

Run the App Store and download and install Xcode 5 or later.
Go to Downloads for Apple Developers, log in and download and install the Command Line Tools for Xcode for your version of macOS and Xcode.
Install the xcodeproj ruby gem with the following command.
sudo gem install xcodeproj

Install CocoaPods
sudo gem install cocoapods

(Optional) If you are using Xcode 7.3 as well as an older version of CocoaPods (0.39.0 or earlier), you must install the xcproj command-line tool by running brew install xcproj in your terminal. You can check your CocoaPods version with pod --version. (Homebrew is required)
brew install xcproj

##### Install the dependencies for Android development.

###### Install JDK 8.
Go to Java SE Downloads and click Download for JDK.   http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

In the Java SE Development Kit section, accept the license agreement and click the download link for macOS.
Wait for the download to complete and install the JDK.

Set the JAVA_HOME system environment variable.
export JAVA_HOME=$(/usr/libexec/java_home)

###### Install the Android SDK.

In the terminal, run the following commands:
brew cask install android-sdk

Next, run the following command to set the ANDROID_HOME system environment variable:

export ANDROID_HOME=/usr/local/share/android-sdk

NOTE: This is the directory that contains the tools and platform-tools directories.
In addition, install all packages for the Android SDK Platform 25, Android SDK Build-Tools 25.0.2 or later, Android Support Repository, Google Repository and any other SDKs that you may need. You can alternatively use the following command, which will install all required packages.

$ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"

###### Setup Android Emulators (AVD)

follow this : https://developer.android.com/studio/run/managing-avds.html







NB: after all. copy and paste this command To check if your system is configured properly: tns doctor

------------------------------------------------------------------------------------------------------------------------




## Second: launch android emulator
when you have all installed, you have to launch an android elulator, use these commands:
### mac OS
cd $ANDROID_HOME/tools

emulator -list-avds (in order to know the names of your emulators)

emulator -avd (emulator-name)

### windows
cd %ANDROID_HOME%/tools

emulator -list-avds (in order to know the names of your emulators)

emulator -avd (emulator-name)


NOTE: for ios, the emulator is  automatically launched when you run the project.


---------------------------------------------------------------------------------------------------------------------------


## Third : Launch the app

### Install dependancies
Use these commands in your terminal:

cd (path)/CVapp

npm install

### run the app on an Android emulator
tns run android

### run the app on an iOS emulator (only for mac os)
tns run ios



