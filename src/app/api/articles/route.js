import { articles } from "@/utils/data";
export async function GET() {
  return Response.json(articles);
}
