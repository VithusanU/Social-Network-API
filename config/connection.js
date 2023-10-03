const { connect, connection } = require('mongoose');

//connection file
const connectionString =
  process.env.MONGODB_URI || '"mongodb+srv://vithusan:02716Fda48@socialapp.e8mz5ts.mongodb.net/?retryWrites=true&w=majority';
//connect to mongoDB
connect(connectionString);

module.exports = connection;
