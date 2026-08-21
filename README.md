# Cất Link (CastLink) — Website & App Store Metadata Portal

Thư mục này chứa toàn bộ mã nguồn website tĩnh hoàn chỉnh (Landing page, Privacy Policy, Support & FAQ, Terms of Service) cho ứng dụng iOS **Cất Link (CastLink)**.

---

## 📁 Cấu trúc thư mục

```text
website/
├── index.html        # Trang chủ giới thiệu app & tương tác live mockup
├── privacy.html      # Chính sách quyền riêng tư (Song ngữ, chuẩn Apple App Store & GDPR)
├── support.html      # Trang Hỗ trợ, Hướng dẫn cài Share Sheet & FAQ
├── terms.html        # Điều khoản sử dụng (Apple Standard EULA)
├── style.css         # Hệ thống thiết kế Dark/Light Glassmorphism & Token màu của App
├── main.js           # Xử lý đổi giao diện Sáng/Tối, đổi ngôn ngữ VI/EN, Accordion FAQ
└── assets/
    ├── AppIcon-1024.png        # Icon app chuẩn 1024x1024
    └── AppIcon-Transparent.png # Logo app nền trong suốt
```

---

## 🚀 Cách Deploy lên GitHub Pages trong 1 phút

### Cách 1: Sử dụng thư mục `/docs` trên repo hiện tại
1. Push toàn bộ code lên GitHub:
   ```bash
   git add .
   git commit -m "feat: add landing page, privacy policy and support site"
   git push origin main
   ```
2. Vào **Settings** của Repository trên GitHub $\rightarrow$ Mục **Pages** (bên menu trái).
3. Tại phần **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`
   - **Branch**: Chọn `main` và thư mục `/docs` $\rightarrow$ Nhấn **Save**.
4. Website sẽ online tại địa chỉ:
   - **Trang chủ (Marketing URL):** `https://<your-username>.github.io/<repo-name>/`
   - **Privacy Policy URL:** `https://<your-username>.github.io/<repo-name>/privacy.html`
   - **Support URL:** `https://<your-username>.github.io/<repo-name>/support.html`

### Cách 2: Tạo repository riêng (vd: `catlink-website`)
1. Tạo một repository mới trên GitHub (vd: `catlink-web` hoặc `catlink.github.io`).
2. Copy toàn bộ nội dung trong thư mục `website/` vào repo đó và push lên `main`.
3. Bật GitHub Pages với root `/` (hoặc kết nối Vercel / Cloudflare Pages).

---

## 📋 URL nộp lên App Store Connect

- **Privacy Policy URL:** `https://<your-domain>/privacy.html`
- **Support URL:** `https://<your-domain>/support.html`
- **Marketing URL (Optional):** `https://<your-domain>/`
# CatLinkWebsite
