import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@modules/_shared/App";
import { getGamingProfiles } from "../utils/mockData";
import { useParams, Link } from "react-router";
import { GameCard, GameCardRanking, Friendsbox, EditProfile } from "../App";
import axios from "axios";

function AccountPage() {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await axios.get(`${backendUrl}/api/user/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error("Failed to load user data:", err);
        setUser(null);
      }
    }
    fetchUserData();
  }, [id]);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>Loading user data...</h1>
      </div>
    );
  }

  return (
    <>
      {openEditProfile && <EditProfile account={user} editProfileState={setOpenEditProfile} />}
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="z-0 w-full py-8"
        style={{
          backgroundImage: `url(${user.cover})`,
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
              <h1 className="p-3 text-center text-3xl font-bold">{user.username}</h1>
              <div className="mb-5 h-[70%] w-[70%]">
                <img
                  src={user.avatar}
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
             
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {user.friends.map(friend => (
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
              {user.library?.length > 5 && (
                <Link to="/account/library">
                  <button className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center">
                    View more
                  </button>
                </Link>
              )}
            </div>
            <div className="mt-5 grid grid-cols-2 items-start justify-center gap-4 rounded-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {user.library?.length > 0 ? (
                user.library.map(game => <GameCard withoutType game={game} key={game.id} />)
              ) : (
                <h1 className="text-gray-700">No recently played games</h1>
              )}
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
              {user.wishlist?.length > 5 && (
                <Link to={`/account/wishlist/${id}`}>
                <button className="hover:bg-secondary-600 bg-secondary h-fit w-fit cursor-pointer rounded-md p-2 text-center">
                    View all
                  </button>
                </Link>
              )}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {user.wishlist?.slice(0, 5).map(game => (
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
