import { connectDatabase, insertDocument } from "@/helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = { email, name, message };

    let client;

    try {
      client = await connectDatabase("nextBlogs");
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }

    try {
      const result = await insertDocument(client, "messages", newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      await client.close();
      res.status(500).json({ message: "Storing message failed!!" });
      return;
    }

    res.status(201).json({
      message: "Successfully stored the message!!",
      message: newMessage,
    });

    await client.close();
  }
}

export default handler;
