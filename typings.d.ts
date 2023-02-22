interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    userID: string;
    name: string;
    avatar: string;
  };
}
