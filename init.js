const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// only to insert sample data in database.


let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me your notes for the exam",
    created_at: new Date(),
  },
  {
    from: "anand",
    to: "khushi",
    msg: "Hello!!",
    created_at: new Date(),
  },
  {
    from: "mohit",
    to: "rohit",
    msg: "Lets play football",
    created_at: new Date(),
  },
  {
    from: "anvi",
    to: "atharva",
    msg: "lets play cricket",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
