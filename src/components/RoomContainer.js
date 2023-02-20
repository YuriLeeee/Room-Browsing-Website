import React from "react";  //functional conponents
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomList"
//import { RoomConsumer } from "../context";
import Loading from "./Loading"
import {withRoomConsumer} from "../context";

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    );
}

export default withRoomConsumer(RoomContainer)


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if (loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
            
//         </RoomConsumer>
        
//     )
// }