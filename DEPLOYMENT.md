# Deployment Guide

This guide covers deploying the Sakin Barua Likhan portfolio website to various platforms.

## Quick Deploy Options

### 1. Vercel (Recommended - Zero Config)

**Easiest Option for Next.js/Vite Projects**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Via Git (Auto-deploy)**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### 2. Netlify

**Single Command Deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
netlify deploy --prod --build --functions=functions
```

**Or via GitHub:**
1. Push to GitHub
2. Connect repository at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 3. GitHub Pages

**Free Hosting with GitHub**

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/', // Change if using custom domain
  // ... rest of config
})
```

2. Deploy:
```bash
npm run build
# Create gh-pages branch or use GitHub Actions
```

### 4. Traditional Web Hosting (cPanel, etc.)

1. Run build:
```bash
npm run build
```

2. Upload `dist/` folder contents via FTP to `public_html`

3. Create `.htaccess` for SPA routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and run:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Environment Setup

Create `.env.production` for production variables:

```env
VITE_API_URL=https://api.example.com
```

## Performance Optimization Before Deploy

### 1. Check Build Size
```bash
npm run build
# Check dist folder size
```

### 2. Compress Assets
```bash
gzip dist/**/*.js
gzip dist/**/*.css
```

### 3. Enable Caching
Update server headers:
```
Cache-Control: max-age=31536000 (for non-index files)
Cache-Control: max-age=0, no-cache (for index.html)
```

### 4. Set Up CDN
- Use Cloudflare, Bunnycdn, or AWS CloudFront
- Cache static assets at CDN edge locations

## Deployment Checklist

- [ ] All environment variables set
- [ ] Updated contact form backend URL
- [ ] Updated social media links
- [ ] Updated personal information
- [ ] SEO meta tags verified (in index.html)
- [ ] Performance metrics checked
- [ ] Mobile responsiveness tested
- [ ] Forms tested
- [ ] Analytics setup (if using)
- [ ] SSL certificate enabled
- [ ] 404 page configured (if needed)
- [ ] Sitemap created
- [ ] Robots.txt configured

## SEO Checklist

1. **Verify Meta Tags:**
   - Title: ✓ (in index.html)
   - Description: ✓ (in index.html)
   - OG tags: ✓ (in index.html)

2. **Add Sitemap:**
   Create `public/sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://sakinlikhan.com/</loc>
       <lastmod>2024-01-01</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

3. **Create robots.txt:**
   Create `public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://sakinlikhan.com/sitemap.xml
   ```

4. **Submit to Search Engines:**
   - Google Search Console
   - Bing Webmaster Tools

## Domain Setup

### Pointing Domain to Vercel:
```
CNAME: cname.vercel-dns.com
```

### Pointing Domain to Netlify:
```
CNAME: your-site.netlify.com
```

### Custom Domain on GitHub Pages:
Add `CNAME` file to repo root with your domain.

## SSL Certificate

Most platforms auto-enable HTTPS:
- Vercel: ✓ Automatic
- Netlify: ✓ Automatic
- GitHub Pages: ✓ Automatic
- Traditional: Use Let's Encrypt (certbot)

## Monitoring & Analytics

### Add Google Analytics:

1. Update `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. Replace `GA_ID` with your Google Analytics ID

## Continuous Deployment

### With GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Troubleshooting

### Issue: 404 on route refresh
**Solution:** Ensure server rewrites to index.html for SPA routing

### Issue: Styles not loading
**Solution:** Check CSS imports and Tailwind build process

### Issue: Images not showing
**Solution:** Verify image paths are relative or use absolute URLs

### Issue: Slow performance
**Solution:** 
- Enable gzip compression
- Use CDN
- Optimize images
- Check bundle size

## Support

For issues with specific platforms:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- GitHub Pages: https://docs.github.com/en/pages

---

### Recommended: Vercel

**Why Vercel?**
- Free tier with unlimited deployments
- Auto-scaling
- Built for React/Next.js/Vite
- Fast global CDN
- Auto-generated SSL
- Zero-config deployment
- Custom domain support
- Analytics included

Get started: https://vercel.com/new
