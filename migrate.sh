#Take data from .env and combine it with knexfile_template.js to emit knexfile.js
. .env
echo $DB_USER

cat knexfile_template.js | sed 's/$host/'$DB_HOST'/' | sed 's/$user/'$DB_USER'/' | sed 's/$password/'$DB_PASS'/' > knexfile.js
npx knex migrate:latest
rm knexfile.js 