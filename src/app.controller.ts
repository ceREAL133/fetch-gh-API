import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApi(): any {
    console.log(this.appService.getApi());
  }

  @Get('commits')
  getCommits() {
    return this.appService.getCommits();
  }

  @Get('branches')
  getBranches() {
    console.log(this.appService.getBranches());
  }

  @Get('branches/:name')
  getBranchByName(@Param('name') name) {
    console.log(this.appService.getBranchByName(name));
  }

  @Get('branches/:name/:filter')
  getBranchWithFilter(@Param('name') name, @Param('filter') filter) {
    console.log(this.appService.getBranchWithFilter(name, filter));
  }
}
