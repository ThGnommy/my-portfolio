// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import projects from "./projects";
import { promises as fs } from "fs";
import path from "path";

export function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
