import React from 'react'
import "./Rooms.css"
import "./responsive/MainRoomsMedia.css"
import RoomsCard from './RoomsCard'
const HomeRooms = () => {
  return (
    <div id='HomeRoom'>
        <div id="HomeRooms-Main">
            <div id="Rooms-lBox">
                <h1>
                100+ bir-biridan totli <br /> Shirinliklar to'plami
                </h1>
                <p>Pazandalarimiz tomonidan allaqachon juda chiroyli narsalar yaratilgan <br /> va sizni lazzatlantiradigan   dessertlar </p>
                <button id="Room-lBox-btn">
                    Ko'rib chiqish
                </button>
            </div>
            <div id="Rooms-rBox">
              <RoomsCard/>
            </div>
        </div>
    </div>
  )
}

export default HomeRooms;
