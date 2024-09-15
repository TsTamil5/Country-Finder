# Country Search Bar

This project is a React-based web application that features a search bar allowing users to search for countries by their name or capital. The search bar also includes an autocomplete functionality, displaying suggestions as users type. The country data is sourced from a local JSON file.

## Features

- **Country Search**: Search for countries by their name or capital.
- **Autocomplete**: Suggestions are shown dynamically based on the user's input.
- **Local JSON Data**: The country data is fetched from a local JSON file.
- **Responsive UI**: The application is designed to be visually appealing and responsive on all devices.

## Technologies Used

- **React**: Frontend framework for building UI components.
- **CSS**: Styling for the UI.
- **JSON**: Country data is stored locally in a JSON file.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TsTamil5/Country-Finder.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Country-Finder
   ```

3. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command:

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```bash
.
├── public
│   ├── data
│        ├── countries.json
│   ├── index.html
│   ├── search-icon.png
├── src
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── components
│       ├── FastFinder.js
│       ├── FastFinder.css
│       ├── ResultsPage.js
│       ├── ResultsPage.css
├── README.md
└── package.json
└── package-lock.json
```

### Example of `countries.json` file structure:

```json
[
  {
      "country": "United States",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "official_language": "English",
      "currency": "United States Dollar"
    },
    {
      "country": "Canada",
      "capital": "Ottawa",
      "population": 37742154,
      "official_language": ["English", "French"],
      "currency": "Canadian Dollar"
    },
    {
      "country": "Brazil",
      "capital": "Brasília",
      "population": 212559417,
      "official_language": "Portuguese",
      "currency": "Brazilian Real"
    }
]
```

## Usage

1. Enter the name of a country or its capital in the search bar.
2. As you type, suggestions will appear based on your input.
3. Select a suggestion or press enter to see the details.

## Implementation Details

1. **Search Functionality**: The `FastFinder.js` component reads data from the `countries.json` file located in the `public/data` folder.
2. **Autocomplete**: While the user types in the search bar, the suggestions will be dynamically shown based on a partial match with either the country name or capital.
3. **Local Data Fetching**: Instead of fetching data from an external API, the project reads from the local `countries.json` file.

## Deployment

The app is deployed on **Netlify** and can be accessed via the following link:

[**Country Search Bar - Live Demo**](https://effortless-lebkuchen-1774ed.netlify.app)

To deploy the application:

1. **Build the app for production:**

   ```bash
   npm run build
   ```

2. **Deploy using your preferred method**: You can deploy the app to platforms like Vercel, Netlify, or GitHub Pages.

## License

This project is open-source and available under the [MIT License](LICENSE).
