import logger from "./Logger";
class CustomReporter {
  onBegin(config:any, suite:any) {
    logger.info(`Starting Playwright tests with ${suite.allTests().length} test(s).`);
  }

  onTestBegin(test:any) {
    logger.info(`Test started: ${test.title}`);
  }

  onTestEnd(test:any, result:any) {
    const status = result.status.toUpperCase();
    if (result.status === 'passed') {
      logger.info(`Test passed: ${test.title}`);
    } else if (result.status === 'failed') {
      logger.error(`Test failed: ${test.title}`);
    } else {
      logger.warn(`Test status: ${test.title} - ${status}`);
    }
  }

  onEnd(result:any) {
    let summary = result;
    logger.info(`Execution Summary:`);
    logger.info(`Total tests: ${summary.expectedTotal}`);
    logger.info(`Tests passed: ${summary.status.passed}`);
    logger.info(`Tests failed: ${summary.status.failed}`);
    logger.info(`Tests skipped: ${summary.status.skipped}`);
    logger.info(`Execution completed in ${summary.duration / 1000} seconds.`);
  }
}

module.exports = CustomReporter;
