# AngularJS Single Page Application (SPA)

This repository demonstrates how to create a **Single Page Application (SPA)** using **AngularJS**. It showcases the power of AngularJS to manage client-side navigation, where only parts of the page get updated based on user interaction, without requiring a full page reload. This makes your app faster and more responsive.

### Demo

View the live demo [here](https://mrtusarrx.github.io/spa-test/).

---

## Features

- **Routing**: The app uses the `ngRoute` module to enable client-side routing, making navigation smooth without page reloads.
- **Pages**:
  - **Home Page**: Displays a welcome message and serves as the entry point of the application.
  - **About Page**: Provides information about the developer and the project.
  
Additional features:
- **Template-driven architecture**: Each route in the app corresponds to a specific HTML template.
- **Dynamic Content Rendering**: Content updates dynamically as users interact with different routes.

---

## Project Structure

The project follows a modular structure where assets are separated into different folders. Below is a breakdown of the project directory:

/ (root directory) ├── index.html # Main HTML with navigation and ng-view placeholder for dynamic content ├── lib/ # JavaScript libraries │ └── app.js # Main AngularJS application logic, defines routes and controllers ├── app/ # HTML Templates │ ├── home.html # Template for the Home page │ └── about.html # Template for the About page └── res/ # Resources like styles └── styles.css # Custom CSS styles for the application


### Detailed Structure Explanation

- **index.html**: This is the entry point of the SPA. It contains the basic HTML structure and includes the necessary scripts (AngularJS, `app.js`, and `ngRoute`). It also has a `<base>` tag set for GitHub Pages routing and the `ng-view` directive, which serves as a placeholder for dynamically changing content.
  
- **app.js**: The JavaScript logic that initializes the AngularJS app and configures the routes using the `$routeProvider`. This file also defines controllers for each route.

- **home.html & about.html**: These are the template files that AngularJS loads based on the active route. They are lightweight HTML files with dynamic data bound using AngularJS controllers.

- **styles.css**: A simple CSS file that styles the app, making the pages look more visually appealing.

---

## How the SPA Works

### **Routing in AngularJS**
The core functionality of this SPA is **routing**. AngularJS uses the `$routeProvider` service to define the routing of the application. Instead of reloading the entire page, AngularJS dynamically loads the relevant templates and binds data to them.

For example:
- When the URL is `#!/home`, the app loads the `home.html` template.
- When the URL is `#!/about`, the app loads the `about.html` template.

### **ngRoute for Navigation**
In this app, `ngRoute` handles the client-side routing. The `$routeProvider` defines which templates to load for specific URLs and associates them with AngularJS controllers.

Here’s a simple breakdown:
- **Home Route** (`/`): Loads the `home.html` template and associates it with the `HomeController`.
- **About Route** (`/about`): Loads the `about.html` template and associates it with the `AboutController`.

This dynamic approach allows users to navigate between different sections of the site without page reloads, providing a smooth and fast user experience.

### **How the Application Loads**
1. **index.html**: The HTML file responsible for loading all essential dependencies (AngularJS, `app.js`, etc.) and defining the layout structure.
2. **app.js**: Contains all AngularJS configurations, including route definitions, controller logic, and application initialization.
3. **Templates (home.html, about.html)**: These HTML files define the content for each route.
4. **ng-view**: This directive in `index.html` is responsible for injecting the appropriate template when the route changes.

### **Base URL for GitHub Pages**
GitHub Pages requires special handling for paths. To ensure the routing works correctly, a `<base>` tag is included in `index.html` to adjust the paths for routing:

How to Run Locally

    Clone the repository:

git clone https://github.com/MrTusarRX/spa-test.git

Navigate to the project folder:

cd spa-test

Run a local development server (e.g., using http-server):

    npm install -g http-server
    http-server

    Open your browser and visit http://localhost:8080 to view the app locally.

How to Deploy to GitHub Pages

    Push your changes to GitHub.
    Enable GitHub Pages in the repository settings:
        Go to the repository on GitHub.
        Navigate to the "Settings" tab.
        Under the "Pages" section, set the Source to the main or master branch.
    Once the deployment is complete, GitHub will host the app at the following URL: https://mrtusarrx.github.io/spa-test/

About the Developer

This project was created by Tusar as a demonstration of building a Single Page Application (SPA) using AngularJS. The goal was to showcase how routing and templates can be managed in AngularJS to build dynamic, client-side web applications.
License

This project is licensed under the MIT License - see the LICENSE file for details.
