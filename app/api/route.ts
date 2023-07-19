import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer';
export async function POST(req: Request) {

    // const waitTillHTMLRendered = async (page: any, timeout = 30000) => {
    //     const checkDurationMsecs = 1000;
    //     const maxChecks = timeout / checkDurationMsecs;
    //     let lastHTMLSize = 0;
    //     let checkCounts = 1;
    //     let countStableSizeIterations = 0;
    //     const minStableSizeIterations = 3;

    //     while (checkCounts++ <= maxChecks) {
    //         let html = await page.content();
    //         let currentHTMLSize = html.length;

    //         let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

    //         console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

    //         if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
    //             countStableSizeIterations++;
    //         else
    //             countStableSizeIterations = 0; //reset the counter

    //         if (countStableSizeIterations >= minStableSizeIterations) {
    //             console.log("Page rendered fully..");
    //             break;
    //         }

    //         lastHTMLSize = currentHTMLSize;
    //         await page.waitForTimeout(checkDurationMsecs);
    //     }
    // };

    // const reqData = await req.json();

    // console.log(reqData.url);
    // const browser = await puppeteer.connect({
    //     browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    // })

    // const page = await browser.newPage()
    // await page.goto(reqData.url, {
    //     waitUntil: 'networkidle2',

    // });
    // await waitTillHTMLRendered(page)




    // page.waitForSelector('video');

    // const data = await page.evaluate(() => {
    //     const video = document.querySelector('video')
    //     return video?.src;
    // })

    // console.log(data);

    return NextResponse.json({ data: "hi bro" });
}

