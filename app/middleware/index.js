import * as ENV from '../config/env';
import Logger from '../config/winston';

export default function checkEnvVariables() {
  const missing = Object.keys(ENV).filter(
    (variable) => Object.prototype.hasOwnProperty.call(ENV, variable) && !ENV[variable]
  );

  if (missing.length) {
    Logger.error(`❗ These variables are missing in the .env\n\n${missing.join('\n')}\n`);
    return process.exit();
  }
  return Logger.info(`🚀 All Environment variables are defined\n`);
}
