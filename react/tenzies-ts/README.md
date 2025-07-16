[Türkçe Açıklama](#tr) • [English Description](#en)

---

## <a name="tr"></a><sup>TR</sup> Türkçe Açıklama

🎲 **Tenzies**: React+TypeScript ile geliştirilmiş eğlenceli bir zar oyunudur!

🚀 Amaç: Tüm zarların aynı değere sahip olmasını sağlamak ve bunu mümkün olan en kısa sürede başarmaktır.

🕹️ **Oynanış**
- Oyun başladığında 10 adet zar rastgele değerlerle ekranda gösterilir.
- Her zarın üzerinde bir sayı (1-6 arası) bulunur.
- Oyuncu, istediği zarları tıklayarak "dondurabilir" (hold). Dondurulan zarlar bir sonraki atışta değişmez.
- 🎲 "Roll" butonuna basıldığında, dondurulmayan zarlar yeniden rastgele bir değere sahip olur.
- 🎉 Tüm zarlar aynı değere sahip ve dondurulmuş olduğunda oyun kazanılır. Ekranda konfeti animasyonu ve yeni oyuna başlama seçeneği çıkar.

⚛️ **React Özellikleri**
- **State Yönetimi (`useState`)**: Zarların durumu ve değerleri state ile yönetilir.
- **Effect (`useEffect`)**: Oyun kazanıldığında butona odaklanmak için kullanılır.
- **Ref (`useRef`)**: "Roll" butonuna odaklanmak için.
- **Component Yapısı**: `App.jsx` ana mantık, `Die.jsx` zar bileşeni.

🧩 **Kodun Mantığı**
- Zarlar rastgele oluşturulur ve dondurulabilir.
- "Roll" ile dondurulmayan zarlar yeniden atanır.
- Tüm zarlar aynı değerde ve dondurulmuşsa oyun kazanılır.

🔧 **Kullanılan Kütüphaneler**
- React, nanoid, react-confetti-explosion
  - **nanoid**: Her zar için benzersiz bir ID oluşturmak amacıyla kullanılır. Bu, React'ta liste render işlemlerinde anahtar (key) olarak kullanılır ve performans ile tutarlılık sağlar.
  - **react-confetti-explosion**: Oyun kazanıldığında ekranda konfeti animasyonu göstermek için kullanılır. Kullanıcıya görsel bir başarı hissi verir.

⚙️ **Kurulum**
```bash
npm install
npm run dev
```

## Görsel

<img width="445" height="433" alt="Screenshot 2025-07-13 104151" src="https://github.com/user-attachments/assets/0c8adb06-43d0-4e71-ac73-1540be0615f8" />
<img width="508" height="488" alt="Screenshot 2025-07-13 104235" src="https://github.com/user-attachments/assets/50141a13-ca2d-4a96-a326-38df553f26aa" />

🔢 **Eklenecek Özellikler**
- Sayaç (Timer) özelliği: Oyun süresini takip edebilirsiniz.

---

## <a name="en"></a><sup>EN</sup> English Description

🎲 **Tenzies**: A fun dice game built with React+TypeScript!

🚀 Goal: Get all dice to show the same value as quickly as possible.

🕹️ **Gameplay**
- At the start, 10 dice are displayed with random values (1-6).
- Click any die to "hold" it; held dice won't change on the next roll.
- 🎲 Click "Roll" to re-roll all unheld dice.
- 🎉 When all dice show the same value and are held, you win! Confetti animation and a "New Game" button appear.

⚛️ **React Features**
- **State Management (`useState`)**: Dice state and values are managed with React state.
- **Effect (`useEffect`)**: Focuses the button when the game is won.
- **Ref (`useRef`)**: Used to focus the "Roll" button.
- **Component Structure**: `App.jsx` (main logic), `Die.jsx` (die component).

🧩 **Logic**
- Dice are randomly generated and can be held.
- "Roll" re-rolls all unheld dice.
- When all dice are held and show the same value, the game is won.

🔧 **Libraries Used**
- React, nanoid, react-confetti-explosion
  - **nanoid**: Used to generate a unique ID for each die. This is used as a key in React's list rendering, ensuring performance and consistency.
  - **react-confetti-explosion**: Used to show a confetti animation on the screen when the game is won, providing a visual sense of achievement to the user.

⚙️ **Setup**
```bash
npm install
npm run dev
```

## Image

<img width="445" height="433" alt="Screenshot 2025-07-13 104151" src="https://github.com/user-attachments/assets/0c8adb06-43d0-4e71-ac73-1540be0615f8" />
<img width="508" height="488" alt="Screenshot 2025-07-13 104235" src="https://github.com/user-attachments/assets/50141a13-ca2d-4a96-a326-38df553f26aa" />

🔢 **Upcoming Features**
- Timer feature: You will be able to track game time.

---
