# T-Shirt E-Commerce Platform

A modern, community-driven t-shirt e-commerce platform with unique features like design voting, AR try-on, and social shopping experience.

## Features

- 🎨 Design voting system
- 👕 AR try-on capability
- 🌍 Worldwide shipping
- 💳 Secure payments with Stripe
- 📱 Mobile-first design
- 🎮 Gamification elements
- 📊 Real-time analytics
- 🔒 GDPR compliant

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Query

### Backend
- FastAPI
- PostgreSQL (via Supabase)
- SQLAlchemy
- Pydantic

### Services
- Vercel (Hosting)
- Supabase (Database)
- Cloudinary (Image Storage)
- Stripe (Payments)
- Printful (Print-on-Demand)

## Project Structure

```
tshirt-ecommerce/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App router
│   │   ├── components/      # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities
│   │   └── types/          # TypeScript types
│   └── public/             # Static assets
│
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Core functionality
│   │   ├── models/         # Database models
│   │   └── services/       # Business logic
│   └── tests/              # Backend tests
│
└── docs/                   # Documentation
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- pnpm
- Docker (optional)

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Environment Variables

Create `.env` files in both frontend and backend directories:

### Frontend (.env)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### Backend (.env)
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PRINTFUL_API_KEY=your_printful_key
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 