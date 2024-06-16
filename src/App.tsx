import Search from "views/Search";
import Providers from "providers";
import { GlobalStyle } from "./app.styled";
import { queryClient } from "requests/queryClient";

const App = () => {
  return (
    <Providers queryClient={queryClient}>
      <GlobalStyle />
      <Search />
    </Providers>
  );
};

export default App;
