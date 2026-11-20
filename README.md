# Deadstock Bengaluru — Official Shopify Theme & Catalog

This repository is a fully functional **Shopify Online Store 2.0 Theme** combined with your sanitized product catalog data. It recreates the look, typography, color palette, and layout of Deadstock Bengaluru on Shopify.

---

## 🎨 Theme Look & Design Features

- **Typography & Aesthetics:** Styled with *Bricolage Grotesque* and *Instrument Serif* for an architectural, editorial marketplace look.
- **Palette:** Forest green (`#2F4A3A`), Sand (`#ECE7DD`), Paper background (`#F6F4EF`), and Ink text (`#26282B`).
- **Hero Banner:** Architectural photography with customizable tagline and quick search.
- **Visual Category Grid:** High-res image tiles for Tiles, Veneers, Sanitaryware, Natural Stone, Louvers, and Laminates.
- **Deadstock Product Cards:** Condition pills (*Unused surplus*, *Discontinued stock*, *Opened packaging*), Asking Price, and Strike-through MRP.
- **Seller-Contact Model:** Product detail page displays seller/dealer information and direct contact options.

---

## 🚀 How to Connect this Theme to Shopify

### Step 1: Connect Theme via GitHub
1. In your **Shopify Admin**, go to **Online Store** &rarr; **Themes**.
2. Click **Add theme** &rarr; select **Connect from GitHub**.
3. Select your GitHub account (`loontoons-crtl`) and choose this repository.
4. Select the `main` branch and click **Connect**.
5. Once connected, click **Customize** or **Publish** to make it your live store design!

### Step 2: Import Your Product Inventory
1. In your **Shopify Admin**, go to **Products**.
2. Click **Import** (top-right).
3. Choose the file located in `catalog/shopify-products-export.csv`.
4. Click **Upload and continue**, review the preview, and click **Import products**.

---

## 📁 Repository Structure

```
├── assets/          # CSS, JS, category photography & hero images
├── config/          # settings_schema.json & theme color configurations
├── layout/          # theme.liquid master layout
├── locales/         # en.default.json language strings
├── sections/        # Modular sections (Hero, Categories, Products, Header, Footer)
├── snippets/        # Product card & icon snippets
├── templates/       # Online Store 2.0 JSON templates
└── catalog/         # Sanitized CSV and JSON database exports
```

---

## 🛡️ Privacy & Sanitization

This repository contains **NO `.env` files, NO password hashes, NO API secrets, and NO authentication tokens**. It is safe to use in public or private repositories.
