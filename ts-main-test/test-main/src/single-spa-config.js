import * as singleSpa from "single-spa";
const getRemoteScript = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};
const getManifest = async (url, bundle) => {
  const result = await getRemoteScript(url);
  const { publicPath, entrypoints } = result;
  const assets = entrypoints[bundle].assets;
  for (let index in assets) {
    await runScript(publicPath + assets[index]);
  }
};
singleSpa.registerApplication(
  "vue-child",
  async () => {
    await getManifest("http://localhost:8081/stats.json", "app");
    return window.vueChild;
  },
  (location) => location.pathname.startsWith("/vue")
);
singleSpa.start();

import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "umiApp",
    //entry: { scripts: ["http://localhost:8888/umi.js"] },
    entry: "http://localhost:8000",
    container: "#umi",
    activeRule: "/umi",
  },
]);
start();
