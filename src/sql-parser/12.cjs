const mysqlParser = require('@verycrazydog/mysql-parser')
const splitResult = mysqlParser.split(`
  -- Comment is removed
  /*& tenant:'gslq4dev' */
  SELECT 1;
  DELIMITER ;;
  SELECT 2;;
  DELIMITER ;
  SELECT 3;
`, {
  retainComments: true
})
// Print [ 'SELECT 1', 'SELECT 2', 'SELECT 3' ]
console.log(splitResult)
