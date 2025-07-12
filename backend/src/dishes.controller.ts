import { Controller, Post, Body } from '@nestjs/common';
import { DishRepo } from './dish.repo';
import { Dish } from './dish.entity';
import { randomUUID } from 'crypto';
import { generateQR } from './qr.util';
import * as fs from 'fs';
import * as path from 'path';
import { getBucket } from './s3.util';

@Controller('api/dishes')
export class DishesController {
  @Post()
  async create(@Body() body: { filename: string }) {
    const id = randomUUID();
    const s3Key = `${id}-${body.filename}`;
    const dish: Dish = { id, s3Key, createdAt: new Date() };
    DishRepo.save(dish);

    // Copy placeholder.glb to unique file
    const src = path.join(__dirname, '../../placeholder_models/cube.glb');
    const dest = path.join(__dirname, `../../placeholder_models/${s3Key}.glb`);
    fs.copyFileSync(src, dest);

    // Generate QR code for /viewer/{dishId}
    const viewerUrl = `http://localhost:3000/viewer/${id}`;
    const qrPng = await generateQR(viewerUrl);
    const qrBase64 = qrPng.toString('base64');

    // Generate signed S3 URL (mocked for MinIO, real for AWS)
    const bucket = getBucket();
    const uploadUrl = process.env.AWS_ACCESS_KEY_ID
      ? `https://${bucket}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${s3Key}`
      : `http://minio:9000/${bucket}/${s3Key}`;

    return {
      dishId: id,
      uploadUrl,
      key: s3Key,
      qr: `data:image/png;base64,${qrBase64}`,
    };
  }
} 