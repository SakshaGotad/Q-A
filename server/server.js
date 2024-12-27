require('dotenv').config();
const express = require('express');
const getConnection = require('./utils/getConnection')
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/user-routes');
const queryRoutes = require('./routes/query-routes');
const answerRoutes = require('./routes/answer-routes');
app.use(cors({
    origin: 'https://superlative-fairy-626ab3.netlify.app', 
  credentials: true,
}));
app.use(express.json());

app.use('/user',userRoutes);
app.use('/query',queryRoutes);
app.use('/ans',answerRoutes);

getConnection();
app.listen(process.env.PORT,()=>{console.log(`server is running at port: ${process.env.PORT}`)});