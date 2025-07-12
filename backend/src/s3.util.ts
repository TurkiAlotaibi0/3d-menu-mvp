import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const isAws = !!process.env.AWS_ACCESS_KEY_ID && !!process.env.AWS_SECRET_ACCESS_KEY && !!process.env.S3_BUCKET;

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  endpoint: isAws ? undefined : process.env.S3_ENDPOINT || 'http://minio:9000',
  forcePathStyle: !isAws,
  credentials: isAws
    ? undefined
    : {
        accessKeyId: process.env.S3_ACCESS_KEY || 'minioadmin',
        secretAccessKey: process.env.S3_SECRET_KEY || 'minioadmin',
      },
});

export async function putObject({ Bucket, Key, Body, ContentType }) {
  return s3.send(new PutObjectCommand({ Bucket, Key, Body, ContentType }));
}

export function getBucket() {
  return process.env.S3_BUCKET || 'mock-bucket';
} 