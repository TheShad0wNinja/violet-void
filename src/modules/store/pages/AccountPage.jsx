import React from "react";
import authobackground from "../../authorization/assets/authobackground.png";
import { motion } from "framer-motion";
import { Container } from "@modules/_shared/App";

function AccountPage() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="z-0 h-[550px] w-full"
        style={{
          backgroundImage: `url(${authobackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-full w-1/4 items-center justify-center">
            <div className="bg-secondary-900 flex h-[80%] w-full flex-col items-center rounded-2xl">
              <h1 className="p-5 text-center text-4xl font-bold">Username</h1>
              <div className="h-[70%] w-[70%]">
                <img
                  src={authobackground}
                  alt="Background"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex h-full w-1/2 flex-col items-center justify-center gap-8 rounded-2xl">
            <div className="bg-secondary-900 flex h-1/4 w-[85%] flex-row items-center justify-around rounded-2xl">
              <div className="flex w-1/4 flex-col gap-3">
                <h1 className="text-center text-xl">Games Played</h1>
                <h1 className="text-center text-4xl font-bold">0</h1>
              </div>
              <div className="flex w-1/4 flex-col gap-3">
                <h1 className="text-center text-xl">Badges</h1>
                <h1 className="text-center text-3xl font-bold">0</h1>
              </div>
              <div className="flex w-1/4 flex-col gap-3">
                <h1 className="text-center text-xl">level</h1>
                <h1 className="text-center text-3xl font-bold">0</h1>
              </div>
            </div>
            <div className="bg-secondary-900 flex h-1/6 w-[85%] items-center justify-between rounded-2xl">
              <h1 className="pl-5 text-center text-xl">Last online</h1>
              <h1 className="pr-5 text-center text-xl">10 days ago</h1>
            </div>
            <div className="bg-secondary-900 flex h-1/6 w-[85%] items-center justify-between rounded-2xl">
              <h1 className="pl-5 text-center text-xl">Last online</h1>
              <h1 className="pr-5 text-center text-xl">10 days ago</h1>
            </div>
          </div>
        </div>
      </motion.div>
      <Container>
        <div></div>
      </Container>
    </>
  );
}

export default AccountPage;
