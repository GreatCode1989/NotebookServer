import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class NotebookGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const {
      text,
      description,
      about,
      display,
      cpu,
      gpu,
      memory,
      battery,
      set,
      os,
      price,
      material,
      camera,
      brand,
      gpu2,
      ssd,
      image,
      in_stock,
      in_shop,
      popularity,
      old,
    } = request.body;

    if (!text) {
      throw new UnauthorizedException('Поле text обязательно');
    }

    if (!about) {
      throw new UnauthorizedException('Поле about обязательно');
    }
    if (!display) {
      throw new UnauthorizedException('Поле display обязательно');
    }
    if (!cpu) {
      throw new UnauthorizedException('Поле cpu обязательно');
    }
    if (!gpu) {
      throw new UnauthorizedException('Поле gpu обязательно');
    }
    if (!gpu2) {
      throw new UnauthorizedException('Поле gpu2 обязательно');
    }
    if (!camera) {
      throw new UnauthorizedException('Поле camera обязательно');
    }
    if (!brand) {
      throw new UnauthorizedException('Поле brand обязательно');
    }
    if (!memory) {
      throw new UnauthorizedException('Поле memory обязательно');
    }
    if (!ssd) {
      throw new UnauthorizedException('Поле ssd обязательно');
    }
    if (!battery) {
      throw new UnauthorizedException('Поле battery обязательно');
    }
    if (!set) {
      throw new UnauthorizedException('Поле set обязательно');
    }
    if (!os) {
      throw new UnauthorizedException('Поле os обязательно');
    }

    if (!description) {
      throw new UnauthorizedException('Поле description обязательно');
    }

    if (!price) {
      throw new UnauthorizedException('Поле price обязательно');
    }

    if (!material) {
      throw new UnauthorizedException('Поле material обязательно');
    }

    if (!image) {
      throw new UnauthorizedException('Поле image обязательно');
    }

    if (!in_stock) {
      throw new UnauthorizedException('Поле in_stock обязательно');
    }

    if (!in_shop) {
      throw new UnauthorizedException('Поле in_shop обязательно');
    }

    if (!popularity) {
      throw new UnauthorizedException('Поле popularity обязательно');
    }

    if (!old) {
      throw new UnauthorizedException('Поле popularity обязательно');
    }

    return true;
  }
}
