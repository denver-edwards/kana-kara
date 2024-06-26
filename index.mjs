// index.js

const hiragana = [
  { type: "hiragana", group: "base", kanji: "あ", english: "a" },
  { type: "hiragana", group: "base", kanji: "い", english: "i" },
  { type: "hiragana", group: "base", kanji: "う", english: "u" },
  { type: "hiragana", group: "base", kanji: "え", english: "e" },
  { type: "hiragana", group: "base", kanji: "お", english: "o" },

  { type: "hiragana", group: "k", kanji: "か", english: "ka" },
  { type: "hiragana", group: "k", kanji: "き", english: "ki" },
  { type: "hiragana", group: "k", kanji: "く", english: "ku" },
  { type: "hiragana", group: "k", kanji: "け", english: "ke" },
  { type: "hiragana", group: "k", kanji: "こ", english: "ko" },

  { type: "hiragana", group: "s", kanji: "さ", english: "sa" },
  { type: "hiragana", group: "s", kanji: "し", english: "shi" },
  { type: "hiragana", group: "s", kanji: "す", english: "su" },
  { type: "hiragana", group: "s", kanji: "せ", english: "se" },
  { type: "hiragana", group: "s", kanji: "そ", english: "so" },

  { type: "hiragana", group: "t", kanji: "た", english: "ta" },
  { type: "hiragana", group: "t", kanji: "ち", english: "chi" },
  { type: "hiragana", group: "t", kanji: "つ", english: "tsu" },
  { type: "hiragana", group: "t", kanji: "て", english: "te" },
  { type: "hiragana", group: "t", kanji: "と", english: "to" },

  { type: "hiragana", group: "n", kanji: "な", english: "na" },
  { type: "hiragana", group: "n", kanji: "に", english: "ni" },
  { type: "hiragana", group: "n", kanji: "ぬ", english: "nu" },
  { type: "hiragana", group: "n", kanji: "ね", english: "ne" },
  { type: "hiragana", group: "n", kanji: "の", english: "no" },

  { type: "hiragana", group: "h", kanji: "は", english: "ha" },
  { type: "hiragana", group: "h", kanji: "ひ", english: "hi" },
  { type: "hiragana", group: "h", kanji: "ふ", english: "fu" },
  { type: "hiragana", group: "h", kanji: "へ", english: "he" },
  { type: "hiragana", group: "h", kanji: "ほ", english: "ho" },

  { type: "hiragana", group: "m", kanji: "ま", english: "ma" },
  { type: "hiragana", group: "m", kanji: "み", english: "mi" },
  { type: "hiragana", group: "m", kanji: "む", english: "mu" },
  { type: "hiragana", group: "m", kanji: "め", english: "me" },
  { type: "hiragana", group: "m", kanji: "も", english: "mo" },

  { type: "hiragana", group: "y", kanji: "や", english: "ya" },
  { type: "hiragana", group: "y", kanji: "ゆ", english: "yu" },
  { type: "hiragana", group: "y", kanji: "よ", english: "yo" },

  { type: "hiragana", group: "r", kanji: "ら", english: "ra" },
  { type: "hiragana", group: "r", kanji: "り", english: "ri" },
  { type: "hiragana", group: "r", kanji: "る", english: "ru" },
  { type: "hiragana", group: "r", kanji: "れ", english: "re" },
  { type: "hiragana", group: "r", kanji: "ろ", english: "ro" },

  { type: "hiragana", group: "w", kanji: "わ", english: "wa" },
  { type: "hiragana", group: "w", kanji: "を", english: "wo" },

  { type: "hiragana", group: "sole", kanji: "ん", english: "n" },
];

