import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@modules/_shared/App";
import { getGamingProfiles } from "../utils/mockData";
import { useParams, Link } from "react-router";
import { GameCard, GameCardRanking, Friendsbox, EditProfile } from "../App";

function AccountPage() {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const { account: username } = useParams();
  const account = getGamingProfiles().find(
    g => g.profile.name.toLowerCase() === username.toLowerCase()
  );

  if (!account) {
    return <h1>Account not found</h1>;
  }

  const totalHoursInDays = Math.floor(account.profile.totalHours / 24);

  return (
    <>
      {openEditProfile && <EditProfile account={account} editProfileState={setOpenEditProfile} />}
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="z-0 w-full py-8"
        style={{
          backgroundImage: `url(${account.profile.coverImage || authobackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-4 md:flex-row">
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex h-full flex-1/4 items-center justify-center"
          >
            <div className="bg-secondary-900 flex w-full flex-col items-center rounded-2xl shadow-md shadow-gray-950">
              <h1 className="p-5 text-center text-4xl font-bold">{account.profile.name}</h1>
              <div className="h-[70%] w-[70%]">
                <img
                  src={account.profile.avatar || authobackground}
                  alt="Profile avatar"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
          <div className="flex h-full w-full flex-3/4 flex-col items-center justify-center gap-5 rounded-2xl">
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex w-full flex-col items-end gap-2"
            >
              <button
                onClick={() => {
                  setOpenEditProfile(true);
                }}
                className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center"
              >
                Edit profile
              </button>

              <div className="bg-secondary-900 flex w-full flex-row items-center justify-around rounded-2xl py-4 shadow-md shadow-gray-950">
                <div className="flex flex-1/3 flex-col gap-3">
                  <h1 className="text-center text-xl">Games Played</h1>
                  <h1 className="text-center text-4xl font-bold">{account.profile.gamesPlayed}</h1>
                </div>
                <div className="flex flex-1/3 flex-col gap-3">
                  <h1 className="text-center text-xl">Badges</h1>
                  <h1 className="text-center text-3xl font-bold">{account.profile.badges}</h1>
                </div>
                <div className="flex flex-1/3 flex-col gap-3">
                  <h1 className="text-center text-xl">Level</h1>
                  <h1 className="text-center text-3xl font-bold">{account.profile.level}</h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-secondary-900 flex w-4/5 items-center justify-between rounded-2xl p-4 shadow-md shadow-gray-950"
            >
              <h1 className="pl-5 text-center text-xl">Last online</h1>
              <h1 className="pr-5 text-center text-xl">{account.profile.lastOnline}</h1>
            </motion.div>
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-secondary-900 flex w-4/5 items-center justify-between rounded-2xl p-4 shadow-md shadow-gray-950"
            >
              <h1 className="pl-5 text-center text-xl">Total hours</h1>
              <h1 className="pr-5 text-center text-xl">{totalHoursInDays} days</h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Container>
        <div className="p-5">
          {/* Friends Section */}
          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {" "}
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-bold">Friends</h1>
              <button className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center">
                View more
              </button>
            </div>
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
              {account.friends.map(friend => (
                <Friendsbox
                  key={friend.id}
                  friendName={friend.username}
                  friendImage={friend.avatar}
                  status={friend.status}
                />
              ))}
            </div>
          </motion.div>
          {/* Recently Played Section */}
          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-bold">Recently Played</h1>
              <Link to="/account/library">
                <button className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center">
                  View more
                </button>
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 items-start justify-center gap-4 rounded-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {account.recentlyPlayed?.length > 0 &&
                account.recentlyPlayed.map(game => (
                  <GameCard
                    withoutType
                    game={game}
                    key={game.id} // Changed from game.name to game.id for better uniqueness
                  />
                ))}
            </div>
          </motion.div>
          {/* Wishlist  Section */}
          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="mt-5 flex w-full items-center justify-between">
              <h1 className="text-2xl font-bold">Wish list</h1>
              <Link to="/account/wishlist">
                <button className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center">
                  View more
                </button>
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {account.wishlist?.map(game => (
                <GameCardRanking ImageHeight game={game} key={game.id} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}

export default AccountPage;
