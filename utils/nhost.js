/*import nhost from "nhost-js-sdk";

const config = {
  base_url: process.env.NEXT_PUBLIC_NHOST_BACKEND,
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };

console.log(connfig.base_url);*/



//Please specify a baseURL. More information at https://docs.nhost.io/libraries/nhost-js-sdk#setup. error?

import { createClient } from "nhost-js-sdk";

const config = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
};

const { auth, storage } = createClient(config);

export { auth, storage };

console.log(process.env.NEXT_PUBLIC_BACKEND_ENDPOINT);