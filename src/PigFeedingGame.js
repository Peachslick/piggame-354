import React, { useState } from 'react';
import pigImage from './assets/pig.jpg'; // รูปหมูปกติ
import pigFullImage from './assets/me.jpg'; // รูปหมูเมื่อเลเวลเต็ม 100
import watermelonImage from './assets/watermelon.jpg'; // แตงโม
import pumpkinImage from './assets/pumpkin.jpg'; // ฝักทอง
import grassImage from './assets/grass.jpg'; // หญ้า

function PigFeedingGame() {
  const [size, setSize] = useState(100); // ขนาดเริ่มต้นของหมู
  const [level, setLevel] = useState(0); // เลเวลเริ่มต้นที่ 0
  const [pig, setPig] = useState(pigImage); // รูปหมูเริ่มต้น

  // ฟังก์ชันให้อาหารหมู
  const feedPig = (foodLevel) => {
    if (level < 100) {
      const newLevel = Math.min(level + foodLevel, 100); // จำกัดเลเวลสูงสุดที่ 100
      const newSize = size + foodLevel * 2; // ขนาดเพิ่มตามค่าเลเวล

      setLevel(newLevel);
      setSize(newSize);

      // ถ้าเลเวลถึง 100 เปลี่ยนเป็นรูปหมูเต็ม
      if (newLevel === 100) {
        setPig(pigFullImage);
      }
    }
  };

  const resetGame = () => {
    setSize(100); // รีเซ็ตขนาดหมู
    setLevel(0); // รีเซ็ตเลเวล
    setPig(pigImage); // เปลี่ยนกลับเป็นรูปหมูปกติ
  };

  return (
    <div className="game-container">
      <h1>Pig Feeding Game</h1>
      <div className="pig-container">
        <img
          src={pig}
          alt="Pig"
          style={{ width: size, height: size }}
        />
      </div>
      <p>Level: {Math.floor(level)}</p>

      {/* ปุ่มให้อาหาร */}
      <div className="food-container">
        <button onClick={() => feedPig(5)}>
          <img src={watermelonImage} alt="Watermelon" style={{ width: 50, height: 50 }} />
          <p>แตงโม +5</p>
        </button>
        <button onClick={() => feedPig(10)}>
          <img src={pumpkinImage} alt="Pumpkin" style={{ width: 50, height: 50 }} />
          <p>ฟักทอง +10</p>
        </button>
        <button onClick={() => feedPig(20)}>
          <img src={grassImage} alt="Grass" style={{ width: 50, height: 50 }} />
          <p>หญ้า +20</p>
        </button>
      </div>

      {/* ปุ่มรีเซ็ตเกม */}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default PigFeedingGame;
