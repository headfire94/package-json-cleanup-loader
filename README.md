# USAGE
``` webpack.config.js
 module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'package-json-cleanup-loader',
                options: {
                    only: ["version", "name", "otherParam"]
                }
            }
        ]
}
```

          