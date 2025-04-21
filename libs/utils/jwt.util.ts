import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export function generateAccessToken(
  jwtService: JwtService,
  configService: ConfigService,
  payload: any,
): string {
  return jwtService.sign(payload, {
    expiresIn: configService.get<string>('JWT_ACCESS_EXPIRES') || '15m',
  });
}

export function generateRefreshToken(
  jwtService: JwtService,
  configService: ConfigService,
  payload: any,
): string {
  return jwtService.sign(payload, {
    expiresIn: configService.get<string>('JWT_REFRESH_EXPIRES') || '7d',
  });
}

export function verifyRefreshToken(
  jwtService: JwtService,
  configService: ConfigService,
  token: string,
): any {
  return jwtService.verify(token, {
    secret: configService.get<string>('JWT_REFRESH_SECRET') || 'default_refresh_secret',
  });
}
