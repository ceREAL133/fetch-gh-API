import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApi(): any {
    return this.appService.getApi();
  }

  @Get('commits')
  getCommits() {
    return this.appService.getCommits();
  }

  @Get('branches')
  getBranches() {
    return this.appService.getBranches();
  }

  @Get('branches/:name')
  getBranchByName(@Param('name') name) {
    return this.appService.getBranchByName(name);
  }

  @Get('branches/:name/:filter')
  getBranchWithFilter(@Param('name') name, @Param('filter') filter) {
    return this.appService.getBranchWithFilter(name, filter);
  }
}
