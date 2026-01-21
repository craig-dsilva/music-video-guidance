import dbConnect from "@/lib/mongodb";
import Music from "@/models/music";

export const GET = async () => {
  await dbConnect();

  try {
    const musics = await Music.find({});
    return Response.json({ success: true, data: musics, count: musics.length });
  } catch (error) {
    return Response.json({ success: false, error });
  }
};
