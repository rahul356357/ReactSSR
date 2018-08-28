import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Route';

const app = express();

app.use('/api',  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']='localhost:3000';
        return opts; 
    }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData && route.loadData(store);
    });
    Promise.all(promises).then(()=>{
        const context = {};
        const content = renderer(req ,store, context)
        if(context.notFound){
          res.status(404)
        }
        res.send(content)
    }).catch((er)=>{
        console.log(er)
        res.json({success:false, status:'Error in loading the Application'})
    })
})
 
app.listen(3000, () => {
    console.log('server running on 3000')
})