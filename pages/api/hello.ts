import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession();

  if (req.method === "GET") {
    const data = await prisma.note.findMany({
      where: {
        user: {
          email: session?.user?.email,
        },
      },
      include: {
        user: true,
      },
    });
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    const { title, content, tags } = req.body;

    const note = await prisma.note.create({
      data: {
        title: title,
        content: content,
        tags: tags,
        user: {
          connect: {
            email: session?.user?.email?.toString(),
          },
        },
      },
    });
    return res.status(200).json(note);
  }
};

export default handler;
