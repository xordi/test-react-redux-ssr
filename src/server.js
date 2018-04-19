import Express from 'express';
import webpack from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

const app = new Express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

function handleRender(req, res){

    const store = configureStore({ count: 0 });
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState){
    return `
        <html>
            <head>
                <title>React + Redux SSR</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')};
                </script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `;
}

app.use(handleRender);

app.listen(port);