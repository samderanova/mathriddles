require('babel-register')({
    presets: ["es2015", "react"]
});
 
const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;
 
function SitemapGenerator() {
    return (
        new Sitemap(router)
            .build('https://samderanova.github.io/mathriddles')
            .save('./public/sitemap.xml')
    );
}
    
SitemapGenerator();