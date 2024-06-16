import Search from "views/Search";
import Providers from "providers";
import { GlobalStyle } from "./app.styled";

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Search />
    </Providers>
  );
};

export default App;
