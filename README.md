# Your sun app

Your UK Weather Sunshine Forecast app is now up and running! 

To run it locally run:

```
npm run dev
```

Here's what I've built for you:

1. A React application that displays sunshine hours forecast for the next 30 days
2. A grid visualization where each dot represents a day, with the color indicating the amount of sunshine
3. A color legend explaining what each shade represents (from gray for minimal sunshine to bright orange for maximum sunshine)

The app structure:
- `weatherService.ts`: Contains logic to fetch and mock sunshine data (currently using simulated data)
- `SunshineGrid.tsx`: The main component that renders the grid of colored dots
- `SunshineGrid.css`: Styling for the grid component
- `App.tsx`: Main application component
- `App.css`: Application-wide styling

To use the app:
1. Navigate to the URL shown in your terminal (likely http://localhost:5173/)
2. You'll see a grid of 30 colored dots representing the expected sunshine hours for each day
3. Hover over any dot to see the exact date and sunshine hours

For a real implementation, you would need to register for an API key from the Met Office and replace the mock data generator with actual API calls.
The app is already running in development mode. To build for production, you can run:


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
