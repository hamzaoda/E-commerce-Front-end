const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("are we here")
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://hamza-s-shop-production.up.railway.app/",
            changeOrigin: true,
        })
    ),
   app.use(
        "/user",
        createProxyMiddleware({
            target: "https://hamza-s-shop-production.up.railway.app/",
            changeOrigin: true,
        })
    )     
};
