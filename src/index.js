console.log('Hello World!')

const express = require('express');
const mongoose = require("mongoose")
const helmet = require('helmet');
const morgan = require('morgan');

const GameRoutes = require('./routes/game');
const WordRoutes = require('./routes/word');

const App = express();
App.use(helmet());
App.use(morgan('common'));
App.use(express.json());

mongoose.connect("mongodb+srv://eyachaftar26:thF9bp5dxdnQ7Q8vjb@cluster0.f0aavcl.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log("DB connected")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})

App.get('/',(request, response) => {
    return response.status(200).send('<h1>It works !</h1>');
});

App.post('/',(request,response) => {
    return response.status(200).send('<h1>It works !</h1>');
});


App.use('/game', GameRoutes);
App.use('/word', WordRoutes);
const PORT = 5000
App.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});



