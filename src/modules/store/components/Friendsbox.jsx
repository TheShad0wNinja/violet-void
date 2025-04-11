const Friendsbox = ({ friendName, friendImage }) => {
  return (
    <div className="h-[200px] w-[150px]">
      <div className="h-[75%] w-full">
        <img className="h-full w-full rounded-2xl object-cover" src={friendImage} />
      </div>
      <h1 className="text-center capitalize mt-1">{friendName}</h1>
    </div>
  );
};

export default Friendsbox;
