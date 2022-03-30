// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "./types";
import projects from "./projects";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[] | any>
) {
  try {
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
