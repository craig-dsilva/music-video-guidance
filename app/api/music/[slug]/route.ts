import dbConnect from "@/lib/mongodb";
import Music from "@/models/music";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) => {
  await dbConnect();
  const { slug } = await params;
  try {
    const music = await Music.find({ _id: slug });
    return Response.json({ success: true, data: music[0] });
  } catch (error) {
    return Response.json({ success: false, error });
  }
};
