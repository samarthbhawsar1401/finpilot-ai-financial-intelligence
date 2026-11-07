
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.health import router as health_router

app = FastAPI(
    title="FinPilot API",
    description="AI-powered Personal Finance Management Platform",
    version="1.0.0"
)

# Allow our Next.js frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to FinPilot API",
        "version": "1.0.0"
    }


app.include_router(
    health_router,
    prefix="/api/v1",
    tags=["Health"]
)
