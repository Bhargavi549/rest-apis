const express = require("express");
const app = express();
const registerRoute = require("./src/routes/index");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use("/", registerRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const config = require('./config/config');
// const jwt = require('jsonwebtoken');
// const routes = require('./src/routes');
// const cors = require('cors');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const compression = require('compression');
// const userRoutes = require('./src/routes/userRoutes');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(morgan('combined'));
// app.use(helmet());
// app.use(compression());



// app.use('/users', userRoutes);

// app.get('/decode-token', (req, res) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. Token not provided.' });
//   }

//   try {
//     const decodedToken = jwt.verify(token.replace('Bearer ', ''), config.jwtSecret); 
//     console.log('Decoded Token:', decodedToken);
//     res.status(200).json(decodedToken);
//   } catch (error) {
//     console.error('Token verification error:', error.message);
//     res.status(401).json({ error: 'Unauthorized - Invalid token' });
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// const port = config.port || 3001;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

