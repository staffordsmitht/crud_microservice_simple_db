const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'crud_database',
    password: process.env.DB_PASS,
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query(`SELECT * FROM schema1.users ORDER BY id ASC`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(`SELECT * FROM schema1.users WHERE id = $1`, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query(`INSERT INTO schema1.users (name, email) VALUES ($1, $2) RETURNING id`, [name, email], (error, result) => {
      if (error) {
        throw error
      }
      //console.log(JSON.stringify (result))
      response.status(201).send(`User added with ID: ${result.rows[0].id}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      `UPDATE schema1.users SET name = $1, email = $2 WHERE id = $3`,
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(`DELETE FROM schema1.users WHERE id = $1`, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
      getUsers,
      getUserById,
      createUser,
      updateUser,
      deleteUser,
  }