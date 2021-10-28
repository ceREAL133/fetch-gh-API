import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { constants } from '../constants';
import axios from 'axios';

@Controller()
export class fetchController {
  @Get()
  getApi(): any {
    axios.get(constants.GITHUB_NODE_API).then((response) => {
      return response;
    });
  }
}
