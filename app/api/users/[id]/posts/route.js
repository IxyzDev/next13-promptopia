import { connectToDatabase } from "@/utils/database";

import Prompt from "@/models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
