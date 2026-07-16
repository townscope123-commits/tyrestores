# Tyrestore.pk — E-commerce Website + Admin Panel

Built with **Next.js 14 + Tailwind CSS + Supabase** (database, auth, storage).
Theme: white / black / red. Includes: home page, tyre shop with individual product pages,
blog, about/contact/terms pages, customer login + admin panel with a rich-text editor for
tyre & blog content, order management, payment settings (COD + Bank Transfer), login
activity log, floating WhatsApp button, and full SEO (sitemap.xml, robots.txt, dynamic
favicon, meta tags, JSON-LD).

---

## 1. Pehle Supabase set up karein (5 min)

1. [supabase.com](https://supabase.com) par free account banayein → **New Project**.
2. Project ready hone ke baad, left sidebar se **SQL Editor** kholein.
3. Is repo ki file `supabase/schema.sql` ka **poora content copy** karein, SQL Editor mein
   paste karein, aur **Run** dabayein. Ye tables, security rules, default payment methods
   (COD + Bank Transfer), aur image storage bucket sab bana dega.
4. Sidebar se **Project Settings → API** par jayein. Yahan se 3 cheezein copy karein:
   - `Project URL`
   - `anon public` key
   - `service_role` key (secret, kabhi frontend mein expose na karein)

## 2. Apna admin account banayein

1. Site chalne ke baad `/register` se ek normal account bana lein (apna email/password).
2. Supabase SQL Editor mein ye query chalayein (apna email daal kar):
   ```sql
   update profiles set is_admin = true where id = (select id from auth.users where email = 'you@example.com');
   ```
3. Ab is email/password se `/admin/login` par login kar sakte hain.

## 3. Environment variables

`.env.local.example` ko `.env.local` naam se copy karein aur apni Supabase details bharein:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://tyrestore.pk
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` wahi number hai jis par right-side WhatsApp button aur
Contact form messages jayenge — country code ke sath, bina `+` ke (e.g. `923001234567`).

## 4. Local par chala kar dekhein (optional)

```bash
npm install
npm run dev
```
Phir browser mein `http://localhost:3000` kholein.

## 5. GitHub par push karein

```bash
git init
git add .
git commit -m "Tyrestore.pk initial build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tyrestore.git
git push -u origin main
```
(GitHub.com par pehle ek naya empty repository "tyrestore" bana lein, phir upar wala
command chalayein.)

## 6. Vercel par deploy karein (Netlify se behtar option Next.js ke liye)

1. [vercel.com](https://vercel.com) par GitHub se sign in karein.
2. **Add New → Project** → apni `tyrestore` repo select karein → **Import**.
3. **Environment Variables** section mein wahi 5 variables daalein jo `.env.local` mein
   the (upar step 3 dekhein).
4. **Deploy** dabayein. 2-3 minute mein live link mil jayega, e.g. `tyrestore.vercel.app`.
5. Apna khareeda hua domain (`tyrestore.pk`) Vercel Project → Settings → Domains mein
   add kar ke connect kar sakte hain.

> **Netlify note:** Ye project Netlify par bhi deploy ho sakta hai (Next.js runtime
> support karta hai), lekin Vercel Next.js ke creators khud hain, is liye zyada
> seedha aur free tier zyada generous hai — isi liye Vercel recommend kar raha hoon.

## 7. Tyre ya blog post add karna

1. `/admin/login` se login karein.
2. **Tyres → + Add New Tyre** — title, size, price, image, aur description ke liye
   rich text editor (bold, headings, lists, links) available hai.
3. **Blog Posts → + Add New Post** — same tarha ka editor blog articles ke liye.
4. Har tyre aur blog post ka apna alag SEO-friendly page automatically ban jata hai
   (`/tyres/tyre-name`, `/blog/post-name`).

## 8. Payment methods

**Admin → Payment Settings** mein COD aur Bank Transfer ko on/off kar sakte hain, aur
Bank Transfer ke instructions (account number, bank name) edit kar sakte hain — ye
checkout page par customer ko dikhega.

## 9. Kon login kar raha hai dekhna

**Admin → Logged-In Users** page par registered customers ki list aur recent login
activity (email + time + device) dikhti hai.

---

### File map (jo cheez kahan hai)
- `app/` — har page (home, tyres, blog, about, contact, terms, cart, checkout, admin/*)
- `components/` — Header, Footer, WhatsApp button, tyre/blog forms, rich text editor
- `supabase/schema.sql` — pura database schema, security rules, image storage bucket
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.tsx` — SEO files (auto-generated, always up to date)
