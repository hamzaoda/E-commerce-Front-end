const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/",
        createProxyMiddleware({
            target: "https://hamza-s-shop-production.up.railway.app/",
            changeOrigin: true,
        })
    );
};
