from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import engine, Base, init_db
from app.logger import logger
from app.settings import settings

# Import models so SQLAlchemy sees them
import app.models.user  # noqa: F401

# Import routers
try:
    from app.routes import auth as auth_routes
    logger.info("Auth routes imported successfully")
except Exception as e:
    logger.error(f"Failed to import auth routes: {e}")
    auth_routes = None

# Initialize FastAPI app
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="UpFund Crowdfunding Platform API",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database tables
try:
    init_db()
    logger.info("Database tables ensured/created")
except Exception as e:
    logger.error(f"Failed to initialize database: {e}")

# Include routers
if auth_routes:
    app.include_router(auth_routes.router, prefix="/api/auth", tags=["Authentication"])
    logger.info("Auth routes included successfully")
else:
    logger.error("Auth routes not available to include")


@app.get("/")
def read_root():
    """Root endpoint"""
    return {
        "message": "Welcome to UpFund API",
        "version": settings.APP_VERSION,
    }


@app.get("/health")
def health_check():
    """Health check endpoint"""
    logger.info("Health check")
    return {"status": "healthy", "version": settings.APP_VERSION}


@app.on_event("startup")
async def startup_event():
    """Run on application startup"""
    logger.info(f"Starting {settings.APP_NAME} v{settings.APP_VERSION}")


@app.on_event("shutdown")
async def shutdown_event():
    """Run on application shutdown"""
    logger.info(f"Shutting down {settings.APP_NAME}")