const katakana = [
  { type: "katakana", group: "base", kanji: "ア", english: "a" },
  { type: "katakana", group: "base", kanji: "イ", english: "i" },
  { type: "katakana", group: "base", kanji: "ウ", english: "u" },
  { type: "katakana", group: "base", kanji: "エ", english: "e" },
  { type: "katakana", group: "base", kanji: "オ", english: "o" },

  { type: "katakana", group: "k", kanji: "カ", english: "ka" },
  { type: "katakana", group: "k", kanji: "キ", english: "ki" },
  { type: "katakana", group: "k", kanji: "ク", english: "ku" },
  { type: "katakana", group: "k", kanji: "ケ", english: "ke" },
  { type: "katakana", group: "k", kanji: "コ", english: "ko" },

  { type: "katakana", group: "s", kanji: "サ", english: "sa" },
  { type: "katakana", group: "s", kanji: "シ", english: "shi" },
  { type: "katakana", group: "s", kanji: "ス", english: "su" },
  { type: "katakana", group: "s", kanji: "セ", english: "se" },
  { type: "katakana", group: "s", kanji: "ソ", english: "so" },

  { type: "katakana", group: "t", kanji: "タ", english: "ta" },
  { type: "katakana", group: "t", kanji: "チ", english: "chi" },
  { type: "katakana", group: "t", kanji: "ツ", english: "tsu" },
  { type: "katakana", group: "t", kanji: "テ", english: "te" },
  { type: "katakana", group: "t", kanji: "ト", english: "to" },

  { type: "katakana", group: "n", kanji: "ナ", english: "na" },
  { type: "katakana", group: "n", kanji: "ニ", english: "ni" },
  { type: "katakana", group: "n", kanji: "ヌ", english: "nu" },
  { type: "katakana", group: "n", kanji: "ネ", english: "ne" },
  { type: "katakana", group: "n", kanji: "ノ", english: "no" },

  { type: "katakana", group: "h", kanji: "ハ", english: "ha" },
  { type: "katakana", group: "h", kanji: "ヒ", english: "hi" },
  { type: "katakana", group: "h", kanji: "フ", english: "fu" },
  { type: "katakana", group: "h", kanji: "ヘ", english: "he" },
  { type: "katakana", group: "h", kanji: "ホ", english: "ho" },

  { type: "katakana", group: "m", kanji: "マ", english: "ma" },
  { type: "katakana", group: "m", kanji: "ミ", english: "mi" },
  { type: "katakana", group: "m", kanji: "ム", english: "mu" },
  { type: "katakana", group: "m", kanji: "メ", english: "me" },
  { type: "katakana", group: "m", kanji: "モ", english: "mo" },

  { type: "katakana", group: "y", kanji: "ヤ", english: "ya" },
  { type: "katakana", group: "y", kanji: "ユ", english: "yu" },
  { type: "katakana", group: "y", kanji: "ヨ", english: "yo" },

  { type: "katakana", group: "r", kanji: "ラ", english: "ra" },
  { type: "katakana", group: "r", kanji: "リ", english: "ri" },
  { type: "katakana", group: "r", kanji: "ル", english: "ru" },
  { type: "katakana", group: "r", kanji: "レ", english: "re" },
  { type: "katakana", group: "r", kanji: "ロ", english: "ro" },

  { type: "katakana", group: "w", kanji: "ワ", english: "wa" },
  { type: "katakana", group: "w", kanji: "ヲ", english: "wo" },

  { type: "katakana", group: "sole", kanji: "ン", english: "n" },
];

const extra = [
  { type: "hiragana", group: "extra", kanji: "っ", english: "-" },
  { type: "hiragana", group: "extra", kanji: "゛", english: "dakuten" },
  { type: "hiragana", group: "extra", kanji: "", english: "long dash" },
  { type: "hiragana", group: "extra", kanji: "゜", english: "handakuten" },
  { type: "katakana", group: "extra", kanji: "ッ", english: "tsu" },
  { type: "katakana", group: "extra", kanji: "゛", english: "dakuten" },
  { type: "katakana", group: "extra", kanji: "ー", english: "long dash" },
  { type: "katakana", group: "extra", kanji: "゜", english: "handakuten" },
];

export { hiragana, katakana };
