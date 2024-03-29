/**
 * An unknown error occurred
 * @class
 */
class UnknownError extends Error {
  /**
   * @constructor
   * @param {Object} originalError The original error object
   */
  constructor(originalError) {
    super(`An unknown error occurred : ` + originalError.message);

    // Use the name of the class as the name of the error
    this.name = this.constructor.name;

    this.applicationErrorCode = 0;
  }
}

/**
 * Folder does not exist
 * @class
 */
class DirectoryDoesNotExist extends Error {
  /**
   * @constructor
   * @param {String} folder Path to the folder
   */
  constructor(folder) {
    super(`The folder \'${folder}\' does not exist`);

    this.name = this.constructor.name;

    this.applicationErrorCode = 1;
    this.path = folder;
  }
}

/**
 * File does not exist
 * @class
 */
class FileDoesNotExist extends Error {
  /**
   * @constructor
   * @param {String} file Path to the file
   */
  constructor(file) {
    super(`The file \'${file}\' does not exist`);

    this.name = this.constructor.name;

    this.applicationErrorCode = 2;
    this.path = file;
  }
}

/**
 * Invalid json in file
 * @class
 */
class InvalidJsonfile extends Error {
  /**
   * @constructor
   * @param {String} file Path to the file
   */
  constructor(file) {
    super(`The file \'${file}\' does not contain valid json data`);

    this.name = this.constructor.name;

    this.applicationErrorCode = 3;
    this.path = file;
  }
}

/**
 * Invalid configuration schema
 * @class
 */
class InvalidConfigSchema extends Error {
  /**
   * @constructor
   * @param {String} validationMessage Error message from the validator
   */
  constructor(validationMessage) {
    super(`The configuration is invalid | ${validationMessage}`);

    this.name = this.constructor.name;

    this.applicationErrorCode = 4;
    this.details = validationMessage;
  }
}

/**
 * Tempalate with this name already exists
 * @class
 */
class TemplateExists extends Error {
  /**
   * @constructor
   * @param {String} templateName Name of the template
   */
  constructor(templateName) {
    super(`A template with the name \'${templateName}\' already exists. Run the command again with a differnt name`);

    this.name = this.constructor.name;
    this.applicationErrorCode = 5;
    this.templateName = templateName;
  }
}

module.exports = {
  DirectoryDoesNotExist,
  FileDoesNotExist,
  InvalidJsonfile,
  UnknownError,
  InvalidConfigSchema,
  TemplateExists,
};
