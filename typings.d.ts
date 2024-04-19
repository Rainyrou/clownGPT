interface Message {
  text: string | ChatCompletionMessage;
  createAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
