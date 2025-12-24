# CINEMA TICKET BOOKING APP - TÀI LIỆU DỰ ÁN

## 📋 Tài liệu chính

### 1. **BÁO CÁO ĐỀ TÀI** (`BÁO_CÁO_ĐỀ_TÀI.md`)

- ✅ Báo cáo đầy đủ theo mục lục yêu cầu
- Cơ sở lý thuyết: TypeScript, React Native, Expo, công cụ phát triển
- Phân tích hệ thống: Use-case, yêu cầu chức năng (14 use-case chi tiết)
- Kết quả xây dựng: Cấu trúc dự án, Firestore schema, Firebase rules
- Kết luận & hướng phát triển ngắn/trung/dài hạn
- **Cần vẽ diagram? Xem tài liệu dưới**

### 2. **HƯỚNG DẪN VẼ DIAGRAM** (`HƯỚNG_DẪN_VẼ_DIAGRAM.md`)

- 8 loại diagram chính (Use-Case, ERD, Wireframe, Architecture, v.v.)
- Prompt đã chuẩn bị cho từng diagram
- Copy-paste vào ChatGPT, Claude, Gemini hoặc công cụ Draw.io
- Danh sách công cụ đề xuất cho mỗi loại diagram

---

## 🎯 Cách sử dụng

### Nếu bạn cần viết báo cáo:

1. Mở **`BÁO_CÁO_ĐỀ_TÀI.md`**
2. Sao chép nội dung cần thiết
3. Dán vào Word/Google Docs
4. Điều chỉnh theo tiêu chuẩn của trường

### Nếu bạn cần diagram:

1. Mở **`HƯỚNG_DẪN_VẼ_DIAGRAM.md`**
2. Chọn loại diagram cần vẽ (Use-Case, ERD, Wireframe, v.v.)
3. Copy prompt tương ứng
4. Dán vào:
   - **ChatGPT**: Paste prompt → Generate
   - **Draw.io**: Paste prompt vào AI features hoặc vẽ thủ công
   - **Figma**: Tạo wireframe dựa trên mô tả
   - **Lucidchart**: Tạo diagram từ template
5. Export PNG/SVG, chèn vào báo cáo

---

## 📁 Cấu trúc dự án

```
ticketbooking1/
├── src/
│   ├── screens/user/         # User interface screens
│   ├── screens/admin/        # Admin management screens
│   ├── context/              # AuthContext (state management)
│   ├── config/               # Firebase config
│   └── navigation/           # App routing
├── firestore.rules           # Firestore security rules
├── storage.rules             # Cloud Storage security rules
├── BÁO_CÁO_ĐỀ_TÀI.md        # 📌 Full project report
├── HƯỚNG_DẪN_VẼ_DIAGRAM.md   # 📌 Diagram prompts
└── readMe.md                 # Quick start guide
```

---

## 🔧 Tech Stack

| Layer               | Technology                          |
| ------------------- | ----------------------------------- |
| **Frontend**        | React Native, Expo 54, TypeScript   |
| **Backend**         | Firebase (Auth, Firestore, Storage) |
| **State**           | React Context API                   |
| **Navigation**      | React Navigation                    |
| **UI Components**   | React Native, Expo modules          |
| **Package Manager** | npm                                 |
| **Build Tool**      | Metro (React Native)                |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run on web
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Clear cache & restart
npx expo start --clear
```

---

## 📊 Chức năng chính

### 👤 User Features

- ✅ Đăng ký/đăng nhập
- ✅ Duyệt phim, tìm kiếm
- ✅ Xem suất chiếu
- ✅ Chọn ghế, đặt vé
- ✅ Thanh toán
- ✅ Xem vé (QR code)
- ✅ Quản lý tài khoản

### 🛡️ Admin Features

- ✅ Dashboard với thống kê
- ✅ Quản lý phim (CRUD)
- ✅ Quản lý suất chiếu & ghế
- ✅ Quản lý khuyến mãi
- ✅ Xem/quản lý bookings
- ✅ Xem báo cáo doanh thu

---

## 🔐 Security Rules

### Firestore Rules

- **Users**: Chỉ đọc hồ sơ của chính mình (admin xem tất cả)
- **Movies/Showtimes**: Công khai đọc, admin viết
- **Bookings**: Chỉ chủ nhân & admin xem, chỉ chủ nhân tạo
- **Seats**: Công khai đọc, admin tạo/xóa, user update khi book

### Storage Rules

- **promotions/**, **articles/**: Công khai đọc, admin viết
- Mặc định: Công khai đọc, cấm viết

---

## 📝 Firebase Config

**Project ID:** `ticketbooking1-132b4`

Các collections chính:

- `users/` - Hồ sơ người dùng
- `movies/` - Thông tin phim
- `showtimes/` - Suất chiếu
- `seats/` - Thông tin ghế
- `bookings/` - Lịch sử đặt vé
- `promotions/` - Chương trình khuyến mãi
- `articles/` - Bài viết

---

## 🐛 Known Issues & Fixes

### Image Picker Deprecation

- **Issue**: Warning về `MediaTypeOptions`
- **Fix**: Đã cập nhật sang `mediaTypes: ["images"]`
- **Status**: ✅ Fixed

### Storage Permission Error

- **Issue**: `[storage/unauthorized]` khi upload
- **Cause**: Người dùng không phải admin hoặc chưa deploy rules
- **Fix**: Đảm bảo user có `role: "admin"` trong Firestore, deploy storage rules
- **Status**: ⚠️ Needs deployment

---

## 🔄 Development Workflow

1. **Thay đổi code** → `npm start` automatically refreshes
2. **Thêm feature** → Cập nhật Firebase rules nếu cần
3. **Test trên device** → `npx expo start --clear`
4. **Deploy rules** → `firebase deploy --only firestore:rules,storage`

---

## 📚 Tài liệu tham khảo

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [Firebase Docs](https://firebase.google.com/docs)
- [React Navigation Docs](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📞 Support

**File báo cáo chính:**

- `BÁO_CÁO_ĐỀ_TÀI.md` - Toàn bộ nội dung báo cáo, sẵn sàng copy

**Cần vẽ diagram?**

- `HƯỚNG_DẪN_VẼ_DIAGRAM.md` - Copy prompt, paste vào AI hoặc công cụ

**Quick questions?**

- Xem `readMe.md` để setup nhanh
- Kiểm tra `firestore.rules` & `storage.rules` để hiểu quyền

---

**Phiên bản:** 1.0.0  
**Ngày cập nhật:** Tháng 12, 2025  
**Status:** ✅ Production Ready (với lưu ý về Storage rules)

---

## ⚡ Next Steps

1. ✅ Báo cáo viết xong → Chuyển sang Word nếu cần
2. ✅ Diagram prompts sẵn sàng → Dùng AI hoặc Draw.io để vẽ
3. ⚠️ Deploy Firestore/Storage rules → Chạy `firebase deploy`
4. 🔄 Test booking flow → Đảm bảo admin user có role "admin"

Bắt đầu từ **`BÁO_CÁO_ĐỀ_TÀI.md`** ngay!
