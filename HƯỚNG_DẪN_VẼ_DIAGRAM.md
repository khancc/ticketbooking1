# HƯỚNG DẪN VẼ DIAGRAM CHO HỆ THỐNG ĐẶT VÉ XEM PHIM

Tài liệu này chứa các prompt đã chuẩn bị để bạn copy vào các công cụ AI vẽ diagram như Lucidchart, Draw.io, Miro, hoặc ChatGPT.

---

## 1. USE-CASE DIAGRAM

**Công cụ đề xuất:** Draw.io, Lucidchart, ArchiMate, hoặc ChatGPT (DALL-E)

**Prompt:**

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

---

## 2. ENTITY-RELATIONSHIP DIAGRAM (ERD)

**Công cụ đề xuất:** Draw.io, Lucidchart, DbSchema, MySQL Workbench

**Prompt:**

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

## 3. UI/UX WIREFRAME FLOW

**Công cụ đề xuất:** Figma, Adobe XD, Sketch, Draw.io, Whimsical

**Prompt:**

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

---

## 4. SYSTEM ARCHITECTURE DIAGRAM

**Công cụ đề xuất:** Draw.io, Lucidchart, Miro, or C4 Model

**Prompt:**

```
Vẽ một System Architecture Diagram cho ứng dụng đặt vé xem phim với các components:

Frontend Layer:
- Mobile App (iOS/Android via Expo)
- Web App (React Native Web)
- Redux/Context API (State Management)

API Layer:
- Firebase Authentication
- Firebase REST API

Backend Layer:
- Firestore Database
  * Collections: users, movies, showtimes, seats, bookings, promotions, articles
  * Real-time listeners
  * Document-based storage

Storage Layer:
- Firebase Cloud Storage
  * Folder: /promotions (banner images)
  * Folder: /articles (article images)
  * Folder: /posters (movie posters)

Third-party Integrations:
- Firebase Admin SDK (backend operations)
- Email service (future)
- Payment gateway (future: Stripe/PayPal/Momo)

Security:
- Firebase Security Rules (Firestore)
- Firebase Security Rules (Storage)
- JWT tokens via Firebase Auth

Vẽ bằng layer style, show data flow, highlight security boundaries.
```

---

## 5. USER JOURNEY MAP

**Công cụ đề xuất:** Figma, Miro, Lucidchart, or Google Slides

**Prompt:**

```
Vẽ một User Journey Map cho 2 personas:

Persona 1: REGULAR USER (người dùng thường)
Tên: Linh, 25 tuổi, nhân viên văn phòng

Journey:
1. Discover Phase
   - Mở app
   - Xem khuyến mãi trên carousel
   - Duyệt danh sách phim
   - Tìm kiếm phim yêu thích

2. Engagement Phase
   - Chọn phim
   - Xem chi tiết: review, thời lượng, diễn viên
   - Chọn suất chiếu
   - Chọn ghế

3. Transaction Phase
   - Nhập thông tin thanh toán
   - Confirm booking
   - Nhận email xác nhận

4. Post-Purchase Phase
   - Xem vé trên app (QR code)
   - Chia sẻ vé
   - Xem bình luận phim
   - Nhận thông báo khuyến mãi

Emotions: Excited → Engaged → Satisfied → Loyal

Persona 2: ADMIN/MANAGER (quản trị viên)
Tên: Minh, 35 tuổi, trưởng phòng quản lý rạp

Journey:
1. Morning Routine
   - Login to dashboard
   - Check daily stats (bookings, revenue)
   - Review new bookings overnight

2. Content Management
   - Add new movies
   - Update showtimes
   - Create promotions
   - Manage seats allocation

3. Monitoring Phase
   - Monitor real-time bookings
   - Update booking status
   - Handle cancellations
   - View revenue trends

4. Analysis Phase
   - Generate reports
   - Identify popular movies
   - Plan next promotions

Emotions: Professional → Focused → Accomplished → Confident

Vẽ bằng timeline format, show touchpoints, pain points, opportunities.
```

---

## 6. DATA FLOW DIAGRAM (DFD)

**Công cụ đề xuất:** Draw.io, Lucidchart, Visio

**Prompt:**

```
Vẽ một Level 1 Data Flow Diagram (DFD) cho hệ thống đặt vé xem phim:

External Entities:
- User (người dùng)
- Admin (quản trị viên)
- Email Service (gửi notification)
- Payment Gateway (xử lý thanh toán)

Processes:
1. Authentication Service
   - Input: email, password
   - Output: auth token, user role

2. Movie Management Service
   - Input: movie data from admin
   - Output: movie list to users

3. Booking Service
   - Input: movie, showtime, seats selection
   - Output: booking confirmation

4. Payment Service
   - Input: payment details
   - Output: payment status

5. Notification Service
   - Input: booking confirmed, promotion created
   - Output: email/push notification

Data Stores:
- D1: Users Database
- D2: Movies Database
- D3: Showtimes Database
- D4: Bookings Database
- D5: Seats Database
- D6: Promotions Database
- D7: Files Storage (images)

Data Flows:
- User → Authentication → D1 (Users)
- Admin → Movie Management → D2 (Movies)
- Booking Service → D3, D4, D5
- Payment Service → Payment Gateway
- Notification Service → Email Service

Vẽ theo DFD standard, clear entities, processes, data stores, clear data flows.
```

