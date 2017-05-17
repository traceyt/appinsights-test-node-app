import express from "express";
import appInsights from "applicationinsights";

const app = express();

appInsights.setup("0dccd139-e558-41b0-838c-fd892a3b0b16");
appInsights.start();

app.get("/api", (req, res) => {
    res.send({ message: "I am a server route and can also be hot reloaded again!" });
});

app.get('/api/insightTest', function(req, res) {
    appInsights.client.trackRequest(req, res);
    res.send('the getTest rest api has been called this many times ');
});

export default app;
