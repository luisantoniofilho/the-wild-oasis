# The Wild Oasis

### [➡️ Live demo](https://the-wild-oasis-web-js.netlify.app/)

> An internal management dashboard for a boutique hotel chain, focused on high productivity and a modern user experience.

## 📜 About The Project

**The Wild Oasis** is a complete web application that serves as an internal management system for hotel employees. Through this dashboard, it's possible to control all essential day-to-day operations: managing guests, bookings, cabins, and general hotel settings.

The project was developed using the most modern technologies in the React ecosystem to build a robust, reactive, and scalable application. The architecture focuses on the separation of concerns and efficient state management, using Supabase as a Backend-as-a-Service (BaaS).

## ✨ Key Features

- **📈 Analytical Dashboard:** View key statistics over a selected period (e.g., last 7, 30, or 90 days), including:
  - Occupancy rate.
  - Total sales and check-ins.
  - Charts for sales and stay durations.
- **🏨 Booking Management:**
  - Complete list of all bookings with pagination.
  - Filtering by status (`unconfirmed`, `checked-in`, `checked-out`).
  - Sorting by start date, end date, and total amount.
  - Actions for check-in, check-out, and deleting bookings.
- **🏠 Cabin Management:**
  - Create new cabins with image uploads.
  - Edit and delete existing cabins.
  - View a table of cabins with their respective data (price, discount, capacity).
- **⚙️ General Settings:** A panel for managers to update important hotel information, such as:
  - Minimum and maximum booking nights.
  - Maximum guests per booking.
  - Breakfast price.
- **🔐 Authentication and Users:**
  - Login and logout system for employees.
  - New user sign-up.
  - User data updates (name, avatar, and password).
- **🌙 Dark Mode:** Theme toggling for better user visual comfort.

## 🛠️ Tech Stack

The project uses a range of modern technologies to deliver a high-quality development and user experience:

- **Main Framework:** [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language:** JavaScript
- **Styling:** [Styled Components](https://styled-components.com/) for component-based styling.
- **Backend and Database (BaaS):** [Supabase](https://supabase.com/)
  - **Database:** PostgreSQL database to store bookings, cabins, and guests.
  - **Authentication:** User and session management.
  - **Storage:** Hosting for cabin images and user avatars.
- **Server State Management:** [React Query](https://tanstack.com/query/latest)
  - Used for fetching, caching, synchronizing, and updating server data, eliminating the need for complex `loading` and `error` states.
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **UI/UX:**
  - **Charts:** [Recharts](https://recharts.org/) for creating interactive charts on the dashboard.
  - **Notifications:** [React Hot Toast](https://react-hot-toast.com/) for visual user feedback.
  - **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

To run this project locally, follow the steps below.

### Prerequisites

- Node.js (v18 or higher)
- Git
- A [Supabase](https://supabase.com/) account to create your own backend.

### Installation and Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/the-wild-oasis.git](https://github.com/your-username/the-wild-oasis.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd the-wild-oasis
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  **Set up Supabase:**

    - Create a new project on Supabase.
    - Inside the "SQL Editor," create the necessary tables (`bookings`, `cabins`, `guests`, `settings`).
    - Go to `Project Settings > API` and copy the Project URL and the `anon` (public) key.

5.  **Set up Environment Variables:**
    - Create a file named `.env` in the project root.
    - Add the keys obtained in the previous step:
    ```env
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_KEY="YOUR_PUBLIC_ANON_KEY"
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) in your browser to see the application.
