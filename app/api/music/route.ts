import dbConnect from "@/lib/mongodb";
import Music from "@/models/music";

await dbConnect();

export const GET = async () => {
  try {
    const musics = await Music.find({});
    return Response.json({ success: true, data: musics, count: musics.length });
  } catch (error) {
    return Response.json({ success: false, error });
  }
};

export const POST = async (req: Request) => {
  const res = await req.json();
  try {
    await Music.insertOne(res);
    return Response.json({ success: true, data: res });
  } catch (error) {
    return Response.json({ success: false, error });
  }
};
