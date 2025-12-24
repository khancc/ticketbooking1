# BÁO CÁO ĐỀ TÀI: HỆ THỐNG ĐẶT VÉ XEM PHIM ĐA NỀN TẢNG

---

## MỤC LỤC

1. [CHƯƠNG 1: CƠ SỞ LÝ THUYẾT](#chương-1-cơ-sở-lý-thuyết)
2. [CHƯƠNG 2: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG](#chương-2-phân-tích-và-thiết-kế-hệ-thống)
3. [CHƯƠNG 3: XÂY DỰNG ỨNG DỤNG](#chương-3-xây-dựng-ứng-dụng)
4. [CHƯƠNG 4: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN](#chương-4-kết-luận-và-hướng-phát-triển)

---

## CHƯƠNG 1: CƠ SỞ LÝ THUYẾT

### 1.1 Tổng quan

#### 1.1.1 Giới thiệu

Hệ thống **Cinema Ticket Booking App** là một ứng dụng di động đa nền tảng được phát triển nhằm cung cấp giải pháp toàn diện cho việc đặt vé xem phim trực tuyến. Ứng dụng hỗ trợ cả nền tảng **iOS** (thông qua Expo), **Android** và **Web**, cho phép người dùng dễ dàng tìm kiếm, xem chi tiết phim, chọn ghế và thanh toán trực tuyến. Đồng thời, hệ thống cung cấp giao diện quản trị dành cho nhân viên quản lý phim, suất chiếu, khuyến mãi và phân tích dữ liệu đặt vé.

#### 1.1.2 Mục tiêu của đề tài

- **Cho người dùng:**

  - Tìm kiếm và xem thông tin chi tiết về phim
  - Chọn suất chiếu, ghế ngồi phù hợp
  - Thanh toán trực tuyến an toàn
  - Quản lý lịch sử đặt vé
  - Nhận thông báo về khuyến mãi và chương trình đặc biệt

- **Cho quản trị viên:**
  - Quản lý danh sách phim (thêm, sửa, xóa)
  - Quản lý suất chiếu và ghế ngồi
  - Theo dõi các đặt vé
  - Quản lý chương trình khuyến mãi
  - Xem thống kê doanh thu và báo cáo

#### 1.1.3 Phương pháp nghiên cứu

- **Phương pháp phân tích:** Phân tích các yêu cầu chức năng từ phía người dùng và quản trị viên
- **Phương pháp thiết kế:** Sử dụng mô hình Use-Case và thiết kế cơ sở dữ liệu Firestore
- **Phương pháp lập trình:** Phát triển ứng dụng theo mô hình component-based với React Native
- **Phương pháp kiểm thử:** Kiểm thử chức năng trên các nền tảng khác nhau

### 1.2 Ngôn ngữ và công cụ sử dụng

#### 1.2.1 Tổng quan TypeScript

**TypeScript** là một siêu tập hợp của JavaScript cung cấp hệ thống kiểu tĩnh. Những lợi ích:

- **Kiểm tra kiểu:** Phát hiện lỗi tại thời điểm biên dịch
- **Tính dễ bảo trì:** Code dễ hiểu và dễ tái sử dụng
- **Hỗ trợ công cụ tốt:** IDE cung cấp tự động hoàn thành tốt
- **Version hiện tại:** `~5.9.2`

**Ứng dụng trong dự án:**

- Tất cả các file screen, context, config được viết bằng TypeScript
- Định nghĩa kiểu cho `AuthContextType`, `User`, `Booking`, `Movie`, v.v.
- Hỗ trợ strict mode: `"strict": true` trong `tsconfig.json`

#### 1.2.2 Tổng quan React Native

**React Native** là framework cho phép xây dựng ứng dụng di động sử dụng JavaScript/TypeScript. Ưu điểm:

- **Viết một lần, chạy nhiều nền tảng:** Cùng code chạy trên iOS và Android
- **Component-based:** Xây dựng UI từ các component tái sử dụng
- **Hot Reload:** Thay đổi code được phản ánh ngay lập tức
- **Version hiện tại:** `^0.81.5`

**Ứng dụng trong dự án:**

- Sử dụng các component React Native: `View`, `ScrollView`, `FlatList`, `TextInput`, `TouchableOpacity`, v.v.
- Styling sử dụng `StyleSheet` cho hiệu suất tốt
- Quản lý state bằng `useState`, `useEffect` từ React Hooks

#### 1.2.3 Tổng quan Expo

**Expo** là nền tảng phát triển ứng dụng React Native quản lý các công việc phức tạp như build và deploy. Ưu điểm:

- **Phát triển nhanh:** Không cần xâu xé cấu hình native
- **Expo Go:** App test trên điện thoại thật mà không cần build
- **OTA Updates:** Cập nhật code mà không cần submit App Store
- **SDK 54.0.0:** Kèm React Native 0.81 và React 19.1

**Ứng dụng trong dự án:**

- `app.json` cấu hình Expo config
- Packages hỗ trợ:
  - `expo-image-picker` (~17.0.10): Chọn ảnh từ thư viện hoặc máy ảnh
  - `expo-linear-gradient` (~15.0.8): Hiệu ứng gradient
  - `expo-status-bar` (~3.0.9): Điều khiển status bar

#### 1.2.4 Công cụ hỗ trợ lập trình

| Công cụ                | Phiên bản | Mục đích                                             |
| ---------------------- | --------- | ---------------------------------------------------- |
| **Node.js**            | v22.15.0  | Runtime JavaScript cho npm, build tools              |
| **npm**                | Latest    | Quản lý dependencies                                 |
| **Firebase**           | ^11.6.1   | Backend, Authentication, Firestore Database, Storage |
| **React Navigation**   | ^7.x      | Điều hướng giữa các screen                           |
| **Babel**              | ^7.25.2   | Transpile TypeScript/JSX sang JavaScript             |
| **Metro**              | ^0.82.2   | Bundler cho React Native                             |
| **Visual Studio Code** | Latest    | Editor chính                                         |
| **Git**                | Latest    | Version control                                      |

---

## CHƯƠNG 2: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 2.1 Mô tả

Hệ thống gồm hai phần chính:

1. **Phía người dùng (User):** Duyệt phim, đặt vé, thanh toán, quản lý hồ sơ
2. **Phía quản trị (Admin):** Quản lý phim, suất chiếu, khuyến mãi, và thống kê

Toàn bộ dữ liệu được lưu trữ trên **Firebase Firestore** và **Storage**, với xác thực sử dụng **Firebase Authentication**.

### 2.2 Phân tích yêu cầu

#### 2.2.1 Yêu cầu chức năng

| Nhóm chức năng    | Người sử dụng | Mô tả                                            |
| ----------------- | ------------- | ------------------------------------------------ |
| **Xác thực**      | User, Admin   | Đăng ký, đăng nhập, đổi mật khẩu, đăng xuất      |
| **Tìm kiếm phim** | User, Admin   | Xem danh sách phim hiện tại và sắp tới, tìm kiếm |
| **Đặt vé**        | User          | Chọn suất chiếu, ghế, thanh toán, lưu vé         |
| **Quản trị**      | Admin         | CRUD phim, suất chiếu, khuyến mãi; xem thống kê  |
| **Thông báo**     | User          | Nhận thông báo khuyến mãi và cập nhật phim       |

#### 2.2.2 Chức năng của người dùng

1. **Đăng ký** - Tạo tài khoản với email và mật khẩu
2. **Đăng nhập** - Xác thực tài khoản
3. **Xem danh sách phim** - Liệt kê phim hiện tại và sắp tới
4. **Tìm kiếm phim** - Tìm phim theo tên
5. **Xem chi tiết phim** - Thông tin về phim, diễn viên, thời lượng
6. **Chọn suất chiếu** - Xem lịch chiếu theo ngày
7. **Chọn ghế** - Chọn ghế trống, xem ghế đã đặt
8. **Thanh toán** - Nhập thông tin thanh toán (demo)
9. **Xem vé** - Lịch sử đặt vé với QR code
10. **Quản lý tài khoản** - Cập nhật hồ sơ, phương thức thanh toán
11. **Thông báo** - Cài đặt nhận thông báo khuyến mãi

#### 2.2.3 Chức năng của quản trị viên

1. **Đăng nhập** - Xác thực tài khoản admin
2. **Dashboard** - Thống kê phim, đặt vé, doanh thu
3. **Quản lý phim** - Thêm, sửa, xóa phim; tải poster
4. **Quản lý suất chiếu** - Tạo suất chiếu, quản lý ghế
5. **Quản lý khuyến mãi** - Thêm, sửa, xóa chương trình khuyến mãi với bài viết
6. **Xem đặt vé** - Danh sách đặt vé, thông tin khách, tìm kiếm, sửa trạng thái
7. **Báo cáo** - Xem thống kê doanh thu, số lượng vé bán

### 2.3 Biểu đồ Use-Case

**PROMPT cho AI để vẽ Use-Case Diagram:**

```
Vẽ một UML Use-Case Diagram cho hệ thống đặt vé xem phim gồm 2 actors:

Actors:
- User (người dùng thường)
- Admin (quản trị viên)

Use Cases của User:
- Register / Login / Logout / Change Password
- View Movie List / View Movie Detail / Search Movie
- View Promotions / Read Article
- View Showtimes
- Select Seats / Confirm Booking
- Make Payment
- View My Tickets / Download Ticket
- Manage Profile / Manage Payment Methods
- Enable/Disable Notifications

Use Cases của Admin:
- Login / Logout
- View Dashboard / View Statistics
- Manage Movies (CRUD, upload poster)
- Manage Showtimes (Create, manage seats)
- Manage Promotions (CRUD, upload images)
- View/Manage Bookings (search, update status)

Relationships:
- Cả User và Admin đều có use case "Login"
- "Make Payment" include "Select Seats"
- "View Movie Detail" include "View Showtimes"
- "Manage Promotions" include "Upload Images"

Vẽ bằng format UML chuẩn, clear, dễ đọc, với màu sắc hợp lý.
```

#### 2.3.1 Đặc tả Use-Case

##### 2.3.1.1 Đăng ký (Register)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User (người chưa có tài khoản)                                                                                                                                                                                                                                                                                              |
| **Pre-condition**  | Ứng dụng đang chạy, user chưa đăng nhập                                                                                                                                                                                                                                                                                     |
| **Main Flow**      | 1. User nhấp vào "Register" <br> 2. Nhập email, mật khẩu, tên hiển thị <br> 3. Nhấp "Register" <br> 4. Hệ thống kiểm tra email chưa được dùng <br> 5. Tạo user trong Firebase Authentication <br> 6. Lưu user document vào Firestore với role = "user" <br> 7. Hiển thị thông báo thành công, chuyển tới màn hình đăng nhập |
| **Exception**      | Email đã tồn tại → Hiển thị lỗi <br> Mật khẩu yếu → Hiển thị lỗi <br> Network error → Hiển thị thông báo lỗi                                                                                                                                                                                                                |
| **Post-condition** | User tài khoản được tạo, sẵn sàng đăng nhập                                                                                                                                                                                                                                                                                 |

##### 2.3.1.2 Đăng nhập (Login)

| Thành phần         | Mô tả                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User, Admin                                                                                                                                                                                     |
| **Pre-condition**  | Ứng dụng đang chạy, user chưa đăng nhập                                                                                                                                                         |
| **Main Flow**      | 1. User nhập email và mật khẩu <br> 2. Nhấp "Login" <br> 3. Hệ thống xác thực qua Firebase <br> 4. Kiểm tra role từ users/{uid} <br> 5. Chuyển hướng: User → HomeScreen, Admin → AdminDashboard |
| **Exception**      | Email/mật khẩu sai → Hiển thị lỗi <br> Network error → Hiển thị thông báo                                                                                                                       |
| **Post-condition** | User/Admin đăng nhập thành công, AuthContext cập nhật                                                                                                                                           |

##### 2.3.1.3 Xem danh sách phim (View Movie List)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                                                                                             |
| **Pre-condition**  | User đã đăng nhập, HomeScreen được mở                                                                                                                                                                                                                            |
| **Main Flow**      | 1. HomeScreen fetch danh sách phim từ Firestore <br> 2. Chia phim thành 2 nhóm: Phim hiện tại, Phim sắp tới <br> 3. Hiển thị carousel khuyến mãi ở đầu <br> 4. Liệt kê phim trong FlatList với poster, tên, thể loại <br> 5. User có thể scroll, refresh dữ liệu |
| **Exception**      | Network error → Hiển thị thông báo <br> Không có phim → Hiển thị "Chưa có phim"                                                                                                                                                                                  |
| **Post-condition** | Danh sách phim được hiển thị, user có thể chọn phim                                                                                                                                                                                                              |

##### 2.3.1.4 Xem chi tiết phim (View Movie Detail)

| Thành phần         | Mô tả                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                          |
| **Pre-condition**  | Danh sách phim được hiển thị, user chọn một phim                                                                                                                                              |
| **Main Flow**      | 1. MovieDetailScreen fetch chi tiết phim từ Firestore <br> 2. Hiển thị: poster, tên, thể loại, thời lượng, đạo diễn, diễn viên, tóm tắt <br> 3. Nút "Đặt vé ngay" để chuyển tới BookingScreen |
| **Exception**      | Phim không tìm thấy → Hiển thị lỗi                                                                                                                                                            |
| **Post-condition** | Chi tiết phim được hiển thị, user sẵn sàng đặt vé                                                                                                                                             |

##### 2.3.1.5 Tìm kiếm phim (Search Movie)

| Thành phần         | Mô tả                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Actor**          | User                                                                                                                                                                     |
| **Pre-condition**  | HomeScreen được mở                                                                                                                                                       |
| **Main Flow**      | 1. User nhập tên phim vào search box <br> 2. Hệ thống lọc danh sách phim theo tên (case-insensitive) <br> 3. Hiển thị kết quả tìm kiếm <br> 4. User chọn phim từ kết quả |
| **Exception**      | Không tìm thấy phim → Hiển thị "Không có kết quả"                                                                                                                        |
| **Post-condition** | Kết quả tìm kiếm được hiển thị                                                                                                                                           |

##### 2.3.1.6 Đặt vé xem phim (Make Booking)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                                                                                                                                  |
| **Pre-condition**  | User chọn phim, MovieDetailScreen hiển thị                                                                                                                                                                                                                                                            |
| **Main Flow**      | 1. User chọn "Đặt vé ngay" → BookingScreen <br> 2. Chọn ngày xem → fetch showtimes từ Firestore <br> 3. Chọn suất chiếu (giờ) <br> 4. Chuyển tới SeatSelectionScreen <br> 5. Fetch thông tin ghế từ seats collection <br> 6. Hiển thị sơ đồ ghế, user chọn ghế trống <br> 7. Chuyển tới PaymentScreen |
| **Exception**      | Không có suất chiếu → Hiển thị lỗi <br> Ghế đã đặt → Không cho chọn                                                                                                                                                                                                                                   |
| **Post-condition** | User chọn được ghế, sẵn sàng thanh toán                                                                                                                                                                                                                                                               |

##### 2.3.1.7 Thanh toán (Payment)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Pre-condition**  | User chọn ghế, PaymentScreen được mở                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Main Flow**      | 1. Hiển thị tóm tắt: phim, suất chiếu, ghế, tổng tiền <br> 2. User chọn phương thức thanh toán (thẻ tín dụng/demo) <br> 3. Nhập thông tin thanh toán (demo: không xác thực thực sự) <br> 4. Nhấp "Thanh toán" <br> 5. Tạo document booking trong Firestore với status = "confirmed" <br> 6. Cập nhật seats: status = "booked", bookingId = bookingId <br> 7. Cập nhật users: thêm bookingId vào mảng bookings <br> 8. Hiển thị "Thanh toán thành công" <br> 9. Chuyển tới MyTicketsScreen |
| **Exception**      | Thông tin thanh toán không hợp lệ → Hiển thị lỗi <br> Network error → Hiển thị thông báo                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Post-condition** | Booking được tạo, ghế được mark as booked, user nhận vé                                                                                                                                                                                                                                                                                                                                                                                                                                   |

##### 2.3.1.8 Xem lịch sử đặt vé (View My Tickets)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                                                                                                                                          |
| **Pre-condition**  | User đã đăng nhập, MyTicketsScreen được mở                                                                                                                                                                                                                                                                    |
| **Main Flow**      | 1. MyTicketsScreen query bookings từ Firestore với userId = uid <br> 2. Lặp qua từng booking, fetch chi tiết phim, suất chiếu, ghế <br> 3. Hiển thị danh sách vé: phim, ngày, giờ, ghế, tổng tiền, trạng thái <br> 4. Mỗi vé có QR code (generated từ bookingId) <br> 5. User có thể download hoặc chia sẻ vé |
| **Exception**      | Không có vé nào → Hiển thị "Chưa có vé nào"                                                                                                                                                                                                                                                                   |
| **Post-condition** | Lịch sử vé được hiển thị                                                                                                                                                                                                                                                                                      |

##### 2.3.1.9 Xem chương trình khuyến mãi (View Promotions)

| Thành phần         | Mô tả                                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | User                                                                                                                                                                                                                 |
| **Pre-condition**  | HomeScreen được mở, carousel khuyến mãi hiển thị                                                                                                                                                                     |
| **Main Flow**      | 1. HomeScreen fetch promotions từ Firestore <br> 2. Hiển thị carousel các khuyến mãi với hình ảnh <br> 3. User swipe xem các khuyến mãi khác nhau <br> 4. Chọn khuyến mãi → ArticleScreen hiển thị chi tiết bài viết |
| **Exception**      | Không có khuyến mãi → Không hiển thị carousel                                                                                                                                                                        |
| **Post-condition** | Khuyến mãi được hiển thị, user có thể đọc chi tiết                                                                                                                                                                   |

##### 2.3.1.10 Quản lý phim (Manage Movies)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Pre-condition**  | Admin đã đăng nhập, ManageMoviesScreen được mở                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Main Flow**      | **Xem danh sách:** <br> 1. Fetch danh sách phim từ Firestore <br> 2. Hiển thị FlatList với tên, thể loại, trạng thái <br> **Thêm phim:** <br> 3. Nhấp "+ Thêm phim" → EditMovieScreen (isNew = true) <br> 4. Nhập thông tin: tên, thể loại, thời lượng, tóm tắt, đạo diễn, diễn viên <br> 5. Tải poster từ device <br> 6. Upload poster lên Storage, lưu URL <br> 7. Tạo movie document trong Firestore <br> **Sửa phim:** <br> 8. Chọn phim từ danh sách → EditMovieScreen (isNew = false) <br> 9. Cập nhật thông tin, lưu lại <br> **Xóa phim:** <br> 10. Swipe hoặc chọn → xóa từ Firestore |
| **Exception**      | Thông tin không đầy đủ → Hiển thị lỗi <br> Upload ảnh thất bại → Hiển thị lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Post-condition** | Phim được thêm/sửa/xóa thành công                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

##### 2.3.1.11 Quản lý suất chiếu (Manage Showtimes)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | Admin                                                                                                                                                                                                                                                                                                           |
| **Pre-condition**  | Admin đã đăng nhập, ManageShowtimesScreen được mở                                                                                                                                                                                                                                                               |
| **Main Flow**      | 1. Chọn phim từ dropdown <br> 2. Hiển thị danh sách suất chiếu của phim <br> 3. Thêm suất chiếu: nhập ngày, giờ, rạp, giá vé <br> 4. Hệ thống tự tạo 10x10 ghế (100 ghế) với status = "available" <br> 5. Xóa suất chiếu: xóa showtime và tất cả seats liên quan <br> 6. Cập nhật suất chiếu: thay đổi giá, rạp |
| **Exception**      | Phim không tồn tại → Hiển thị lỗi <br> Suất chiếu trùng lặp → Hiển thị cảnh báo                                                                                                                                                                                                                                 |
| **Post-condition** | Suất chiếu và ghế được quản lý thành công                                                                                                                                                                                                                                                                       |

##### 2.3.1.12 Quản lý chương trình khuyến mãi (Manage Promotions)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | Admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Pre-condition**  | Admin đã đăng nhập, ManagePromotionsScreen được mở                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Main Flow**      | **Xem danh sách:** <br> 1. Fetch promotions từ Firestore <br> 2. Hiển thị danh sách khuyến mãi <br> **Thêm khuyến mãi:** <br> 3. Nhấp "+ Thêm khuyến mãi" → EditPromotionScreen <br> 4. Nhập tiêu đề khuyến mãi, tải banner <br> 5. Nhập tiêu đề bài viết, nội dung, tải hình bài viết <br> 6. Upload ảnh lên Storage (folders: promotions/, articles/) <br> 7. Tạo articles document, sau đó promotions document với articleId <br> **Sửa/Xóa:** <br> 8. Chọn khuyến mãi → sửa hoặc xóa (xóa cả promotion và article) |
| **Exception**      | Thông tin không đầy đủ → Hiển thị lỗi <br> Upload ảnh thất bại → Hiển thị lỗi                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Post-condition** | Khuyến mãi được tạo/sửa/xóa, hiển thị trên HomeScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

##### 2.3.1.13 Quản lý thanh toán (Manage Bookings)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**          | Admin                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Pre-condition**  | Admin đã đăng nhập, ManageBookingsScreen được mở                                                                                                                                                                                                                                                                                                                                                        |
| **Main Flow**      | 1. Fetch danh sách bookings từ Firestore <br> 2. Hiển thị thông tin: tên khách, phim, ngày, ghế, tổng tiền, trạng thái <br> 3. Tìm kiếm booking theo tên khách hoặc ID booking <br> 4. Chọn booking → xem chi tiết khách hàng, phim, suất chiếu <br> 5. Admin có thể: <br> - Cập nhật trạng thái (pending → confirmed → used) <br> - Xóa booking (hoàn tiền, release ghế) <br> - Xem lịch sử thanh toán |
| **Exception**      | Booking không tìm thấy → Hiển thị lỗi                                                                                                                                                                                                                                                                                                                                                                   |
| **Post-condition** | Booking được quản lý thành công                                                                                                                                                                                                                                                                                                                                                                         |

##### 2.3.1.14 Xem thống kê đặt vé (View Statistics)

| Thành phần         | Mô tả                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Actor**          | Admin                                                                                                                                                                                                                                                                                                                    |
| **Pre-condition**  | Admin đã đăng nhập, AdminDashboardScreen được mở                                                                                                                                                                                                                                                                         |
| **Main Flow**      | 1. Fetch dữ liệu thống kê từ Firestore <br> 2. Hiển thị cards thống kê: <br> - Tổng phim (tất cả, đang chiếu, sắp tới) <br> - Tổng bookings <br> - Bookings trong 24h qua <br> - Tổng doanh thu <br> 3. Hiển thị danh sách booking gần đây (5 booking mới nhất) <br> 4. Các thông tin có thể refresh để cập nhật dữ liệu |
| **Exception**      | Network error → Hiển thị lỗi                                                                                                                                                                                                                                                                                             |
| **Post-condition** | Thống kê được hiển thị, admin có cái nhìn toàn cảnh                                                                                                                                                                                                                                                                      |

### 2.4 Biểu đồ thiết kế cơ sở dữ liệu

**PROMPT cho AI để vẽ Entity-Relationship Diagram (ERD):**

```
Vẽ một Entity-Relationship Diagram (ERD) cho hệ thống đặt vé xem phim với các entity:

Entities:
1. Users
   - uid (PK)
   - email
   - displayName
   - role (user/admin)
   - bookings (array of booking IDs)
   - paymentMethods (array)
   - notifications (object with settings)
   - createdAt

2. Movies
   - id (PK)
   - title
   - genre
   - duration (minutes)
   - synopsis
   - director
   - cast
   - rating (age rating)
   - posterUrl (Storage URL)
   - releaseDate
   - endDate (ngày kết thúc chiếu)
   - createdAt

3. Showtimes
   - id (PK)
   - movieId (FK → Movies)
   - date
   - time
   - room (rạp)
   - price
   - createdAt

4. Seats
   - id (PK)
   - showtimeId (FK → Showtimes)
   - seatNumber (e.g., "A1", "B5")
   - status (available/booked)
   - bookingId (FK → Bookings)
   - createdAt

5. Bookings
   - id (PK)
   - userId (FK → Users)
   - movieId (FK → Movies)
   - showtimeId (FK → Showtimes)
   - seats (array of seat IDs)
   - totalPrice
   - paymentMethod
   - status (pending/confirmed/used/cancelled)
   - reference (booking reference code)
   - createdAt

6. Promotions
   - id (PK)
   - title
   - imageUrl (Storage URL)
   - articleId (FK → Articles)
   - createdAt

7. Articles
   - id (PK)
   - title
   - content
   - imageUrl (Storage URL)
   - createdAt

Relationships:
- Users → Bookings (1:N)
- Movies → Showtimes (1:N)
- Movies → Bookings (1:N)
- Showtimes → Seats (1:N)
- Showtimes → Bookings (1:N)
- Bookings → Seats (N:N qua seatIds)
- Articles → Promotions (1:1)

Vẽ bằng Crow's Foot notation, màu sắc rõ ràng, chú thích rõ ràng các quan hệ.
```

---

## CHƯƠNG 3: XÂY DỰNG ỨNG DỤNG

### 3.1 Cài đặt

#### 3.1.1 Cài đặt môi trường

```bash
# Cài đặt Node.js phiên bản 22.15.0 hoặc cao hơn
# Download từ https://nodejs.org/

# Kiểm tra phiên bản
node --version
npm --version

# Cài đặt Expo CLI toàn cục
npm install -g expo-cli

# Hoặc sử dụng npx (không cần cài toàn cục)
npx expo --version
```

#### 3.1.2 Tạo dự án mới

```bash
# Khởi tạo dự án Expo (nếu chưa có)
expo init cinema-ticket-booking-app

# Hoặc clone từ repository
git clone <repository-url>
cd ticketbooking1
```

#### 3.1.3 Điều hướng đến chương trình

```bash
cd ticketbooking1
```

#### 3.1.4 Cài đặt các thư viện

```bash
# Cài đặt tất cả dependencies
npm install

# Hoặc sử dụng yarn
yarn install

# Nếu gặp lỗi peer dependencies, dùng:
npm install --legacy-peer-deps
```

#### 3.1.5 Chạy chương trình

```bash
# Chạy trên web (mặc định)
npm start

# Hoặc chạy expo start
npx expo start

# Chạy trên Android
npm run android
# hoặc
npx expo start --android

# Chạy trên iOS
npm run ios
# hoặc
npx expo start --ios

# Chạy trên web explicitly
npm run web
# hoặc
npx expo start --web

# Chạy với cache được xóa
npx expo start --clear
```

Sau khi chạy, ứng dụng sẽ mở ở địa chỉ `http://localhost:8081` (web) hoặc Expo Go app (mobile).

### 3.2 Kết quả

#### 3.2.1 Giao diện người dùng

**PROMPT cho AI để vẽ wireframe UI Flow:**

```
Vẽ một complete UI Flow diagram cho hệ thống đặt vé xem phim gồm:

User Screens:
1. Auth Stack:
   - LoginScreen: email input, password input, login button, register link
   - RegisterScreen: email, password, name input, register button, login link

2. User Tab Stack:
   - HomeScreen:
     * Header: logo, search box, notification icon
     * Carousel: promotions (swipeable)
     * Section 1: Current Movies (grid)
     * Section 2: Upcoming Movies (grid)

   - MyTicketsScreen:
     * List of bookings
     * Mỗi booking card: phim, ngày, giờ, ghế, tổng tiền
     * QR code button

   - ProfileScreen:
     * User avatar, name, email
     * Change Password button
     * Payment Methods section
     * Notifications settings
     * Logout button

3. Stack Screens (từ tabs):
   - MovieDetailScreen: poster, title, details, "Book Now" button
   - BookingScreen: date picker, showtime list
   - SeatSelectionScreen: seat grid (10x10), selected count, total price
   - PaymentScreen: payment summary, payment method input, payment button
   - ArticleScreen: promotion article detail
   - PaymentMethodsScreen: list of saved cards
   - NotificationsScreen: notification settings
   - ChangePasswordScreen: old password, new password

Admin Screens:
1. Admin Stack:
   - AdminDashboardScreen:
     * Quick stats cards: total movies, active movies, bookings, revenue
     * Recent bookings list
     * Navigation buttons: Movies, Showtimes, Promotions, Bookings

   - ManageMoviesScreen: movie list with search, edit/delete buttons, add movie button
   - EditMovieScreen: form to add/edit movies
   - ManageShowtimesScreen: showtime list, manage seats
   - ManagePromotionsScreen: promotion list with edit/delete buttons
   - EditPromotionScreen: form to create/edit promotions + articles
   - ManageBookingsScreen: booking list with search, status update

Vẽ bằng wireframe style, rõ ràng từng component, label rõ ràng, show transitions/navigation flow giữa các screens.
```

**Thành phần UI chính:**

1. **Navigation Tabs (User):**

   - Home: Duyệt phim, khuyến mãi
   - My Tickets: Lịch sử đặt vé
   - Profile: Quản lý tài khoản

2. **Màu sắc chính:**

   - Primary: `#E50914` (Đỏ Netflix-style)
   - Background: `#ffffff` hoặc `#f5f5f5`
   - Text: `#333333`

3. **Thành phần tái sử dụng:**
   - MovieCard: Hiển thị phim với poster, tên, thể loại
   - BookingCard: Hiển thị booking với thông tin vé
   - SeatGrid: Sơ đồ ghế ngồi
   - LoadingSpinner: Hiển thị loading state

#### 3.2.2 Thiết kế cơ sở dữ liệu

**Cấu trúc Firestore Collections:**

```
Firestore Database Structure:
├── users/{uid}
│   ├── email: string
│   ├── displayName: string
│   ├── role: "user" | "admin"
│   ├── bookings: array[booking_ids]
│   ├── paymentMethods: array[{id, cardNumber, expiry, ...}]
│   ├── notifications: {promotions: boolean, updates: boolean}
│   └── createdAt: timestamp

├── movies/{movieId}
│   ├── title: string
│   ├── genre: string
│   ├── duration: number (minutes)
│   ├── synopsis: string
│   ├── director: string
│   ├── cast: string
│   ├── rating: string (e.g., "PG-13")
│   ├── posterUrl: string (Storage URL)
│   ├── trailerUrl: string (YouTube URL)
│   ├── releaseDate: timestamp
│   ├── endDate: timestamp
│   └── createdAt: timestamp

├── showtimes/{showtimeId}
│   ├── movieId: reference
│   ├── date: string (YYYY-MM-DD)
│   ├── time: string (HH:MM)
│   ├── room: string
│   ├── price: number
│   └── createdAt: timestamp

├── seats/{seatId}
│   ├── showtimeId: reference
│   ├── seatNumber: string (A1, A2, ...)
│   ├── status: "available" | "booked"
│   ├── bookingId: reference (if booked)
│   └── createdAt: timestamp

├── bookings/{bookingId}
│   ├── userId: reference
│   ├── movieId: reference
│   ├── showtimeId: reference
│   ├── seats: array[seat_ids]
│   ├── totalPrice: number
│   ├── paymentMethod: string
│   ├── status: "confirmed" | "pending" | "used" | "cancelled"
│   ├── reference: string (booking reference code)
│   └── createdAt: timestamp

├── promotions/{promotionId}
│   ├── title: string
│   ├── imageUrl: string (Storage URL)
│   ├── articleId: reference
│   └── createdAt: timestamp

└── articles/{articleId}
    ├── title: string
    ├── content: string
    ├── imageUrl: string (Storage URL)
    └── createdAt: timestamp
```

#### 3.2.3 Firebase

##### 3.2.3.1 Firestore Database

**Tính năng:**

- Lưu trữ dữ liệu theo thời gian thực
- Hỗ trợ query phức tạp
- Tự động index
- Real-time listeners

**Security Rules:**

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() {
      return request.auth != null;
    }
    function isAdmin() {
      return isSignedIn() &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Users: self-read/write; admin can read/delete/update
    match /users/{userId} {
      allow read: if isSignedIn() && (request.auth.uid == userId || isAdmin());
      allow create: if isSignedIn() && request.auth.uid == userId;
      allow update: if isSignedIn() && (request.auth.uid == userId || isAdmin());
      allow delete: if isAdmin();
    }

    // Movies: public read; admin write
    match /movies/{movieId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // Showtimes: public read; admin write
    match /showtimes/{showtimeId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // Seats: public read; admin create/delete; user can update to booked
    match /seats/{seatId} {
      allow read: if true;
      allow create, delete: if isAdmin();
      allow update: if isAdmin() ||
        (isSignedIn() &&
         request.resource.data.bookingId is string &&
         get(/databases/$(database)/documents/bookings/$(request.resource.data.bookingId)).data.userId == request.auth.uid);
    }

    // Bookings: owner or admin can read/update/delete; owner-only create
    match /bookings/{bookingId} {
      allow read: if isSignedIn() && (resource.data.userId == request.auth.uid || isAdmin());
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isSignedIn() && (resource.data.userId == request.auth.uid || isAdmin());
    }

    // Promotions: public read; admin write
    match /promotions/{promotionId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    // Articles: public read; admin write
    match /articles/{articleId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }
  }
}
```

##### 3.2.3.2 Storage

**Tính năng:**

- Lưu trữ hình ảnh (posters, banners, articles)
- Tích hợp CDN toàn cầu
- Tự động tối ưu hóa

**Storage Rules:**

```storage
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    function isSignedIn() { return request.auth != null; }
    function isAdmin() {
      return isSignedIn() &&
        firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Public read, admin write for promotions and articles assets
    match /promotions/{path=**} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /articles/{path=**} {
      allow read: if true;
      allow write: if isAdmin();
    }

    // Default: public read, no write
    match /{path=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

#### 3.2.4 Thư mục dự án

```
ticketbooking1/
├── src/
│   ├── config/
│   │   └── firebase.ts              # Firebase initialization
│   ├── context/
│   │   └── AuthContext.tsx          # Authentication context
│   ├── navigation/
│   │   └── RootNavigator.tsx        # App navigation setup
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── user/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── MovieDetailScreen.tsx
│   │   │   ├── BookingScreen.tsx
│   │   │   ├── SeatSelectionScreen.tsx
│   │   │   ├── PaymentScreen.tsx
│   │   │   ├── MyTicketsScreen.tsx
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── ArticleScreen.tsx
│   │   │   ├── PaymentMethodsScreen.tsx
│   │   │   ├── NotificationsScreen.tsx
│   │   │   └── ChangePasswordScreen.tsx
│   │   └── admin/
│   │       ├── AdminDashboardScreen.tsx
│   │       ├── ManageMoviesScreen.tsx
│   │       ├── EditMovieScreen.tsx
│   │       ├── ManageShowtimesScreen.tsx
│   │       ├── ManagePromotionsScreen.tsx
│   │       ├── EditPromotionScreen.tsx
│   │       └── ManageBookingsScreen.tsx
│   └── assets/
│       ├── icon.png
│       ├── splash-icon.png
│       └── adaptive-icon.png
├── App.tsx                          # Entry point
├── app.json                         # Expo configuration
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
├── babel.config.js                  # Babel configuration
├── metro.config.js                  # Metro bundler config
├── firestore.rules                  # Firestore security rules
├── storage.rules                    # Storage security rules
├── readMe.md                        # Documentation
└── index.ts                         # Entry index
```

---

## CHƯƠNG 4: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 4.1 Kết luận

Hệ thống **Cinema Ticket Booking App** đã được xây dựng thành công với:

**Điểm mạnh:**

1. ✅ **Cross-platform:** Chạy trên iOS, Android, Web từ một codebase
2. ✅ **Scalable:** Dùng Firebase Firestore cho dữ liệu real-time
3. ✅ **Type-safe:** Sử dụng TypeScript để phát hiện lỗi sớm
4. ✅ **Modular:** Component-based architecture dễ bảo trì
5. ✅ **Secure:** Firebase Authentication + Security Rules quản lý quyền
6. ✅ **Complete feature set:** User đặt vé, admin quản lý toàn bộ hệ thống

**Hoàn thành chức năng:**

- ✅ Đăng ký, đăng nhập
- ✅ Duyệt phim, tìm kiếm
- ✅ Chọn suất chiếu, ghế
- ✅ Thanh toán và tạo vé
- ✅ Quản lý tài khoản người dùng
- ✅ Admin dashboard
- ✅ Quản lý phim, suất chiếu, khuyến mãi
- ✅ Xem thống kê bookings

### 4.2 Hướng phát triển

**Ngắn hạn (1-2 tháng):**

1. **Tích hợp thanh toán thực tế:**

   - Stripe, PayPal hoặc Momo Vietnam
   - Xử lý webhook để cập nhật trạng thái booking

2. **Tối ưu hiệu suất:**

   - Implement pagination cho danh sách phim
   - Caching dữ liệu bằng Redux hoặc Zustand

3. **Nâng cao bảo mật:**

   - Mã hóa dữ liệu nhạy cảm (payment info)
   - Rate limiting trên API

4. **Cải thiện UX:**
   - Dark mode
   - Animations mượt mà hơn
   - Tiếng Việt hoàn toàn

**Trung hạn (3-6 tháng):** 5. **Tính năng nâng cao:**

- Đánh giá và bình luận phim
- Wishlist/favorites
- Refer friend program
- Email/SMS notifications

6. **Admin features:**

   - Báo cáo nâng cao (charts, analytics)
   - Quản lý giá vé theo ngày/giờ peak
   - Bulk import phim từ file CSV

7. **Performance optimization:**
   - Implement Service Worker cho PWA
   - Offline support

**Dài hạn (6-12 tháng):** 8. **Mở rộng nền tảng:**

- Ứng dụng desktop (Electron)
- Smart TV app
- Chatbot support

9. **Machine Learning:**

   - Recommend phim dựa trên lịch xem
   - Dự đoán demand, dynamic pricing

10. **Tích hợp hệ thống:**
    - POS system cho rạp
    - Khoá điện tử cho ghế
    - Kết nối với hệ thống quản lý rạp

**Công nghệ cần học thêm:**

- GraphQL (thay REST API)
- WebSocket (thay Firebase Realtime)
- Kubernetes (DevOps)
- Microservices architecture

---

## PHỤ LỤC: HƯỚNG DẪN DEPLOY

### Deploy lên Firebase Hosting

```bash
# 1. Cài đặt Firebase CLI
npm install -g firebase-tools

# 2. Login Firebase
firebase login

# 3. Khởi tạo Firebase project
firebase init

# 4. Build web app
npm run build
# hoặc nếu dùng Expo:
npx expo export --platform web

# 5. Deploy
firebase deploy
```

### Deploy Firestore/Storage Rules

```bash
# Update rules
firebase deploy --only firestore:rules,storage
```

---

**Ngày hoàn thành:** Tháng 12, 2025
**Công cụ:** React Native, Expo, Firebase, TypeScript
**Version:** 1.0.0
