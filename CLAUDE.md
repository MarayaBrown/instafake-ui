# Instafake UI - Contexto del Proyecto

## 📋 Estado Actual
- **Repo:** https://github.com/MarayaBrown/instafake-ui
- **Deploy:** https://instafake-ui.vercel.app
- **Branch principal:** `master`

## 🎯 Resumen del Proyecto
Clon de UI de Instagram - proyecto demo de frontend para portfolio. Solo HTML/CSS/Sass + JS vanilla para micro-interacciones. Sin backend.

## 🔧 Comandos Disponibles

| Comando | Función |
|---------|---------|
| `/newfeature [nombre]` | Crear nueva branch y hacer checkout |
| `/serve` | Levantar servidor local en puerto 3000 |
| `/shipit [nombre]` | Merge branch a master y deployar |

## 📁 Estructura del Proyecto
```
├── index.html          # HTML principal
├── css/
│   └── Instagram.css   # CSS compilado
├── Sass/
│   ├── _base.scss      # Estilos base (navbar, banner, footer)
│   ├── _cards.scss     # Estilos de cards
│   ├── _reset.scss     # Reset CSS
│   ├── _variables.scss  # Variables Sass
│   ├── _fonts.scss     # Import fonts
│   └── Instagram.scss  # Archivo principal
├── js/
│   └── interactions.js # Micro-interacciones (like/save)
├── data/               # Imágenes
└── README.md
```

## 🚀 Flujo de Trabajo

```
1. /newfeature nombre   → Crear branch feature/nombre
2. Trabajar en cambios
3. /serve              → Probar local
4. git add . && git commit -m "feat: descripción"
5. git push origin feature/nombre
6. Revisar Preview en Vercel
7. /shipit nombre      → Deploy a producción
8. git branch -d feature/nombre  → Limpiar
```

## ✅ Mejoras Aplicadas Recientemente
- Banner showcase sutil (fondo sólido, no gradiente)
- Contenido realista (usernames variados, captions naturales)
- Iconos de navbar claramente no interactivos
- Eliminación de CSS source map

## ⚠️ Notas Importantes
- Branch principal es `master` (no `main`)
- No agregar funcionalidad backend
- Mantener código simple y limpio
- Commits descriptivos

## 📞 Links Útiles
- GitHub: https://github.com/MarayaBrown/instafake-ui
- Vercel: https://vercel.com/dashboard
- Preview URLs se generan automáticamente por cada PR/push
