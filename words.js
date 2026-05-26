// Word banks — ระบบจะสุ่ม 25 คำต่อเกม
// แก้ไข / เพิ่ม / ลบคำได้ที่นี่
export const WORDS = [
  // General Objects
  "ARM","BAND","BANK","BAR","BELL","BLOCK","BOARD","BOLT",
  "BOMB","BOOT","BOTTLE","BOW","BOX","BRIDGE","BRUSH","BUTTON",
  "CAP","CARD","CELL","CHAIN","CHEST","CLUB","CODE","COLUMN",
  "COMIC","COMPOUND","CONTRACT","CORD","COTTON","CRANE","CYCLE",
  "DECK","DEVICE","DIAMOND","DRAFT","DRILL","DROP","ENGINE",
  "FILE","FILM","FORK","FRAME","GEAR","GLASS","GLOVE","HAMMER",
  "HOOK","HORN","JET","JUNK","KEY","KID","KNIFE","KNOT",
  "LAB","LASER","LEAD","LETTER","LINE","LINK","LOCK","LOG",
  "MACHINE","MAIL","MAP","MATCH","MINE","MODEL","MOLE","NAIL",
  "NET","NOTE","NUT","OIL","PACKAGE","PALM","PAPER","PEN",
  "PIPE","PISTOL","PLANE","PLASTIC","PLATE","PLOT","POCKET",
  "PORT","POST","PRESS","PUMP","RACKET","RAY","RECORD","RING",
  "ROBOT","ROPE","ROW","RULER","SATELLITE","SCALE","SCREEN",
  "SCROLL","SEAL","SERVER","SHAFT","SHIP","SHOT","SIGN","SINK",
  "SKULL","SLIP","SPRING","STAMP","STICK","STOCK","STREAM",
  "STRING","SUIT","SWITCH","TABLE","TAG","TAP","TICKET","TOOL",
  "TORCH","TOWER","TRACK","TRAIN","TRUNK","TUBE","VACUUM",
  "VAN","WALL","WATCH","WHEEL","WIRE",

  // Places
  "AIRPORT","ARENA","BASE","BEACH","CAMP","CASTLE","CAVE",
  "CHURCH","COURT","DESERT","FACTORY","FIELD","FOREST","FORT",
  "GARDEN","HARBOR","HOSPITAL","HOTEL","ISLAND","JAIL",
  "LIBRARY","MARKET","MUSEUM","OFFICE","PARK","PRISON",
  "PYRAMID","SCHOOL","SHOP","STADIUM","STATION","TEMPLE","THEATER",
  "TUNNEL","UNIVERSITY","WAREHOUSE","YARD",

  // Nature
  "AIR","ASH","CLOUD","COAST","COMET","DUST","FIRE","FLOWER",
  "FOG","GLACIER","GRASS","HILL","ICE","LAKE","LEAF",
  "LIGHT","LIGHTNING","MOUNTAIN","MUD","OCEAN","RAIN","RAINBOW",
  "RIVER","ROCK","ROOT","SAND","SEA","SEED","SHADOW","SKY",
  "SMOKE","SNOW","SPACE","STAR","STORM","SUN","SWAMP","THUNDER",
  "TREE","VALLEY","VOLCANO","WATER","WAVE","WIND",

  // Animals
  "ANT","BAT","BEAR","BEETLE","BIRD","BULL","CAMEL","CAT",
  "COBRA","CRAB","CROW","DEER","DOG","DRAGON","DUCK","EAGLE",
  "FALCON","FOX","GOAT","HAWK","HORSE","LION","LOBSTER","MAMMOTH",
  "MONKEY","MOUSE","OWL","PANTHER","PIG","RABBIT","RAT","RHINO",
  "SCORPION","SHARK","SNAKE","SPIDER","SQUID","TIGER",
  "TURTLE","VIPER","WHALE","WOLF",

  // People & Roles
  "ACTOR","AGENT","ARTIST","CAPTAIN","CHEF","DOCTOR","DRIVER",
  "ENGINEER","FARMER","GIANT","GUARD","HUNTER","JUDGE","KING",
  "KNIGHT","LAWYER","LEADER","MAGICIAN","NINJA","NURSE","PILOT",
  "PIRATE","POLICE","PRIEST","PRINCE","PRISONER","QUEEN",
  "SAILOR","SCIENTIST","SOLDIER","SPY","STUDENT","TEACHER","THIEF",
  "WAITER","WARRIOR","WITNESS","WIZARD",

  // Food & Drink
  "APPLE","BREAD","BUTTER","CAKE","CANDY","CHEESE","CHERRY",
  "CHOCOLATE","COFFEE","COOKIE","CREAM","EGG","FISH","GRAPE",
  "HONEY","JUICE","LEMON","MEAT","MILK","MINT","NOODLE",
  "OLIVE","ONION","ORANGE","PEACH","PEAR","PEPPER",
  "PIZZA","POTATO","RICE","SALAD","SALT","SOUP","STEAK","SUGAR",
  "TEA","TOMATO","WATER","WINE",

  // Abstract / Ambiguous
  "ACTION","ATTACK","BALANCE","BATTLE","BLAST","BREAK","CASE",
  "CHARGE","CHECK","CIRCLE","CLASH","COMMAND","CONTROL","CRASH",
  "CRIME","CROSS","CROWN","DANGER","DASH","DEAL","DEATH",
  "DEFENSE","DESIRE","DESTINY","DOUBLE","DREAM","ECHO","ENERGY",
  "ESCAPE","EXCHANGE","FALL","FATE","FEAR","FLIGHT","FORCE",
  "FREEDOM","GAME","GLORY","GRAVITY","GROUND","GUESS","HEART",
  "HIDE","HONOR","HOPE","HUNT","IDEA","IMPACT","JOKE","JOURNEY",
  "JUMP","JUSTICE","KISS","KNOWLEDGE","LIFE","LIMIT",
  "LUCK","MAGIC","MARK","MEMORY","MESSAGE","MISSION","MIST",
  "MOTION","MYSTERY","ORDER","PAIN","PEACE","PLAN","POWER",
  "RACE","RISK","RULE","RUSH","SCORE","SECRET","SHOCK","SIGNAL",
  "SILENCE","SKILL","SLEEP","SOUND","SPEED","SPIRIT","SPOT",
  "STRIKE","STYLE","TARGET","TEMPTATION","TIME","TOUCH","TRAP",
  "TRUTH","VICTORY","VISION","VOICE","WAR","WARNING","WISH",

  // Classic Weirdness
  "ALIEN","ANGEL","ATLANTIS","CASINO","CENTAUR","CYCLOPS",
  "EMBASSY","GENIUS","GHOST","HOLLYWOOD","MERCURY","MOON",
  "NOVA","OLYMPUS","ORACLE","PHOENIX","RAVEN",
  "SATURN","SPHINX","TEMPEST","UNICORN","VENUS","ZEUS"
];

