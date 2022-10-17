// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import NotistackProvider from './components/NotistackProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NotistackProvider>
        <Router />
      </NotistackProvider>
    </ThemeProvider>
  );
}
