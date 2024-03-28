import chataw from "../../public/projects_images/chataw.png";
import rillby from "../../public/projects_images/rillby.png";
import quicklinks from "../../public/projects_images/quicklink.png"
import finanztracker from "../../public/projects_images/finanztrack.png"

export const projects: IprojectCard[] = [
  {
    title: "Chataw",
    image: chataw,
    description:
      "A Real Time Chat App that allows people to discuss either on a private chat or a channel chat.",
    link: "https://chataw.vercel.app/home",
  },
  {
    title: "QuickLink",
    image: quicklinks,
    description:
      "This platform offers an efficient solution for generating and overseeing shortened versions of lengthy URLs.",
    link: "https://quick-link-fr.vercel.app/",
  },
  {
    title: "Rillby",
    image: rillby,
    description:
      "A streaming web site that consume the spotify API , its allow you to listen and have access to your spotify playlist and songs.",
    link: "https://streamingcr.netlify.app/",
  },
  {
    title: "FinanzTrack",
    image: finanztracker,
    description:
      "A comprehensive financial tracking application that assists users in managing their personal finances and expenses.",
    link: "https://finanztrack.vercel.app/",
  },
];
