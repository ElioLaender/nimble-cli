"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectiveGenerate = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var inquirer = require("inquirer");
var file_creator_1 = require("../../../core/file-creator/file-creator");
var directive_generate_template_1 = require("./directive-generate-template");
var base_generate_1 = require("../base-generate");
var DirectiveGenerate = /** @class */ (function (_super) {
    tslib_1.__extends(DirectiveGenerate, _super);
    function DirectiveGenerate(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    DirectiveGenerate.prototype.execute = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var answer, name;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.question()];
                    case 1:
                        answer = _a.sent();
                        name = answer.value.trim().toLowerCase();
                        if (!this.isValid(name)) return [3 /*break*/, 3];
                        this.name = name;
                        if (this.name.startsWith('/'))
                            this.name = this.name.substr(1);
                        if (this.name.endsWith('/'))
                            this.name = this.name.substr(0, this.name.length - 1);
                        return [4 /*yield*/, this.startCreateDirective()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.execute()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DirectiveGenerate.prototype.question = function () {
        return inquirer.prompt([{
                name: 'value',
                type: 'input',
                message: 'What is path and name? (ex.: directives/tooltip)',
            }]);
    };
    ;
    DirectiveGenerate.prototype.isValid = function (name) {
        if (name === '') {
            this.logger.showError('Cannot be empty.');
            return false;
        }
        if (name.includes(' ')) {
            this.logger.showError('Cannot contains whitespace.');
            return false;
        }
        if (/[!$%^&*()+|~=`{}\[\]:";'<>?,.]/.test(name)) {
            this.logger.showError('Cannot have the following symbols: !$%^&*()+|~=`{}\[\]:";\'<>?,.');
            return false;
        }
        return true;
    };
    DirectiveGenerate.prototype.startCreateDirective = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var creator, _a, fileInstructions, lastDirectory;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        creator = new file_creator_1.FileCreator();
                        _a = this.getBaseFileInstructions(), fileInstructions = _a.fileInstructions, lastDirectory = _a.lastDirectory;
                        if (lastDirectory)
                            lastDirectory.children.push({
                                name: this.fileName + ".directive.ts",
                                content: this.replaceVariablesInContentFile(directive_generate_template_1.DIRECTIVE_TS)
                            });
                        else
                            fileInstructions.push({
                                name: this.fileName,
                                content: this.replaceVariablesInContentFile(directive_generate_template_1.DIRECTIVE_TS)
                            });
                        creator.initialize(fileInstructions);
                        return [4 /*yield*/, creator.startCreateFiles(function (response) {
                                if (!response.error) {
                                    _this.logger.showCreated(response.fileInstruction.completePath());
                                }
                                else {
                                    _this.logger.showError(response.error);
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DirectiveGenerate.prototype.getValueByName = function (name) {
        switch (name) {
            case 'Name':
                return this.fileName;
            case 'FriendlyName':
                return this.fileFriendlyName;
        }
        return '';
    };
    DirectiveGenerate = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject('Logger'))
    ], DirectiveGenerate);
    return DirectiveGenerate;
}(base_generate_1.BaseGenerate));
exports.DirectiveGenerate = DirectiveGenerate;
//# sourceMappingURL=directive-generate.js.map