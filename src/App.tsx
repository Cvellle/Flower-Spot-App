import { useRoutes } from "react-router-dom";
import routes from "./router";
import { useEffect } from "react";
import { getTokens } from "./shared/helpers/authHelpers";
import { getMeFn } from "./api/authApi";
import useStore from "./store";

function App() {
  let store = useStore();
  useEffect(() => {
    // if (getTokens().accessToken) {
    //   let userResponse = async () => {
    //     let res = await getMeFn();
    //     if (res) {
    //       store.setAuthUser(res);
    //     }
    //     userResponse();
    //   };
    // }
  }, []);

  const content = useRoutes(routes);
  return content;
}

export default App;
