# 360 Product Demo

## Project Structure

- `backend/` – NestJS API (empty, ping route)
- `frontend/` – Next.js app (empty, hello world)
- `placeholder_models/` – Contains placeholder cube.glb and cube.usdz

## Roadmap (per PRD v1.3)

- STEP 0: Repo scaffold (this step)
- STEP 1: Upload & storage
- STEP 2: Copy placeholder & generate QR
- STEP 3: Viewer page
- STEP 4: Basic dashboard
- STEP 5: Real AWS S3 signed URLs

## How to Run (STEP 0)

```sh
docker-compose up --build
```

- Visit http://localhost:3000 for frontend (Next.js)
- Visit http://localhost:4000/api/ping for backend (NestJS)

## Assumptions
- Using MinIO for S3 emulation (future steps)
- Placeholder .usdz will be added later (currently only .glb)
- No auth, no UI polish, no payments per spec 

## Additional Assumptions (STEP 1-2)
- Dish metadata is stored in-memory (not persisted) for now.
- S3 upload URL is mocked; no real upload to MinIO yet.
- Placeholder .glb is copied locally to a unique file per upload.
- QR code is returned as a base64 PNG string in the API response.
- No real file upload or Postgres integration yet. 
- /viewer/[id] route in frontend loads a placeholder model and shows a stub Three.js viewer with AR button. 
- /admin dashboard in frontend lists fake dishes with random view counts (stub). 
- S3/AWS credentials are parameterized via environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET).
- If those variables are missing, backend falls back to MinIO mock for local development.
- Signed S3 URL is a stub (not a real pre-signed URL yet).
- All required environment variables are documented in this README. 