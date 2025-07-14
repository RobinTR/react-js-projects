<details>
<summary><a href="#tr">🇹🇷 Türkçe</a></summary>

# Hang The Language

Modern React ile geliştirilmiş bir "Adam Asmaca" kelime tahmin oyunu.

## Özellikler

- **React Fonksiyonel Bileşenler**: Tüm arayüz fonksiyonel bileşenler ve hook'lar (`useState`) ile yazıldı.
- **Modüler Yapı**: Oyun durumu, can/chip göstergesi, kelime kutusu ve klavye gibi ana bölümler ayrı bileşen dosyalarında.
- **State Yönetimi**: Oyun mantığı ve UI güncellemeleri için React'ın kendi state sistemi kullanıldı.
- **Erişilebilirlik**: `aria-live`, `role`, `aria-disabled` gibi özelliklerle ekran okuyucu desteği.
- **Dinamik Stil**: Koşullu class yönetimi için `clsx` kütüphanesi kullanıldı.
- **Animasyon**: Kazanma durumunda `react-confetti-explosion` ile konfeti animasyonu.
- **Yardımcı Fonksiyonlar**: Oyun mantığı ve yardımcılar `utils/` klasöründe.

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

- **React 18+**
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

</details>

<details>
<summary><a href="#en">🇺🇸 English</a></summary>

# Hang The Language

A modern Hangman-style word guessing game built with React.

## Features

- **React Functional Components**: All UI is built using functional components and React hooks (`useState`).
- **Component Structure**: Modular design with separate components for game status, chips/lives, word display, and keyboard.
- **State Management**: Uses React's local state for game logic and UI updates.
- **Accessibility**: Includes `aria-live`, `role`, and `aria-disabled` for screen reader support.
- **Dynamic Styling**: Uses the `clsx` library for conditional class names.
- **Confetti Animation**: Integrates `react-confetti-explosion` for win celebrations.
- **Custom Utilities**: Game logic helpers are separated in `utils/gameUtils.js` and `utils/languages.js`.
- **Responsive UI**: Layout and styles are managed with CSS modules for a clean, responsive look.

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

- **React 18+**
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

</details>
