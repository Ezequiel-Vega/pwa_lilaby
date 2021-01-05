export default function swDev() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      let swUrl;
      if (process.env.NODE_ENV === "production") {
        swUrl = `${process.env.PUBLIC_URL}/service-worker_vanilla.js`;
        navigator.serviceWorker
          .register(swUrl)
          .then((res) => {
            console.log("Response", res);
          })
          .catch((err) => console.error(err));
      }
    });
  }
}
