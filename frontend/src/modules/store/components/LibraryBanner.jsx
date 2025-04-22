import { Container } from "@modules/_shared/App";
import { memo } from "react";

function LibraryBanner({firstBannerTurn, bannerUrl, selectedGame}) {
  console.log("Rerender");
  return (
    <div className="relative grid h-[320px] w-full items-end justify-start pb-4 md:h-[520px]">
      <div className="to-background to absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent via-75% to-100%"></div>
      <img
        className={
          "absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-200 " +
          (firstBannerTurn ? "opacity-100 delay-200" : "opacity-0")
        }
        src={firstBannerTurn ? bannerUrl[1] : bannerUrl[0]}
        alt=""
      />
      <img
        className={
          "absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-200 " +
          (!firstBannerTurn? "opacity-100 delay-200" : "opacity-0")
        }
        src={!firstBannerTurn? bannerUrl[1] : bannerUrl[0]}
        alt=""
      />
      <Container className={"z-10"}>
        {selectedGame !== null && (
          <>
            <h1 className="line-clamp-2 text-6xl leading-16 font-bold">{selectedGame.title}</h1>
          </>
        )}
      </Container>
    </div>
  );
}

export default memo(LibraryBanner);