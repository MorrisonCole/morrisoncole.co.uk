import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand, ListObjectsV2CommandInput } from "@aws-sdk/client-s3";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import * as fs from 'fs';
import * as path from 'path';
import mime from 'mime';

const BUCKET_NAME = 'morrisoncole.co.uk';
const BUCKET_REGION = 'ap-northeast-1';
const WEBSITE_DIR = process.argv[2];
if (!WEBSITE_DIR) {
    console.error('Website directory path not provided. Usage: ts-node deploy.ts <path-to-website-dir>');
    process.exit(1);
}

const s3Client = new S3Client({ 
    region: BUCKET_REGION,
    credentials: defaultProvider() 
});

async function uploadFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath);
    const key = path.relative(path.resolve(WEBSITE_DIR), filePath).replace(/\\/g, '/'); // Normalize path for S3
    const contentType = mime.getType(filePath) || 'application/octet-stream';

    const putObjectParams = {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: fileContent,
        ContentType: contentType,
    };

    try {
        await s3Client.send(new PutObjectCommand(putObjectParams));
        console.log(`File uploaded successfully: ${key}`);
    } catch (error) {
        console.error(`Error uploading file: ${key}`, error);
    }
}

async function listAllObjects() {
    const allObjects: Array<string> = [];
    let continuationToken;

    do {
        const listObjectsParams: ListObjectsV2CommandInput = {
            Bucket: BUCKET_NAME,
            ContinuationToken: continuationToken,
        };

        const response = await s3Client.send(new ListObjectsV2Command(listObjectsParams));
        response.Contents?.forEach(obj => {
            if (obj.Key) { 
                allObjects.push(obj.Key)
            }
        });
        continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    return allObjects;
}

async function deleteObjects(keys: string[]) {
    const deleteParams = {
        Bucket: BUCKET_NAME,
        Delete: {
            Objects: keys.map(key => ({ Key: key })),
        },
    };

    try {
        await s3Client.send(new DeleteObjectsCommand(deleteParams));
        console.log(`Deleted ${keys.length} object(s)`);
    } catch (error) {
        console.error('Error deleting objects', error);
    }
}

async function synchronizeBucket() {
    const localFiles = new Set<string>();
    const processDirectory = (directory: string) => {
        fs.readdirSync(directory).forEach(file => {
            const fullPath = path.join(directory, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                processDirectory(fullPath);
            } else {
                localFiles.add(path.relative(path.resolve(WEBSITE_DIR), fullPath).replace(/\\/g, '/'));
            }
        });
    };

    processDirectory(WEBSITE_DIR);

    const s3Objects = await listAllObjects();
    const toDelete = s3Objects.filter(key => !localFiles.has(key));

    if (toDelete.length > 0) {
        await deleteObjects(toDelete);
    }

    for (const file of localFiles) {
        await uploadFile(path.join(WEBSITE_DIR, file));
    }

    console.log('Synchronization complete.');
}

synchronizeBucket();
