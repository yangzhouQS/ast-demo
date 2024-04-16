const { Parser } = require('sql-ddl-to-json-schema');


const parser = new Parser('mysql');

const sql = `
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nickname VARCHAR(255) NOT NULL,
  deleted_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE MyISAM COMMENT 'All system users';

ALTER TABLE users ADD UNIQUE KEY unq_nick (nickname);
`;

/**
 * Read on for available options.
 */
const options = {};

/**
 * Explore the compact JSON format...
 */
const compactJsonTablesArray = parser.feed(sql).toCompactJson(parser.results);

/**
 * Or get the JSON Schema if you need to modify it...
 */
const jsonSchemaDocuments = parser.feed(sql).toJsonSchemaArray(options, compactJsonTablesArray);

console.log(JSON.stringify(jsonSchemaDocuments,null,2));

