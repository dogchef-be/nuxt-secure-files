<h1 align="center">
  nuxt-secure-files
</h1>
<p align="center">
  Embed images and download files securely via API requests<br />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nuxt-secure-files"><img src="https://img.shields.io/npm/v/nuxt-secure-files?style=flat-square"></a> <a href="https://www.npmjs.com/package/nuxt-secure-files"><img src="https://img.shields.io/npm/dt/nuxt-secure-files?style=flat-square"></a> <a href="#"><img src="https://img.shields.io/github/license/dogchef-be/nuxt-secure-files?style=flat-square"></a>
</p>
<br />


## Table of contents
- [Main features](#main-features)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Main features

- Download Base64 files
- Directive for embedding images (WIP)
- TypeScript support

## Setup

1. Add `nuxt-secure-files` dependency to your project:

```bash
npm install nuxt-secure-files
```

2. Add `nuxt-secure-files` module to `nuxt.config.js`:

```js
export default {
  // ...other config options
  modules: ["nuxt-secure-files"];
}
```

3. (Optional) TypeScript support. Add `nuxt-secure-files` to the `types` section of `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["nuxt-secure-files"]
  }
}
```

## Usage

1. Make sure Axios is setup, so the Authorization request header is sent. Example:

```ts
const axiosPlugin: Plugin = ({ $axios }): void => {
  $axios.onRequest((config: AxiosRequestConfig): void => {
    config.headers.Authorization = 'Bearer XXXXXXXXXXXXXXXX'
  })
}

export default axiosPlugin
```

2. Use `$secDownload`:

```ts
{
  methods: {
    downloadFile() {
        this.$secDownload('/api/file/xx', 'file_xx.pdf');
    }
  }
}
```

## License

See the LICENSE file for license rights and limitations (MIT).
