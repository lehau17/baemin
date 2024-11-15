import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AccessTokenGuard } from 'src/common/guard/accessToken.guard';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  // Lấy danh sách địa chỉ của một user
  @Get('/user/:userId')
  getAddressesByUserId(@Param('userId') userId: number) {
    return this.addressesService.getAddressesByUserId(Number(userId));
  }

  // Thêm địa chỉ mới
  @Post()
  @UseGuards(AccessTokenGuard)
  createAddress(@Body() createAddressDto: CreateAddressDto, @Req() req) {
    return this.addressesService.createAddress(createAddressDto, req.user.sub);
  }

  // Cập nhật địa chỉ
  @Patch(':id')
  updateAddress(
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressesService.updateAddress(Number(id), updateAddressDto);
  }

  // Xóa địa chỉ
  @Delete(':id')
  deleteAddress(@Param('id') id: number) {
    return this.addressesService.deleteAddress(Number(id));
  }
}
