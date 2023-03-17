import express from 'express';
import routes from './routes/index.routes';
require('dotenv').config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
