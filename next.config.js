/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                { loader: '@svgr/webpack', options: { runtimeConfig: false } },
            ],
        })
        config.externals.push('canvas')
        return config
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
