console.log('Hello World!')

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const GameRoutes = require('./routes/game');

const App = express();
App.use(helmet());
App.use(morgan('common'));
App.use(express.json());

App.get('/',(request, response) => {
    return response.status(200).send('<h1>It works !</h1>');
});

App.post('/',(request,response) => {
    return response.status(200).send('<h1>It works !</h1>');
});


App.use('/game', GameRoutes);
const PORT = 5000
App.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});



