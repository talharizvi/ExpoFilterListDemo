# Expo Filter List Demo

Expo Filter List Demo is a React Native application that demonstrates the display and filtering of a list of users based on their types (Admin or Manager). The app fetches user data from api and allows users to filter the list by selecting a user type. The project showcases the use of Expo for building cross-platform mobile applications and includes unit tests to ensure the reliability of the codebase.

## Features

- Display a list of users fetched from api.
- Filter users based on their types (Admin or Manager).
- Runs on both iOS and Android platforms.
- Unit tests to verify the functionality of components and utilities.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/talharizvi/ExpoFilterListDemo.git`
2. Navigate to the project directory: `cd ExpoFilterListDemo`
3. Install dependencies: `npm install`
4. Start the Expo development server: `npm start` or `expo start`
5. Open the Expo client on your device or emulator and scan the QR code to launch the app.

## Code Structure

- **components**: Contains reusable UI components such as `CategoryHeader`, `CustomRadioButton`, `LineSeparator`, and `UserListItem`.
- **hooks**: Includes a custom hook `useFetchUserData` for fetching user data from the api.
- **screens**: Contains the main screens of the application. In this project, the `CustomersScreen` component is rendered from the screens folder.
- **utils**: Contains utility functions such as `filterUsersByType` for filtering users based on their types.

## Testing

The project includes unit tests for all components and utilities. Jest and React Native Testing Library are used for testing, ensuring the reliability and correctness of the codebase. Tests cover various scenarios, including data fetching, loading states, filtering, and UI rendering.

## Technologies Used

- React Native
- Expo
- TypeScript
- Jest
- React Native Testing Library

## Challenges Faced

During the development of this project, several challenges were encountered:

- **Testing Async Behavior**: Testing asynchronous behavior, such as data fetching and loading states, required careful handling of async operations within test cases.
  
- **Component Interaction**: Ensuring proper interaction between components and updating the UI accordingly, required thorough testing and validation.
