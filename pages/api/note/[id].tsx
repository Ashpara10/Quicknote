import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const note = await prisma.note.findUnique({
      where: {
        id: req.query.id.toString(),
      },
      include: {
        user: true,
      },
    });
    if (!note) {
      res.status(404).json({ success: false, mdg: "Note not found" });
    } else {
      res.status(200).json({ success: true, note });
    }
  }
  if (req.method === "PUT") {
    const { title, content, tags } = req.body;

    const note = await prisma.note.update({
      where: {
        id: req.query.id.toString(),
      },
      data: {
        title: title,
        content: content,
        tags: tags,
      },
    });
    if (!note) {
      res.status(404).json({ success: false, mdg: "Note not found" });
    } else {
      res.status(200).json({ success: true, note });
    }
  }

  if (req.method === "DELETE") {
    const note = await prisma.note.delete({
      where: {
        id: req.query.id.toString(),
      },
    });

    if (!note) {
      res.status(404).json({ success: false, mdg: "Note not found" });
    } else {
      res.status(200).json({ success: true, note, msg: "Note Deleted" });
    }
  }
};
export default handler;
