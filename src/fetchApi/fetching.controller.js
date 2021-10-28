"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchController = void 0;
const common_1 = require("@nestjs/common");
const { constants } = require('../constants');
const axios = require('axios');
let fetchController = class fetchController {
    getApi() {
        axios.get(constants.GITHUB_NODE_API).then((response) => {
            return response.json;
        });
    }
};
__decorate([
    (0, common_1.Get)()
], fetchController.prototype, "getApi", null);
fetchController = __decorate([
    (0, common_1.Controller)('fetchedRepository')
], fetchController);
exports.fetchController = fetchController;
