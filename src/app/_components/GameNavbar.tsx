'use client'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import DarkModeSwitcher from "./DarkSwitcher";
import React from "react"
import Modal from "./ui/Modal";
import HowToPlay from "./HoToPlayScreen";
import GameStats from "./GameStats";
import Profile from "./Profile";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import SendInvite, { InviteList } from "./GameInvite";

const GameNavebar:React.FC = ({}) => {

    return (
       <div className="flex items-center justify-between w-[80%]">
      <div className="flex gap-3">
        <DarkModeSwitcher/>
      </div>
         <div className="flex gap-3">
        <Modal title='' auto={false} value={<IoMdHelpCircleOutline />} variant="btn-link" size="full" >
          <HowToPlay />
        </Modal>
        <Modal title='' auto={false} value={<IoStatsChartOutline />} variant="btn-link" size="full" >
          <GameStats />
        </Modal>
        <Modal title='' auto={false} value={<FaRegUserCircle />} variant="btn-link" size="sm" >
          <Profile />
        </Modal>
        <Modal title='' auto={false} value={<IoIosNotifications />} variant="btn-link" size="md" >
          <InviteList />
        </Modal>
        <Modal title='' auto={false} value={<IoMdAddCircleOutline />} variant="btn-link" size="md" >
          <SendInvite />
        </Modal>
      </div>
       </div>
    )
}



export default GameNavebar