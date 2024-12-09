# Chat Widget Customization SPA

This **Single Page Application (SPA)** allows users to customize a chat widget in real-time. The application provides an intuitive interface to modify various aspects of the widget’s appearance, preview changes instantly, and save or load configurations with ease.

---

## **Table of Contents**
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [Known Issues](#known-issues)

---

## **Key Features**
1. **Live Configuration**:
   - Users can modify chat widget settings such as bot name, font family, colors, and images for the avatar or launcher.
2. **Real-Time Preview**:
   - Preview updates dynamically as users make changes.
3. **Save and Load Configurations**:
   - Download customized configurations as JSON files.
   - Load previously saved configurations to continue customization.
4. **Customizable Options**:
   - Config Name
   - Bot Name
   - Font Family
   - Header Color
   - Header Font Color
   - Background Color
   - Chat Font Color
   - Avatar Image
   - Launcher Image

---

## **Technologies Used**
- **React 18**: For building a dynamic user interface.
- **Redux Toolkit**: Simplified state management.
- **Tailwind CSS**: For responsive and modern styling.
- **react-color**: Color picker library for seamless color selection.

---

## **Prerequisites**
Before starting, ensure you have the following installed:
- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later)

---

## Installation and Setup

1. Navigate to the project directory:
   ```
   cd chat-widget-customizer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
Once the server starts, the application will be available at `http://localhost:3000`.


* * * * *

**File Structure**
------------------

The project follows a modular structure for better scalability and maintainability:


```plaintext
dashboard-project/
├── public/
│   ├── index.html           # Main HTML file
│   └── ...                  # Other static assets
├── src/
│   ├── components/          # React components
│   │   ├── ChatPreview.js   # Displays live chat widget preview
│   │   └── ConfigForm.js    # Form for customizing widget settings
│   ├── store/               # Redux Toolkit slice and store
│   │   ├── widgetSlice.js   # State management for widget customization
│   │   └── ...              # Additional Redux-related files
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point of the application
│   └── ...                  # Other utility and support files
├── .env                     # Environment variables (if needed)
├── .gitignore               # Files and directories to be ignored by Git
├── package.json             # Dependencies and project metadata
├── README.md                # Detailed project documentation
└── ...                      # Other configuration files`
```
* * * * *

**Usage**
---------

1.  Open the application in your browser.
2.  Use the settings panel to:
    -   Modify the bot name, font family, colors, and images.
    -   Preview your changes in real-time.
3.  Save your configurations:
    -   Click the "Download JSON" button to save your configuration.
4.  Load configurations:
    -   Use the "Load JSON" button to import a previously saved file.
5.  Customize and enjoy!

* * * * *

**Assumptions and Design Decisions**
------------------------------------

### **Assumptions**

1.  Users require an interactive and straightforward interface for widget customization.
2.  The configurations will primarily be downloaded and loaded locally via JSON files.
3.  The widget preview is for demonstration purposes and may need further integration with external systems.

### **Design Decisions**

1.  **React and Redux Toolkit** were chosen for scalability and efficient state management.
2.  **Tailwind CSS** was used for rapid prototyping and modern UI styling.
3.  A modular structure was adopted to ensure maintainability and flexibility for future enhancements.

* * * * *

**Known Issues**
----------------

1.  **Image Upload Limitations**:
    -   Avatar and launcher images must be in a compatible format (e.g., PNG, JPG). Large image files may cause slow rendering.
2.  **Cross-Browser Compatibility**:
    -   The application is tested primarily on Chrome and may exhibit minor UI inconsistencies on other browsers.
3.  **Validation**:
    -   Limited input validation for configuration fields like font family and colors.