import "../styles/global.css";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { auth } from "/utils/nhost";


function App({ Component, pageProps }) {
  return (
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint={process.env.NEXT_PUBLIC_NHOST_GRAPHQL}
      >
          <Component {...pageProps} />;
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default App;
