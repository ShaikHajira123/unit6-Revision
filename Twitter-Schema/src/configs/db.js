const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ShaikHajira:hajira123@revision.xexbn.mongodb.net/revision?retryWrites=true&w=majority"
  );
};

module.exports = connect;
