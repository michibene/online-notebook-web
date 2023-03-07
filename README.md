# Online notebook

Simple note taking app with the option of entering a note, date and choosing the color of the note.

It is implemented with React using localStorage to store the notes. Adding the same note with 80% match on the same date is prohibited. If there is a match, a notification is displayed. The notes analysis itself is performed on the frontend side using method called [Dice's Coefficient](https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient).

## Installation

1. Clone repository (using SSH)

    ```bash
    git clone git@github.com:michibene/online-notebook-web.git
    cd online-notebook-web
    ```

2. Install necessary packages

    ```bash
    npm install
    ```

## Usage

To start the program locally, you have to run vite dev server. Server will automatically open the app in the browser.

1. In the current folder (online-notebook-web) run

    ```
    npm run devServer
    ```

2. By default the web service will be accessible on localhost: `http://127.0.0.1:5173/`

    - With frontend server running you can also:

        ```
        press u to show server url
        press o to open in browser
        press q to quit
        ```

## Acknowledgments

The functionality of analyzing the similarity of notes itself is implemented based on the library **String-similarity** v4.0.4 by Akash K
(https://github.com/aceakash/string-similarity#readme)
