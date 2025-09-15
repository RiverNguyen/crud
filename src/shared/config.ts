import fs from 'fs';
import path from 'path';
import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

// Check env valid

if (!fs.existsSync(path.resolve('.env'))) {
  console.log('env file not found');
  process.exit(1);
}

class ConfigSchema {
  @IsString()
  DATABASE_URL: string;
  @IsString()
  ACCESS_TOKEN_SECRET: string;
  @IsString()
  ACCESS_TOKEN_EXPIRES_IN: string;
  @IsString()
  REFRESH_TOKEN_SECRET: string;
  @IsString()
  REFRESH_TOKEN_EXPIRES_IN: string;
}

const configServer = plainToInstance(ConfigSchema, process.env);
const e = validateSync(configServer);

if (e.length > 0) {
  console.log('Invalid config');
  const errors = e.map((item) => ({
    property: item.property,
    constraints: item.constraints,
    value: item.value as string,
  }));
  throw new Error(JSON.stringify(errors));
}

const envConfig = configServer;

export default envConfig;
