"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: [
    "stylelint-prettier",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-no-unsupported-browser-features",
    "stylelint-scss"
  ],
  rules: {
    // Other
    "at-rule-no-unknown": null, // Disabled because of stylelint-scss
    "font-weight-notation": "named-where-possible",
    "shorthand-property-no-redundant-values": true,

    // Quotes
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "string-quotes": "single",

    // Vendor prefixes
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // Specificity
    "max-nesting-depth": 4,
    "selector-max-specificity": "0,4,2",

    // Selector types, units, properties, functions and words in comments
    "color-named": [
      "never",
      {
        ignore: ["inside-function"]
      }
    ],
    "color-no-hex": true,
    "declaration-no-important": true,
    "declaration-property-unit-whitelist": {
      "line-height": [""]
    },
    "declaration-property-value-blacklist": {
      "/^transition/": ["/all/"],
      "/^background/": ["http:", "https:"],
      "/^border/": ["none"],
      "/.+/": ["initial"]
    },
    "function-calc-no-invalid": null,
    "selector-max-attribute": 1,
    "selector-max-class": 3,
    "selector-max-compound-selectors": 3,
    "selector-max-combinators": 2,
    "selector-max-id": 0,
    "selector-max-pseudo-class": 2,
    "selector-max-type": 2,
    "selector-max-universal": 1,

    // Plugins
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning"
      }
    ],
    "scss/at-each-key-value-single-line": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-rule-conditional-no-parentheses": true,
    "scss/at-rule-no-unknown": true,
    "scss/comment-no-loud": true,
    "scss/declaration-nested-properties": [
      "always",
      {
        except: ["only-of-namespace"]
      }
    ],
    "scss/function-color-relative": true,
    "scss/no-duplicate-mixins": true,
    "scss/selector-nest-combinators": "always",
    "scss/selector-no-redundant-nesting-selector": true,
    "order/properties-order": [
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "box-sizing",
      "grid",
      "grid-after",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-before",
      "grid-column",
      "grid-column-end",
      "grid-column-gap",
      "grid-column-start",
      "grid-columns",
      "grid-end",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-gap",
      "grid-row-start",
      "grid-rows",
      "grid-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "flex-order",
      "flex-pack",
      "flex-align",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "zoom",
      "columns",
      "column-gap",
      "column-fill",
      "column-rule",
      "column-span",
      "column-count",
      "column-width",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "font",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-style",
      "font-variant",
      "font-weight",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "hyphens",
      "src",
      "line-height",
      "color",
      "text-align",
      "text-align-last",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-decoration",
      "text-indent",
      "text-justify",
      "text-outline",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "letter-spacing",
      "word-break",
      "word-spacing",
      "word-wrap",
      "tab-size",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "pointer-events",
      "fill",
      "fill-opacity",
      "stroke",
      "stroke-opacity",
      "stroke-width",
      "stroke-linecap",
      "stroke-dasharray",
      "stroke-dashoffset",
      "shape-rendering",
      "cursor",
      "speak",
      "visibility",
      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "background",
      "background-color",
      "background-image",
      "filter",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "border",
      "border-color",
      "border-style",
      "border-width",
      "border-top",
      "border-top-color",
      "border-top-style",
      "border-top-width",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "opacity",
      "transform",
      "transform-origin",
      "backface-visibility",
      "perspective",
      "perspective-origin",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-fill-mode",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction"
    ]
  }
};
