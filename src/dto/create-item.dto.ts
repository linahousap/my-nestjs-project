// src/dto/create-item.dto.ts

import { CreateItemMetadataDto } from "./create-item-metadata.dto";

// import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
//   @ApiProperty({ description: 'The name of the item' })
  name: string;

//   @ApiProperty({ description: 'The description of the item' })
  description: string;

//   @ApiProperty({ type: CreateItemMetadataDto })
  metadata: CreateItemMetadataDto;
}