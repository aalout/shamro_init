const path = require('path')
 
module.exports = {
  trailingSlash: true,
  images: { unoptimized: true },
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}