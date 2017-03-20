module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "stage2": {
      "type": "confirm",
      "message": "Use Stage 2 Babel preset? [preset-stage-2]"
    }
  },
  "filters": {
    ".eslintrc.js": true,
    ".eslintignore": true,
    "config/test.env.js": true,
    "test/unit/**/*": true,
    "build/webpack.test.conf.js": true,
    "test/e2e/**/*": true,
    "src/router/**/*": true
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
