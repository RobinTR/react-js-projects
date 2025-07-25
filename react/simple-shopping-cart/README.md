# [Türkçe](#tr) | [English](#en)

# <a name="tr"></a>Simple Shopping Cart

## Proje Amacı

Bu proje, temel bir alışveriş sepeti uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, sepetlerine ekleyebilir, sepetten çıkarabilir ve toplam tutarı görebilirler. Modern React ekosisteminin en güncel teknolojileriyle geliştirilmiştir.

## Kullanılan Teknolojiler

- **React 19**: Arayüz geliştirme.
- **TypeScript**: Tip güvenliği ve daha iyi geliştirme deneyimi.
- **Redux Toolkit**: Global state yönetimi (sepet işlemleri).
- **React Router v7**: Sayfa yönlendirme ve route yönetimi.
- **Vite**: Hızlı geliştirme ve derleme ortamı.
- **Tailwind CSS**: Modern ve kolay kullanılabilir stil altyapısı.

## Özellikler

- Ürünleri listeleme (isim, açıklama, fiyat, görsel).
- Ürünleri sepete ekleme ve çıkarma.
- Sepetteki ürünlerin miktarını artırma/azaltma.
- Sepet toplam tutarını görüntüleme.
- Basit ve modern kullanıcı arayüzü.
- Responsive tasarım.
- Route tabanlı sayfa geçişleri (Ana sayfa, Sepet).
- State yönetimi ile tutarlı sepet işlemleri.

## Klasör Yapısı

```
app/
  components/      // Arayüz bileşenleri (Navbar, ProductCard, ProductList, CartItem)
  data/            // Ürün verileri
  routes/          // Sayfa bileşenleri (home, cart)
  store/           // Redux store ve slice'lar
  types/           // TypeScript tip tanımları
public/            // Statik dosyalar
```

## Kurulum ve Çalıştırma

1. Bağımlılıkları yükleyin:
   ```
   npm install
   ```
2. Geliştirme sunucusunu başlatın:
   ```
   npm run dev
   ```

## Notlar

- Vite ve Tailwind ile hızlı geliştirme ve modern stil desteği sağlanmıştır.
- Kodlar TypeScript ile yazılmıştır.

---

# <a name="en"></a>Simple Shopping Cart (English)

## Project Purpose

This project is a basic shopping cart application. Users can view products, add them to the cart, remove them from the cart, and see the total price. It is built with the latest technologies in the modern React ecosystem.

## Technologies Used

- **React 19**: UI development
- **TypeScript**: Type safety and better development experience
- **Redux Toolkit**: Global state management (cart operations)
- **React Router v7**: Page routing and route management
- **Vite**: Fast development and build environment
- **Tailwind CSS**: Modern and easy-to-use styling infrastructure

## Features

- List products (name, description, price, image)
- Add and remove products from the cart
- Increase/decrease product quantity in the cart
- View total cart price
- Simple and modern user interface
- Responsive design
- Route-based page transitions (Home, Cart)
- Consistent cart operations with state management

## Folder Structure

```
app/
  components/      // UI components (Navbar, ProductCard, ProductList, CartItem)
  data/            // Product data
  routes/          // Page components (home, cart)
  store/           // Redux store and slices
  types/           // TypeScript type definitions
public/            // Static files
```

## Installation and Running

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```

## Notes

- Fast development and modern styling with Vite and Tailwind.
- All code is written in TypeScript.