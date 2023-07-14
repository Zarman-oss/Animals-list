# React Animal App

This is a simple React application that displays images of animals when a button is clicked. It demonstrates the usage of `useState` to manage state in React, importing photos into your application, and handling click events.

## Getting Started

To get started with this application, follow the instructions below:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/react-practice-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-animal-app
   ```

3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

Once you have the application running, you will see a button labeled "Show Animal." Clicking this button will display a random animal image on the screen. Each time you click the button, a different animal image will be shown.

## Features

This application demonstrates the following features:

- Use of `useState` hook to manage state in React.
- Importing photos into a React application.
- Handling click events to trigger actions.

## Directory Structure

The project directory is structured as follows:

```
react-practice-project/
  ├── src/
  │   ├── components/
  │   │   └── Animal.js
  │   ├── svg/
  │   │   ├── cat.svg
  │   │   ├── dog.svg
  │   │   └── bird.svg
  │   └── App.js
  ├── public/
  ├── package.json
  ├── package-lock.json
  └── README.md
```

- The `src/` directory contains the main source code for the React components and images.
- The `src/components/` directory contains the `Animal` component responsible for displaying the animal images.
- The `src/svg/` directory contains the animal images used in the application.
- The `src/App.js` file is the entry point of the application.
- The `public/` directory contains the static assets and the `index.html` file.
- The `package.json` file contains the project configuration and dependencies.

Feel free to explore and modify the code to customize the application as per your requirements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This application was created as a learning exercise to demonstrate the usage of `useState`, importing photos, and handling click events in React. Feel free to use it as a starting point for your own projects or as a reference for learning React.
