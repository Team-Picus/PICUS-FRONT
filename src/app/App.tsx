import { AppRouterProvider } from '@app/provider/AppRouterProvider.tsx';
import { ThemeProvider } from '@app/provider/ThemeProvider.tsx';
import GlobalStyle from '@app/styles/GlobalStyle.tsx';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRouterProvider />
    </ThemeProvider>
  );
}

export default App;
