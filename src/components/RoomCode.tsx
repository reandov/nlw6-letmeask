import copyImg from "../assets/images/copy.svg";

import "../styles/roomCode.scss";

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #781236816238</span>
    </button>
  );
}
