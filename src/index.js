import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Route';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData && route.loadData(store);
    });
    Promise.all(promises).then(()=>{
        res.send(renderer(req, store));
    }).catch(()=>{
        res.json({success:false, status:'error in loading the function'})
    })
})

app.listen(4000, () => {
    console.log('server running on 4000')
})