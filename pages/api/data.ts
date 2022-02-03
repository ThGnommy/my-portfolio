// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "./types";
import projects from "./projects.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[] | any>
) {
  try {
    res.status(200).json(projects.projects);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
