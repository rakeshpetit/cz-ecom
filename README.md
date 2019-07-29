## Building and running
For Mac OS, yarn buildAndStartIOS
For Windows, yarn buildAndStart

But make sure the required dependencies such as expo, CRNA, tsc, etc are installed.
1. yarn global add expo-cli
2. yarn global add create-react-native-app
3. yarn global add typescript

Since the App uses typescript, src and build directories are used as rootDir and outputDir as specififed in the tsconfig.json which gets converted during the build process.
## Testing the App
yarn test