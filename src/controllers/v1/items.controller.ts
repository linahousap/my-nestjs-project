// src/controllers/items.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from 'src/dto/create-item.dto';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateItemDto
  })
  create(@Body() createItemDto: CreateItemDto): CreateItemDto {
    return createItemDto;
  }
}