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

      <div className="border-b-4 border-b-black flex justify-center gap-10">
        <Link to={"/"} className=""> Home</Link>
        <Link to={"/gallary"}>Gallary</Link>
        <Link to={"/orginalcharacters"}>Original Characters</Link>
        <Link to={"/mygames"}>My Games</Link>
        <Link to={"/about"}>About</Link>
      </div>

      <Outlet />
    </>
  );
}
