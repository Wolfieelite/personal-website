import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

import { FaInstagram } from "react-icons/fa";
import { RiBlueskyFill } from "react-icons/ri";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="px-8 py-3 flex justify-between">
        <div className="aspect-square h-full bg-amber-500 text-[10px]">image placeholder...</div>
        <div className="flex justify-center items-center gap-1.5">
          <div className="aspect-square h-6">{<FaInstagram className="h-full w-full" />}</div>
          <div className="aspect-square h-6">{<RiBlueskyFill className="h-full w-full" />}</div>
          <div className="aspect-square h-6 bg-amber-200"></div>
        </div>
      </div>

      <div className={"border-b-2 border-b-black flex justify-center gap-10"}>
        <Link
          to={"/"}
          className={"text-gray-500 hover:text-black"}
          activeProps={{
            className: "font-bold border-black after:after:content-[''] after:block after:w-full after:h-0.25 after:bg-black after:duration-400 after:ease-linear",
          }}
        >
          Home
        </Link>
        <Link
          to={"/gallery"}
          className={"text-gray-500 hover:text-black"}
          activeProps={{
            className: "font-bold border-black after:after:content-[''] after:block after:w-full after:h-0.25 after:bg-black after:duration-400 after:ease-linear",
          }}
        >
          Gallery
        </Link>
        <Link
          to={"/orginalcharacters"}
          className={"text-gray-500 hover:text-black"}
          activeProps={{
            className: "font-bold border-black after:after:content-[''] after:block after:w-full after:h-0.25 after:bg-black after:duration-400 after:ease-linear",
          }}
        >
          Original Characters
        </Link>
        <Link
          to={"/mygames"}
          className={"text-gray-500 hover:text-black"}
          activeProps={{
            className: "font-bold border-black after:after:content-[''] after:block after:w-full after:h-0.25 after:bg-black after:duration-400 after:ease-linear",
          }}
        >
          My Games
        </Link>
        <Link
          to={"/about"}
          className={"text-gray-500 hover:text-black"}
          activeProps={{
            className: "font-bold border-black after:after:content-[''] after:block after:w-full after:h-0.25 after:bg-black after:duration-400 after:ease-linear",
          }}
        >
          About
        </Link>
      </div>

      <div className="px-8 py-4">
        <Outlet />
      </div>
    </>
  );
}
