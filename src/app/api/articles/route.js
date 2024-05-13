import { articles } from "@/utils/data";
import { z } from "zod";
export async function GET() {
  return Response.json(articles);
}

export async function POST(req) {
  const data = await req.json();
  // create validation to data input
  const commentSchema = z.object({
    title: z.string().min(2).max(200),
    body: z.string().min(10),
  });
  const validation = commentSchema.safeParse(data);
  if (!validation.success) {
    return Response.json(
      { message: validation.error.errors[0].message },
      { status: 400 }
    );
  }
  const newData = {
    id: articles.length + 1,
    userId: 200,
    title: data.title,
    body: data.body,
  };
  articles.push(newData);
  return Response.json(newData, { status: 201 });
}
