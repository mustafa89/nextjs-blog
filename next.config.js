const html = require('remark-html')


const withMDX = require('@next/mdx')({})
module.exports = withMDX({
    pageExtensions: ['mdx', 'jsx', 'js'],
})