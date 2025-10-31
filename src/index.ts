import express from 'express';
import { UserRouter } from './routes/UserRouter';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));

app.get('/login', function (req, res) {
    res.redirect('/user/login');
});

app.use(UserRouter);

app.listen(3333, () => {
    console.log('Servidor rodando no endereço http://localhost:3333');
});