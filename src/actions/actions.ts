import { promises as fs } from "fs";
import { Data } from "@/types/types";

export const fetchListData = async (filePath: string): Promise<Data> => {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    throw new Error("Failed to fetch list data");
  }
};
