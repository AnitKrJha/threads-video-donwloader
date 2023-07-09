"use client";
type Props = {};
import {
  CircleBackslashIcon,
  CircleIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";

const Form = (props: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: {
          "Content-type": "application/json; charset=utf8",
        },
      });
      const parsedData = await data.json();
      console.log(parsedData, "sfsdferew");
      setVideoUrl(parsedData.data);
    } catch (e: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const [url, setUrl] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="h-20"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button className="w-full mt-4" disabled={!url || loading}>
        Generate Link{" "}
        {!loading ? (
          <DownloadIcon className="font-bold ml-2 inline-block" />
        ) : (
          <CircleBackslashIcon className="text-lg animate-spin ml-2" />
        )}
      </Button>
      {error && <p className="text-red-400">Keep Trying , I will work !</p>}
      {videoUrl && (
        <>
          <div className="h-px w-full bg-black my-4"> </div>
          <h2 className="text-center font-medium text-lg mt-4 ">
            Generated Video
          </h2>
          <a target="_blank" href={videoUrl}>
            <Button type="button" className="bg-green-800 mt-6 w-full h-10">
              Go to video ⏭️
            </Button>
          </a>
        </>
      )}
    </form>
  );
};

export default Form;
