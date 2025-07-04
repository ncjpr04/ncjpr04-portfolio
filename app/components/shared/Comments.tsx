"use client";

import { useTheme } from "next-themes";
// import Giscus from "@giscus/react";
// import { giscusRepoId, giscusCategoryId } from "@/lib/env.api";

export default function Comments() {
  const theme = useTheme();
  // const giscusTheme =
  //   theme.theme === "light"
  //     ? "light"
  //     : theme.theme === "dark"
  //     ? "transparent_dark"
  //     : "dark";

  return (
    <div className="text-center py-8 dark:text-zinc-400 text-zinc-600">
      <p>Comments are temporarily disabled.</p>
      {/* <Giscus
        id="comments"
        repo="evavic44/victoreke.com"
        repoId={giscusRepoId}
        category="Announcements"
        categoryId={giscusCategoryId}
        mapping="title"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={giscusTheme}
        lang="en"
        loading="lazy"
      /> */}
    </div>
  );
}
