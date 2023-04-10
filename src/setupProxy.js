const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("are we here")
    app.use(
        "/",
        createProxyMiddleware({
            target: "https://hamza-s-shop-production.up.railway.app/",
            changeOrigin: true,
        })
    );
};
