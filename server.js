const express = require('express');
const path = require('path');
const app = express();

app.use(
    express.json(),
    express.urlencoded({extended: true}),
    express.static(path.join(__dirname, '/public/dist/public'))
);

require('./server/config/mongoose.config');

const AllDaTaskRoutes = require('./server/routes/task.routes');
AllDaTaskRoutes(app);

app.all('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '/public/dist/public/index.html'))
);

app.listen(8000, () => console.log('Server is ready to go yo.... port 8000!'));
