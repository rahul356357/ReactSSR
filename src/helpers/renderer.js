import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from '../client/Route';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript';
import {Helmet } from 'react-helmet';
 export default (req, store , context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
            <div>
            {renderRoutes(Routes)}
            </div>
            </StaticRouter>
        </Provider>
    );
    const html = `<html>
       <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
       </head>
       <body>
          <div id="root">${content}</div>
          <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())}
          </script>   
          <script src="bundle.js"></script>
       </body>
    </html>`;

    return html;
}