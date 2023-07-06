console.log('Hello World!')

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const App = express();
App.use(helmet());
App.use(morgan('common'));

App.get('/',(request, response) => {
    return response.status(200).send('<h1>It works !</h1>');
});

App.post('/',(request,response) => {
    return response.status(200).send('<h1>It works !</h1>');
})

const PORT = 5000
App.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});



