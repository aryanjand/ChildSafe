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
