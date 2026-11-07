
from sqlalchemy import text
from app.database import engine


def test_database_connection():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            print("Database query result:", result.scalar())

        print("FinPilot database connected successfully!")

    except Exception as error:
        print("Database connection failed!")
        print("Error:", error)


if __name__ == "__main__":
    test_database_connection()
