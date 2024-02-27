# czfe
This is next js 14 project.

# Steps to create a basic Next.js project
- Installation and Setup
  Install the latest LTS version of Node.js from the official website. To confirm the installation and to check the version installed run the command "node -v".
- Creation
  To start installation of a new Next.js app run the command "npx create-next-app app_name" or "npm create-next-app app_name" or "yarn create-next-app app_name". After running any one 
  of the afore mentioned commands, answer a set of questions with a simple Yes or No, namely would you like to use Typescript/ESlint/Tailwind CSS/`src\` directory/App Router/customise 
  the default import alias to complete the process.
- Run the application
  Once the installation process of our basic Next.js project is done, enter the current working directory by running the command "cd app_name" and then run the command "npm run dev" or 
  "yarn dev".

# Steps to build an android and ios app using capacitorjs
- Create a basic Next.js project by following all the neccessary steps.
- Install Capacitor
  Firstly to convert it into a mobile app we need to install few dependencies. To do the same run the commands "npm i @capacitor/core" and "npm i -D @capacitor/cli".
- Initialise Capacitor config
  Then run the command "npx cap init" and decide a Package ID. Now in the capacitor.config.json file change a value-key pair- instead of "webDir": "public" make it "webDir": "out".
- Create Android and iOS projects
  To install Android and iOS platforms run the command "npm i @capacitor/android @capacitor/ios". After the platforms are added to the package.json run the command "npx cap add 
  android" and "npx cap add ios" to create Android and iOS projects to the native application.
- Creating the outn folder
  Add the line (output: 'export',) in the nextConfig function in the next.config.js file. Afterwords run the command "npm run build".
- Syncronizing all the files
  Run the command "npx cap sync".
- Before proceeding with this step make sure that Android Studio and Xcode are already installed. Now to open the app in simulator run the command "npx cap open ios" for iOS app and 
  "npx cap open android" for Android app.
