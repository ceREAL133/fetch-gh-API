import { Module } from '@nestjs/common';

import { fetchController } from './fetching.controller';
// import { ProductsService } from './products.service';

@Module({
  imports: [],
  controllers: [fetchController],
  providers: [],
})
export class FetchingModule {}
