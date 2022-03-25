export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  userId: string;
};
