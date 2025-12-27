#!/usr/bin/env node

/**
 * Route Usage Checker for React-TypeScript (Vite) Frontend
 * 
 * This script should be run in your FRONTEND project directory.
 * It searches through your React-TS codebase to find which backend API routes are being used.
 * 
 * Usage:
 * 1. Copy this file to your frontend project root
 * 2. Run: node check-routes-usage.js [path-to-search]
 * 
 * Example:
 *   node check-routes-usage.js src/
 *   node check-routes-usage.js .
 */

const fs = require('fs');
const path = require('path');

// All backend routes from main.go
const backendRoutes = [
  // Health & Public routes
  '/health',
  '/signup',
  '/sessionLogin',
  '/sessionLogout',
  '/artworks',
  '/artworks/status',
  '/artworks/upload',
  '/artists',
  '/print-options',
  
  // Public printshop routes
  '/printshops',
  '/printshops/details',
  '/printshops/match',
  '/printshops/calculate',
  
  // User routes
  '/getprofile',
  '/updateprofile',
  '/cart/add',
  '/cart/remove',
  '/cart',
  '/checkout',
  '/orders',
  '/orders/select-printshop',
  '/calculate-price',
  
  // Order matching
  '/orders/matches',
  '/orders/assign',
  
  // Print Shop Console routes
  '/printshop/profile',
  '/printshop/profile/create',
  '/printshop/profile/update',
  '/printshop/services',
  '/printshop/services/create',
  '/printshop/services/update/',
  '/printshop/services/delete/',
  '/printshop/services/pricing/',
  '/printshop/services/pricing/update/',
  '/printshop/services/calculate/',
  '/printshop/frames',
  '/printshop/frames/create',
  '/printshop/frames/update/',
  '/printshop/frames/delete/',
  '/printshop/frames/upload',
  '/printshop/frames/list',
  '/printshop/frames/remove',
  '/printshop/orders/report-issue',
  '/printshop/sizes',
  '/printshop/sizes/create',
  '/printshop/sizes/update/',
  '/printshop/sizes/delete/',
  '/printshop/materials',
  '/printshop/materials/create',
  '/printshop/materials/update/',
  '/printshop/materials/delete/',
  
  // Payment routes
  '/payments/create',
  '/payments/verify',
  '/payments',
  '/payments/webhook/',
  '/payments/refund',
];

// File extensions to search in (React-TS + Vite)
const fileExtensions = ['.ts', '.tsx'];

// Directories to skip (Vite-specific)
const skipDirs = ['node_modules', '.git', 'dist', 'build', '.vite', 'coverage', 'public'];

function searchDirectory(dir, results = {}) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return results;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!skipDirs.includes(file)) {
        searchDirectory(filePath, results);
      }
    } else if (fileExtensions.some(ext => filePath.endsWith(ext))) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Search for each route in the file content
      for (const route of backendRoutes) {
        // Escape special regex characters in the route
        const escapedRoute = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match the route in various contexts: 
        // - fetch('/route'), axios.get('/route'), etc.
        // - const url = '/route', path: '/route'
        // - Template literals: `${baseURL}/route`
        const regex = new RegExp(`['"\`]${escapedRoute}|${escapedRoute}['"\`]`, 'g');
        
        if (regex.test(content)) {
          if (!results[route]) {
            results[route] = [];
          }
          // Store relative path for cleaner output
          const relativePath = path.relative(process.cwd(), filePath);
          results[route].push(relativePath);
        }
      }
    }
  }

  return results;
}

function main() {
  const searchPath = process.argv[2] || '.';
  
  console.log('🔍 Searching for backend route usage in frontend...');
  console.log(`📂 Search path: ${path.resolve(searchPath)}`);
  console.log(`📋 Total routes to check: ${backendRoutes.length}\n`);

  const results = searchDirectory(searchPath);
  
  const usedRoutes = Object.keys(results).sort();
  const unusedRoutes = backendRoutes.filter(route => !results[route]).sort();

  console.log('═══════════════════════════════════════════════════════════');
  console.log(`✅ USED ROUTES (${usedRoutes.length}/${backendRoutes.length})`);
  console.log('═══════════════════════════════════════════════════════════\n');

  if (usedRoutes.length > 0) {
    usedRoutes.forEach(route => {
      console.log(`✓ ${route}`);
      results[route].forEach(file => {
        console.log(`  └─ ${file}`);
      });
      console.log('');
    });
  } else {
    console.log('No routes found in the frontend code.\n');
  }

  console.log('═══════════════════════════════════════════════════════════');
  console.log(`❌ UNUSED ROUTES (${unusedRoutes.length}/${backendRoutes.length})`);
  console.log('═══════════════════════════════════════════════════════════\n');

  if (unusedRoutes.length > 0) {
    unusedRoutes.forEach(route => {
      console.log(`✗ ${route}`);
    });
    console.log('');
  } else {
    console.log('All routes are being used!\n');
  }

  // Summary by category
  console.log('═══════════════════════════════════════════════════════════');
  console.log('📊 SUMMARY BY CATEGORY');
  console.log('═══════════════════════════════════════════════════════════\n');

  const categories = {
    'Public Routes': backendRoutes.filter(r => !r.startsWith('/printshop')),
    'Print Shop Console': backendRoutes.filter(r => r.startsWith('/printshop')),
  };

  Object.entries(categories).forEach(([category, routes]) => {
    const used = routes.filter(r => results[r]).length;
    const total = routes.length;
    const percentage = total > 0 ? ((used / total) * 100).toFixed(1) : 0;
    
    console.log(`${category}: ${used}/${total} (${percentage}%)`);
  });

  console.log('\n═══════════════════════════════════════════════════════════\n');
}

main();

