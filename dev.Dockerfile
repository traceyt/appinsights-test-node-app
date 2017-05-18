FROM traceyt/appinsights-test-node-i

ENV NODE_ENV=development

ENTRYPOINT npm run dev
