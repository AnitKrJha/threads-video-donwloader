import { NextRequest, NextResponse } from "next/server";
import { ThreadsAPI } from 'threads-api'

const threads = new ThreadsAPI({ deviceID: 'android-2qi7ro9npgy00000' });

export async function POST(req: NextRequest) {
    const reqData = await req.json();

    console.log(reqData.url);
    const postId = threads.getPostIDfromURL(reqData.url);
    const { containing_thread: { thread_items: [{ post: { video_versions: [{ url }] } }] } } = await threads.getThreads(postId)
    console.log(url);
    return NextResponse.json({ url });
}