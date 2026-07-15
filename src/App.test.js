import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

// Test 1 : Vérifier que l'app se rend sans erreur
test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
  // Vérifie qu'un élément est présent
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});

// Test 2 : Vérifier un élément spécifique de votre app
test('renders navigation', () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
  // Cherchez un élément qui existe dans votre Navbar (ex: Accueil, Home, etc.)
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});