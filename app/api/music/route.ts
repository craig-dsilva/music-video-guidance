import dbConnect from "@/lib/mongodb";
import Music from "@/models/music";

export const GET = async (req, res) => {
  await dbConnect();

  try {
    const musics = await Music.find({});
    return Response.json({ success: true, data: musics });
  } catch (error) {
    return Response.json({ success: false });
  }
};
