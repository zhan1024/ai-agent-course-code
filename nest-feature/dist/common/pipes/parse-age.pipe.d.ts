import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseAgePipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number;
}
