"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_repository_1 = require("../../../../../src/core/infra/repositories/cache.repository");
const presentation_1 = require("../../../../../src/core/presentation");
const project_repository_1 = __importDefault(require("../../../../../src/features/project/infra/repositories/project.repository"));
const controllers_1 = require("../../../../../src/features/project/presentation/controllers");
// SUT
// System under test
const makeSut = () => new controllers_1.ProjectController(new project_repository_1.default(), new cache_repository_1.CacheRepository());
// Request do STORE para reaproveitar código
const makeRequestStore = () => ({
    body: {
        name: "any_name",
        description: "any_description",
        startDate: new Date("2021-07-22"),
        endDate: new Date("2021-07-22"),
        userUid: "any_uid",
    },
    params: {},
});
describe("Project Controller", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    // Testar o STORE do Project Controller
    describe("Store", () => {
        test("Deveria retornar status 500 se houver erro", async () => {
            // Criar um metodo pro JEST ficar espionado um metodo ou resultado
            jest
                .spyOn(project_repository_1.default.prototype, "create")
                .mockRejectedValue(new Error());
            // Criar o SUT
            const sut = makeSut();
            const result = await sut.store(makeRequestStore());
            expect(result).toEqual(presentation_1.serverError());
        });
        test("Deveria chamar o Repositorio com valores corretos", async () => {
            const createSpy = jest.spyOn(project_repository_1.default.prototype, "create");
            // Criar o SUT
            const sut = makeSut();
            await sut.store(makeRequestStore());
            expect(createSpy).toHaveBeenCalledWith(makeRequestStore().body);
        });
    });
});
