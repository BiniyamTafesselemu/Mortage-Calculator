import React from 'react'; // Import React
import { StrictMode } from 'react'; // Import StrictMode
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/Store'; // Import your Redux store
import './index.css'; // Import your CSS file
import App from './App'; // Import your main App component

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (rootElement) {
    const root = createRoot(rootElement); // Create the root
    root.render(
        <StrictMode>
            <Provider store={store}> {/* Wrap App with Provider */}
                <App /> {/* Render the App component */}
            </Provider>
        </StrictMode>
    );
} else {
    console.error('Root element not found'); // Error handling if root element is not found
}
