import { Configuration, IdentificationApi } from "./api";

const configuration = new Configuration({
  basePath: "https://seabattle.zethange.ru/api",
});

const identificationApi = new IdentificationApi(configuration);

export { identificationApi };