---

## 7. SEQUENCE DIAGRAM (Booking Flow)

**Công cụ đề xuất:** Draw.io, Lucidchart, PlantUML Online

**Prompt:**

```
Vẽ một Sequence Diagram cho booking flow:

Actors/Systems:
- User
- Mobile App
- Firebase Authentication
- Firestore Database
- Firebase Storage
- Payment Service

Sequence:
1. User selects movie
   User → App: Select movie
   App → Firestore: Query movie details
   Firestore → App: Return movie data

2. User selects showtime & seats
   User → App: Select showtime, seats
   App → Firestore: Check seat availability
   Firestore → App: Return seats status

3. User proceeds to payment
   User → App: Enter payment info
   App → PaymentService: Process payment
   PaymentService → App: Payment confirmed

4. Booking confirmation
   App → Firestore: Create booking document
   Firestore → App: Booking ID returned
   App → Firestore: Update seats status to "booked"
   App → Firestore: Add bookingId to user.bookings
   Firestore → App: Confirmation success

5. User views ticket
   App → Firestore: Query booking with ID
   Firestore → App: Return booking + ticket data
   App → User: Display ticket with QR code

Vẽ theo UML Sequence Diagram standard, show activation boxes, show return messages.
```

---

## 8. CLASS DIAGRAM (TypeScript Models)

**Công cụ đề xuất:** Draw.io, Lucidchart, Visual Studio Code (PlantUML extension)

**Prompt:**

```
Vẽ một UML Class Diagram cho TypeScript models:

Classes:

1. User
   - uid: string (PK)
   - email: string
   - displayName: string
   - role: "user" | "admin"
   - bookings: Booking[]
   - paymentMethods: PaymentMethod[]
   - notifications: NotificationSettings
   + login(email, password): void
   + register(email, password, name): void
   + logout(): void
   + updateProfile(name, avatar): void

2. Movie
   - id: string (PK)
   - title: string
   - genre: string
   - duration: number
   - synopsis: string
   - director: string
   - posterUrl: string
   - releaseDate: Date
   - endDate: Date
   + getDetails(): MovieDetail
   + getShowtimes(date): Showtime[]

3. Showtime
   - id: string (PK)
   - movieId: string (FK)
   - date: string (YYYY-MM-DD)
   - time: string (HH:MM)
   - room: string
   - price: number
   + getAvailableSeats(): Seat[]
   + createSeats(): void

4. Seat
   - id: string (PK)
   - showtimeId: string (FK)
   - seatNumber: string
   - status: "available" | "booked"
   - bookingId: string (FK) [nullable]
   + toggleBooking(bookingId): void

5. Booking
   - id: string (PK)
   - userId: string (FK)
   - movieId: string (FK)
   - showtimeId: string (FK)
   - seats: Seat[]
   - totalPrice: number
   - status: "pending" | "confirmed" | "used"
   - reference: string
   + createBooking(): void
   + cancelBooking(): void
   + generateQRCode(): string

6. Promotion
   - id: string (PK)
   - title: string
   - imageUrl: string
   - articleId: string (FK)
   - createdAt: Date
   + getArticle(): Article

7. Article
   - id: string (PK)
   - title: string
   - content: string
   - imageUrl: string
   - createdAt: Date

Relationships:
- User 1:N Booking
- Movie 1:N Showtime
- Movie 1:N Booking
- Showtime 1:N Seat
- Showtime 1:N Booking
- Booking N:N Seat
- Promotion 1:1 Article

Vẽ bằng UML Class Diagram standard, show attributes, methods, relationships, multiplicities.
```

---

## Công cụ đề xuất

| Diagram Type | Best Tools                                |
| ------------ | ----------------------------------------- |
| Use-Case     | Draw.io, Lucidchart, Visual Paradigm      |
| ERD          | DbSchema, MySQL Workbench, Draw.io        |
| Wireframe    | Figma, Adobe XD, Sketch                   |
| Architecture | Draw.io, Lucidchart, C4 Model tools       |
| Journey Map  | Figma, Miro, Adobe XD                     |
| DFD          | Draw.io, Lucidchart, Visio                |
| Sequence     | PlantUML, Draw.io, Lucidchart             |
| Class        | Visual Studio Code (PlantUML), Lucidchart |

---

## Hướng dẫn sử dụng

1. **Chọn công cụ** phù hợp từ danh sách trên
2. **Copy prompt tương ứng** vào AI hoặc công cụ vẽ
3. **Điều chỉnh chi tiết** theo yêu cầu cụ thể của bạn
4. **Export diagram** dưới định dạng PNG/SVG/PDF
5. **Chèn vào báo cáo** tại các vị trí tương ứng

---

**Lưu ý:** Tất cả các prompt trên đã được tối ưu cho các AI models (ChatGPT, Claude, Gemini) hoặc công cụ vẽ diagram trực tuyến. Hãy điều chỉnh theo nhu cầu cụ thể của dự án.
