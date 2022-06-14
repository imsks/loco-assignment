import app from 'app'
import configEnv from 'config'
require('module-alias/register')

const port = configEnv.PORT

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`)
})
