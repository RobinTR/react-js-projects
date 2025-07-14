## Language

- [🇹🇷 Türkçe](#turkish)
- [🇺🇸 English](#english)

---

<div id="turkish" class="turkish-section">
## 🇹🇷 Türkçe

# Hang The Language

Modern React ile geliştirilmiş bir "Adam Asmaca" kelime tahmin oyunu.

## Canlı Demo
[Vercel Üzerinden İncele](https://hang-the-language.vercel.app/)

## Özellikler

- **React Fonksiyonel Bileşenler**: Tüm arayüz fonksiyonel bileşenler ve hook'lar (`useState`) ile yazıldı.
- **Modüler Yapı**: Oyun durumu, can/chip göstergesi, kelime kutusu ve klavye gibi ana bölümler ayrı bileşen dosyalarında.
- **State Yönetimi**: Oyun mantığı ve UI güncellemeleri için React'ın kendi state sistemi kullanıldı.
- **Erişilebilirlik**: `aria-live`, `role`, `aria-disabled` gibi özelliklerle ekran okuyucu desteği.
- **Dinamik Stil**: Koşullu class yönetimi için `clsx` kütüphanesi kullanıldı.
- **Animasyon**: Kazanma durumunda `react-confetti-explosion` ile konfeti animasyonu.
- **Yardımcı Fonksiyonlar**: Oyun mantığı ve yardımcılar `utils/` klasöründe.

## Görseller
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/1f08cbcc-fc14-4179-8358-2ff8d54e5eee" />
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/4f2a2fe1-6cdc-497e-89a4-ab656500c1f5" />
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/8ca75b40-a94f-43ab-bb86-bbcd2640a91f" />



## Dosya Yapısı

```
src/
  components/
    Header.jsx
    LanguageChips.jsx
    GameStatus.jsx
    WordDisplay.jsx
    Keyboard.jsx
    Chip.jsx
  utils/
    languages.js
    gameUtils.js
  App.jsx
  App.css
```

## Çalıştırma

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Geliştirme sunucusunu başlatın:
   ```bash
   npm start
   ```

## Kullanılan Teknolojiler

- **React 19**
- **React Fonksiyonel Bileşenler & Hook'lar**
- **clsx** ile koşullu class yönetimi
- **react-confetti-explosion** ile animasyon
- **CSS** ile stil yönetimi

## Erişilebilirlik

- `aria-live`, `role`, `aria-disabled` ile ekran okuyucu desteği
- Ekran okuyucular için gizli status mesajları

## Özelleştirme

- Yeni dilleri `utils/languages.js` dosyasına ekleyebilirsiniz.
- Kelime listesini veya oyun mantığını `utils/gameUtils.js` dosyasında değiştirebilirsiniz.
</div>

---

<div id="english" class="english-section">
## 🇺🇸 English

# Hang The Language

A modern Hangman-style word guessing game built with React.

## Live Demo
[View on Vercel](https://hang-the-language.vercel.app/)

## Features

- **React Functional Components**: All UI is built using functional components and React hooks (`useState`).
- **Component Structure**: Modular design with separate components for game status, chips/lives, word display, and keyboard.
- **State Management**: Uses React's local state for game logic and UI updates.
- **Accessibility**: Includes `aria-live`, `role`, and `aria-disabled` for screen reader support.
- **Dynamic Styling**: Uses the `clsx` library for conditional class names.
- **Confetti Animation**: Integrates `react-confetti-explosion` for win celebrations.
- **Custom Utilities**: Game logic helpers are separated in `utils/gameUtils.js` and `utils/languages.js`.
- **Responsive UI**: Layout and styles are managed with CSS modules for a clean, responsive look.

## Images
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/1f08cbcc-fc14-4179-8358-2ff8d54e5eee" />
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/4f2a2fe1-6cdc-497e-89a4-ab656500c1f5" />
<img width="400" height="400" alt="Hang the Language Game Picture" src="https://github.com/user-attachments/assets/8ca75b40-a94f-43ab-bb86-bbcd2640a91f" />

## Project Structure

```
src/
  components/
    Header.jsx
    LanguageChips.jsx
    GameStatus.jsx
    WordDisplay.jsx
    Keyboard.jsx
    Chip.jsx
  utils/
    languages.js
    gameUtils.js
  App.jsx
  App.css
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- **React 19**
- **React Functional Components & Hooks**
- **clsx** for conditional class names
- **react-confetti-explosion** for win animation
- **CSS** for styling

## Accessibility

- Uses `aria-live`, `role`, and `aria-disabled` for better screen reader support.
- Visually hidden status messages for assistive technologies.

## Customization

- Add new languages in `utils/languages.js`.
- Change word list or game logic in `utils/gameUtils.js`.
</div>