export const THAI_WORDS = [
  // ธรรมชาติ
  "ดวงอาทิตย์","ดวงจันทร์","ดาว","ท้องฟ้า","เมฆ","ฝน","หิมะ","ลม",
  "พายุ","ฟ้าร้อง","ฟ้าแลบ","ไฟ","ควัน","เงา","น้ำ","ทะเล","มหาสมุทร",
  "คลื่น","แม่น้ำ","ทะเลสาบ","เกาะ","ชายหาด","ป่า","ต้นไม้","ใบไม้",
  "ดอกไม้","หญ้า","ราก","เมล็ด","หิน","ภูเขา","ถ้ำ","ทะเลทราย",
  "ทราย","โคลน","น้ำแข็ง","รุ้ง","ดิน","แสง","ความมืด","หมอก",
  "เถ้า","ภูเขาไฟ","หนองน้ำ","หุบเขา","พุ่มไม้","ทุ่งหญ้า","สายลม",

  // สัตว์
  "แมว","หมา","นก","หมี","สิงโต","เสือ","หมาป่า","จิ้งจอก",
  "กวาง","ม้า","วัว","หมู","แพะ","แกะ","เป็ด","นกฮูก","อีกา",
  "เหยี่ยว","ค้างคาว","ฉลาม","วาฬ","โลมา","งู","จงอาง","แมงมุม",
  "มด","ผึ้ง","กระต่าย","หนู","กบ","เต่า","ลิง","กอริลลา",
  "เสือดำ","อูฐ","ม้าลาย","แรด","ฮิปโป","ช้าง","มังกร","แมงป่อง",
  "ปลาหมึก","ปู","กุ้งมังกร","เหี้ย","แมลง","ผีเสื้อ",

  // อาหาร
  "ข้าว","ขนมปัง","เค้ก","พาย","คุกกี้","ลูกอม","ช็อกโกแลต",
  "น้ำผึ้ง","น้ำตาล","เกลือ","พริกไทย","ก๋วยเตี๋ยว","ซุป","สลัด",
  "พิซซ่า","เบอร์เกอร์","สเต๊ก","เนื้อ","ปลา","ไข่","ชีส","เนย",
  "นม","กาแฟ","ชา","น้ำผลไม้","น้ำอัดลม","แอปเปิล","กล้วย",
  "ส้ม","มะนาว","องุ่น","แตงโม","มะม่วง","พีช","ลูกแพร์","เชอร์รี",
  "มะพร้าว","แครอท","หัวหอม","มันฝรั่ง","มะเขือเทศ","ข้าวโพด",
  "ถั่ว","เห็ด","ไอศกรีม","น้ำแกง","ผลไม้","อาหาร","ของหวาน",

  // ร่างกาย
  "หัว","หน้า","ตา","หู","จมูก","ปาก","ฟัน","ลิ้น","ผม",
  "คอ","แขน","มือ","นิ้ว","ขา","เท้า","เข่า","หัวใจ","สมอง",
  "เลือด","กระดูก","ผิวหนัง","ปอด","หลัง","ไหล่","ท้อง","ข้อศอก",

  // สี & รูปร่าง
  "แดง","น้ำเงิน","เขียว","เหลือง","ดำ","ขาว","เทา","ม่วง",
  "ชมพู","ส้ม","น้ำตาล","ทอง","เงิน","วงกลม","สี่เหลี่ยม",
  "สามเหลี่ยม","เส้น","จุด","วงแหวน","ลูกศร","กากบาท",

  // บ้าน & สิ่งของ
  "บ้าน","ห้อง","ประตู","หน้าต่าง","กำแพง","พื้น","หลังคา",
  "เตียง","หมอน","ผ้าห่ม","เก้าอี้","โต๊ะ","โต๊ะทำงาน","โคมไฟ",
  "นาฬิกา","กระจก","กุญแจ","กลอน","กล่อง","กระเป๋า","ขวด",
  "แก้ว","จาน","ชาม","ส้อม","ช้อน","มีด","แปรง","สบู่",
  "ผ้าเช็ดตัว","เชือก","โซ่","สายไฟ","หนังสือ","กระดาษ","โน้ต",
  "แผนที่","จดหมาย","แสตมป์","เหรียญ","บัตร","ตั๋ว","ธง","ป้าย",
  "โทรศัพท์","กล้อง","จอ","วิทยุ","โทรทัศน์","คอมพิวเตอร์",

  // การเดินทาง
  "รถ","รถบรรทุก","รถเมล์","รถไฟ","เครื่องบิน","เฮลิคอปเตอร์",
  "จักรยาน","เรือ","เรือดำน้ำ","เรือข้ามฟาก","จรวด","แท็กซี่",
  "รถตู้","รถจี๊ป","รถถัง","เครื่องยนต์","มอเตอร์",

  // สถานที่
  "โรงเรียน","ห้องสมุด","ธนาคาร","ร้านค้า","ตลาด","ห้าง",
  "โรงแรม","โรงพยาบาล","โบสถ์","วัด","ปราสาท","หอคอย",
  "โรงงาน","ฟาร์ม","สวน","พิพิธภัณฑ์","สนามบิน","สถานี",
  "ท่าเรือ","ถนน","สะพาน","อุโมงค์","ค่าย","ฐาน","คุก",
  "ศาล","โรงละคร","สนามกีฬา","ห้องทดลอง","มหาวิทยาลัย",
  "คลังสินค้า","ลาน","ชายฝั่ง","ท่า","สนาม","ทุ่ง",

  // คน & อาชีพ
  "ราชา","ราชินี","เจ้าชาย","อัศวิน","พ่อมด","หมอ","พยาบาล",
  "ครู","นักเรียน","ตำรวจ","ผู้พิพากษา","ทนาย","เชฟ","นักบิน",
  "คนขับ","วิศวกร","นักวิทยาศาสตร์","ชาวนา","นักล่า","กะลาสี",
  "ทหาร","สายลับ","ขโมย","ยาม","กัปตัน","หัวหน้า","ศิลปิน",
  "นักแสดง","นักร้อง","นักเต้น","ผู้เล่น","ฮีโร่","ตัวร้าย",
  "นักโทษ","โจรสลัด","นักเวท","ผู้วิเศษ",

  // การกระทำ
  "วิ่ง","เดิน","กระโดด","บิน","ว่ายน้ำ","ขับ","โยน","จับ",
  "ผลัก","ดึง","เปิด","ปิด","พัง","สร้าง","ตัด","เผา",
  "แช่แข็ง","ซ่อน","ค้นหา","ไล่ล่า","หลบหนี","โจมตี","ป้องกัน",
  "ต่อสู้","ล่า","มอง","ฟัง","วาด","เขียน","อ่าน","นอน",
  "ฝัน","หัวเราะ","ร้องไห้","ยิ้ม","ตะโกน",

  // แนวคิด
  "เวลา","พลัง","พลังงาน","แรง","ความเร็ว","เสียง","ดนตรี",
  "เพลง","เกม","กีฬา","การแข่งขัน","ทีม","เป้าหมาย","ชัยชนะ",
  "ความพ่ายแพ้","โชค","เวทมนตร์","ปริศนา","ความลับ","ความจริง",
  "แผน","ภารกิจ","สัญญาณ","ข้อความ","ความทรงจำ","ความคิด",
  "ความหวัง","ความกลัว","ความรัก","ความเกลียด","สันติภาพ",
  "สงคราม","ชีวิต","ความตาย","ความโกลาหล","ระเบียบ","อิสรภาพ",
  "เกียรติ","โชคชะตา","ความยุติธรรม","อันตราย","สมดุล","แรงโน้มถ่วง",
  "ความเงียบ","ความฝัน","วิญญาณ","กับดัก",

  // วัสดุ
  "เหล็ก","เหล็กกล้า","ทองแดง","สำริด","คริสตัล","เพชร",
  "ทับทิม","มรกต","ไพลิน","ไข่มุก","หยก","แก้ว","พลาสติก",
  "ยาง","ดินเหนียว","กระดาษ","ไม้","ผ้า","ฝ้าย",

  // เทคโนโลยี
  "หุ่นยนต์","โดรน","เลเซอร์","เรดาร์","ชิป","ข้อมูล","เครือข่าย",
  "เซิร์ฟเวอร์","ไวรัส","ปุ่ม","สวิตช์","แบตเตอรี่","เครื่องจักร",
  "อุปกรณ์","เครื่องมือ","รหัส","พลังไฟฟ้า",

  // อาวุธ & แฟนตาซี
  "ดาบ","มีดสั้น","ขวาน","ค้อน","หอก","ธนู","ลูกธนู","โล่",
  "เกราะ","ระเบิด","ปืน","กระสุน","ปืนใหญ่","ผี","ปีศาจ",
  "เทวดา","สัตว์ประหลาด","ยักษ์","ฟีนิกซ์","ยูนิคอร์น",
  "มงกุฎ","บัลลังก์","หน้ากาก","กรงเล็บ","เขี้ยว"
];
