# 🎮 Codenames Interactive

เกม Codenames เวอร์ชันเล่นออนไลน์ — แสดง board บนจอใหญ่ (ทีวี/โปรเจกเตอร์) และให้ Spymaster ใบ้คำผ่านมือถือ แบบ real-time

**Live:** https://dreamtcg.github.io/codenames-in/

---

## วิธีเล่น

1. เปิด `index.html` บนจอใหญ่ — ระบบจะสร้าง Room Code และ QR Code อัตโนมัติ
2. Spymaster ทั้งสองทีม scan QR (หรือเปิด URL `spymaster.html?room=XXXX`) บนมือถือ → เลือกทีม Red / Blue
3. กด **🎮 เริ่มเกม** ที่จอใหญ่ → สุ่มการ์ด 25 ใบ
4. Spymaster พิมพ์คำใบ้ + จำนวนบนมือถือ → ปรากฏที่จอใหญ่ทันที
5. Operative คลิกการ์ดที่จอใหญ่เพื่อเปิด
6. กด **END TURN** เมื่อต้องการจบตา

---

## Stack

- **Frontend:** Static HTML/CSS/JS ล้วน — ไม่มี framework, ไม่มี build step
- **Realtime Sync:** Firebase Realtime Database (Spark plan)
- **Hosting:** GitHub Pages
- **Firebase Project:** `codenames-interactive` (region: `asia-southeast1`)

---

## โครงสร้างไฟล์

```
codenames-in/
├── index.html       ← จอใหญ่ (Board Display + Operative view)
└── spymaster.html   ← มือถือ Spymaster (Red & Blue)
```

---

## Firebase Data Structure

```
rooms/{roomId}/
├── gameState     : "playing" | "ended"
├── currentTurn   : "red" | "blue"
├── startingTeam  : "red" | "blue"
├── winner        : null | "red" | "blue"
├── winReason     : null | "assassin"
├── clue          : { word: "คำใบ้", number: 3 }
├── score         : { red: 8, blue: 9 }
└── cards         : [ { word, role, revealed }, ... ]   // 25 items
```

`role` มีได้ 4 ค่า: `red`, `blue`, `neutral`, `assassin`
ทีมที่ขึ้นก่อน (startingTeam) ได้การ์ด 9 ใบ อีกทีม 8 ใบ + neutral 7 + assassin 1

---

## Game Logic

| Action | ใครทำ | ผลลัพธ์ |
|---|---|---|
| เริ่มเกม / NEW GAME | จอใหญ่ | สุ่ม 25 cards + roles → write Firebase |
| ให้คำใบ้ | Spymaster มือถือ | write `clue` → จอใหญ่อัพเดท real-time |
| Reveal card | Operative (คลิกจอใหญ่) | `cards[i].revealed = true` + check win |
| End Turn | จอใหญ่ หรือ มือถือ | สลับ `currentTurn` + clear clue |
| โดน Assassin | auto | `winner = ฝั่งตรงข้าม`, `winReason = "assassin"` |
| การ์ดทีมครบ | auto | `winner = ทีมที่เปิดครบ` |

---

## Features

### `index.html` — จอใหญ่
- แสดง Board 5×5 ไม่มีสี (Operative view)
- Setup screen + QR Code ให้ Spymaster scan
- Auto-skip setup ถ้า room มีเกมเล่นอยู่แล้ว
- Score bar + Turn indicator + End Turn button
- Clue bar แสดงคำใบ้ real-time
- Win overlay + ปุ่มเล่นใหม่

### `spymaster.html` — มือถือ
- เลือกทีม Red / Blue ตอนเข้า
- เห็นสีการ์ดทั้งหมด + การ์ดที่ reveal แล้วจะจางลง
- Action bar: ปุ่ม toggle คำใบ้ (ซ่อน/แสดง panel) + clue ปัจจุบัน + End Turn
- Clue panel: กรอกคำ + เลือกจำนวน 1–8 / ∞ + ส่ง
- ปุ่ม toggle จะ disable เมื่อไม่ใช่ตาของตัวเอง

---

## Firebase Setup

หากจะ clone ไปใช้เอง ต้องสร้าง Firebase project ใหม่ + เปิด Realtime Database แล้วแก้ `firebaseConfig` ใน `index.html` และ `spymaster.html`:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "https://<project>-default-rtdb.<region>.firebasedatabase.app",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

> ⚠️ ปัจจุบัน Database Rules ยังตั้งเป็น test mode (`.read/.write = true`) ควรล็อคก่อนใช้จริง

---

## Deploy

ใช้ GitHub Pages ตรงๆ — push ไฟล์ขึ้น branch `main` แล้วเปิด Pages ใน repo settings ก็พอ ไม่ต้อง build อะไร

---

## Known Issues / TODO

- [ ] Firebase Rules ยังเป็น test mode — ควรล็อคก่อน production
- [ ] Word bank มี ~140 คำ — ควรเพิ่มเป็น 200–400 คำเพื่อ variety
- [ ] ไม่มี confirm dialog ก่อน Operative reveal — กดพลาดได้
- [ ] ไม่มีระบบ Room expire — ข้อมูลใน Firebase สะสมไปเรื่อยๆ
- [ ] Spymaster สองคนสามารถเปิดหน้าเดียวกันโดยไม่มี lock ป้องกัน
