# Shopping Zone

A React Native shopping experience built with Expo. Shopping Zone covers the customer journey from browsing products to managing a cart, placing an order, and viewing account details.

## Features

- Product browsing and detail screens
- Cart state and quantity management with Redux
- Checkout, payment, and order-success flows
- Profile and account screens
- Stack navigation with React Navigation
- Reusable UI components with React Native Paper and Expo icons

## Tech Stack

- React Native 0.74
- Expo SDK 51
- Redux Toolkit and React Redux
- React Navigation
- Axios
- React Native Paper

## Getting Started

### Prerequisites

- Node.js LTS
- npm
- Expo Go on a physical device, or an Android/iOS simulator

### Install and run

```bash
git clone https://github.com/Prasanth-sakunala/shopping-zone.git
cd shopping-zone
npm install
npm start
```

Use the Expo CLI prompts to open the app on Android, iOS, or the web:

```bash
npm run android
npm run ios
npm run web
```

## Project Structure

```text
components/   Shared header and navigation UI
screens/      Product, cart, checkout, order, and profile screens
redux/        Cart state, actions, reducers, and store setup
assets/       App assets
App.js        Application entry point
```

## License

No license is currently specified for this repository.
