# Violet Void Project Structure

This project is module based
Each module has 
- Components: The ui elements needed
- Pages: The actual pages
- Utils: Any helper file code

## Exporting files
All modules would have an App.jsx export to prevent nested importing from other components
```js
export {default as CartPage} from './pages/CartPage';
export {formatPrice} from './utils/formatters';
```

## Team Formation
Community Module: Khalid & Zeiad
Store: Mohey & Noor

## Figma Link
https://www.figma.com/design/wS9U4GptT6gdvaIs6d1nS6/Game-Design-Project?node-id=0-1&t=OwxspPwQKbKgwsmR-1