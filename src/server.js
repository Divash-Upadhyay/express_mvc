const app= require("./index");

const connect=require("./configs/db");

app.listen(2346, async () => {
    try {
      await connect();
      console.log("running on port 2346");
    } catch {
      console.log(e.message);
    }
  });