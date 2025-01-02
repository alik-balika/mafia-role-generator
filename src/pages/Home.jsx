import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="m-5">
      <h1 className="text-2xl">Mafia Role Generator</h1>
      <div className="flex flex-col w-full gap-3 mt-5">
        <Button onClick={() => navigate("/create-room")}>Create a Room</Button>
        <Button onClick={() => navigate("/join-room")}>Join a Room</Button>
      </div>
    </div>
  );
};

export default Home;
