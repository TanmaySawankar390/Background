# Image Background Removal Website

This repository contains the source code for an image background removal website. This guide will help you clone the repository, install necessary dependencies, and configure the environment variables, including obtaining an API key from remove.bg.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Setting Up Environment Variables](#setting-up-environment-variables)
4. [Obtaining remove.bg API Key](#obtaining-removebg-api-key)
5. [Running the Project](#running-the-project)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/TanmaySawankar390/Pure-BG.git
    cd pure-bg
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Setting Up Environment Variables
```bash
touch .env
```
**Open the .env file and add the following variables:**
```
API=your_remove_bg_api_key
```

## Obtaining remove.bg API Key

1. Visit the remove.bg website.
2. Sign up or log in to your account.
3. Navigate to the API section in your account settings.
4. Copy the provided API key.
5. Replace your_remove_bg_api_key in the .env file with the API key you obtained.

## Running the Project

1. **Start the development server:**

    ```bash
    npm start
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Acknowledgements

- Thanks to the developers of Express, Node.js, EJS, and all other open-source projects used in this project.

---

Feel free to reach out if you have any questions or need further assistance in setting up the project. Happy coding!
