# Chef Recipes – React 19 + Vite

[🇹🇷 Türkçe](#-türkçe) | [EN](#en)

## 🇹🇷 Türkçe

Chef Recipes, elinizdeki malzemelerle AI destekli tarif önerileri sunan modern bir React uygulamasıdır. API'den tarif çekmek için en az 3 malzeme girmeniz gerekmektedir.

### Özellikler

- **React 19 ile geliştirilmiş modern bileşen mimarisi**
- **State Management:** React `useState` hook’ları ile dinamik veri yönetimi
- **Form Handling:** Controlled form ile kullanıcıdan malzeme ekleme
- **Conditional Rendering:** Yükleniyor (loading) ve tarif gösterimi için koşullu render
- **AI Entegrasyonu:** HuggingFace API ile Mixtral-8x7B modelinden gerçek zamanlı tarif üretimi
- **Environment Variables:** API anahtarı `.env` dosyasında güvenli şekilde saklanır
- **Accessibility:** `aria-live` ile erişilebilirlik desteği
- **Best Practices:** Bileşen ve stil dosyalarında tutarlı isimlendirme, fonksiyonel bileşenler, modüler yapı

### Kurulum

1. Depoyu klonlayın:
   ```
   git clone https://github.com/RobinTR/react-js-projects.git
   cd react-js-projects/react/chef-recipes
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

3. `.env.example` dosyasını `.env` olarak kopyalayın ve HuggingFace API anahtarınızı girin:
   ```
   VITE_HUGGINGFACE_API_KEY=YOUR_API_KEY_HERE
   ```

4. Uygulamayı başlatın:
   ```
   npm run dev
   ```

### Kullanılan Teknolojiler

- **React 19**
- **Vite**
- **HuggingFace Inference API**
- **react-markdown & remark-gfm** (Markdown render için)
- **CSS Modules (bileşen bazlı stiller)**

### Kodda Öne Çıkanlar

  `Main.jsx` dosyasında malzemeler ve tarifler için state yönetimi, formdan veri alma ve güncelleme.
  Tarif yüklenirken “Chef is preparing your recipe...” mesajı, tarif geldikten sonra markdown olarak gösterim.
  `ai.js` dosyasında HuggingFace API ile tarif önerisi alınır ve markdown formatında ekrana yansıtılır.
  API anahtarı `.env` dosyasında tutulur ve `.gitignore` ile gizlenir.
- **Ref Kullanımı:**  
  Form elemanlarında veya belirli bileşenlerde odak yönetimi ve doğrudan DOM erişimi için React `useRef` kullanılmıştır. Örneğin, kullanıcı yeni bir malzeme eklediğinde input alanının otomatik olarak odaklanması sağlanır.

---

## EN

Chef Recipes is a modern React application that provides AI-powered recipe suggestions based on the ingredients you have. You must enter at least 3 ingredients to fetch a recipe from the API.

### Features

- **Modern component architecture with React 19**
- **State Management:** Dynamic data handling with React `useState` hooks
- **Form Handling:** Controlled form for user ingredient input
- **Conditional Rendering:** Loading indicator and recipe display with conditional rendering
- **AI Integration:** Real-time recipe generation using HuggingFace API and Mixtral-8x7B model
- **Environment Variables:** API key securely stored in `.env` file
- **Accessibility:** `aria-live` support for better accessibility
- **Best Practices:** Consistent naming for components and styles, functional components, modular structure

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/RobinTR/react-js-projects.git
   cd react-js-projects/react/chef-recipes
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy `.env.example` to `.env` and add your HuggingFace API key:
   ```
   VITE_HUGGINGFACE_API_KEY=YOUR_API_KEY_HERE
   ```

4. Start the application:
   ```
   npm run dev
   ```

### Technologies Used

- **React 19**
- **Vite**
- **HuggingFace Inference API**
- **react-markdown & remark-gfm** (for Markdown rendering)
- **CSS Modules (component-based styles)**

### Code Highlights

  State management for ingredients and recipes, form data handling and updates in `Main.jsx`.
  Loading message (“Chef is preparing your recipe...”) while fetching, recipe displayed in markdown after response.
  Recipe suggestions fetched from HuggingFace API and rendered in markdown via `ai.js`.
  API key stored in `.env` and ignored via `.gitignore`.
- **Ref Usage:**  
  React `useRef` is used for direct DOM access and focus management in form elements or specific components. For example, when a user adds a new ingredient, the input field is automatically focused.
