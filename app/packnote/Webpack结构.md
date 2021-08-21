## Webpack结构
```javascript
'use strict';

const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: //
                use: //
            },
            {
                test:
                use:
            }
        ]
    },
    plugins: [
        new SomePlugin({
            //
        }),
    ]
}
```