import { SelectBuilder } from 'sql-love';

/* const query = new SelectBuilder(
  `
    SELECT u.id, u.fname, u.lname, u.email, a.city, a.zip
    FROM users
    LEFT JOIN addresses a ON a.user_id = u.id
    WHERE a.state = :state
      AND a.city IN (:city)
  `,
  { state: 'CA', city: ['San Francisco', 'Los Angeles'] }
);

const { sql, bindings } = query.compile();
console.log(sql); */
