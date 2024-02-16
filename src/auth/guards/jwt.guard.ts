import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(
    context: ExecutionContext,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const authorizationHeader = request.headers.authorization;
    console.log('Authorization Header:', request.headers.authorization);
    if (!authorizationHeader) {
      throw new UnauthorizedException(
        'Ошибка авторизации: отсутствует заголовок Authorization',
      );
    }

    const token = request.headers.authorization.split(' ')[1].trim();

    if (!token) {
      throw new UnauthorizedException('Ошибка авторизации');
    }

    const validToken = this.authService.verifyToken(token);

    if (validToken?.error) {
      throw new UnauthorizedException(validToken.error);
    }

    return (request.token = token);
  }
}
