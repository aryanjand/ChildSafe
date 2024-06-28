# DNSGuard

DNSGuard is a mobile application designed to enhance internet security and privacy by allowing users to easily switch between different DNS servers provided by Cloudflare. The app provides options to use DNS servers for general use, malware protection, and adult content filtering. Future features will include encryption for DNS queries to further protect user privacy.

## Features

- Switch between Cloudflare DNS servers:
  - `1.1.1.1` (General purpose DNS)
  - `1.1.1.2` (DNS with malware protection)
  - `1.1.1.3` (DNS with malware and adult content filtering)
- User-friendly interface for easy DNS configuration
- Future updates to include DNS over HTTPS (DoH) and DNS over TLS (DoT) for encrypted DNS queries

## Getting Started

### Prerequisites

To run this project, you'll need to have the following installed on your system:

- Node.js and npm
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/DNSGuard.git
    cd DNSGuard
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

### Running the App

1. Start the Metro bundler:

    ```sh
    npx react-native start
    ```

2. Run the app on an Android device/emulator:

    ```sh
    npx react-native run-android
    ```

3. Run the app on an iOS simulator:

    ```sh
    npx react-native run-ios
    ```

### Usage

1. Open DNSGuard on your mobile device.
2. Select the desired DNS server (1.1.1.1, 1.1.1.2, or 1.1.1.3).
3. Confirm the DNS change.
4. Your device's DNS settings will be updated accordingly.

### Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Cloudflare for providing secure DNS services.
- The React Native community for their amazing framework and support.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
