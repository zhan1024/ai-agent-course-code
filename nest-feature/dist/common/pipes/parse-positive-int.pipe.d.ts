import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParsePositiveIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number;
}
