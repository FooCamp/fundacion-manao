const fs = require('fs')

fs.copyFile('.env.example', '.env', (err) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  console.log('.env was created successfully')
})
