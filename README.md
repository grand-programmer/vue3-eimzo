# vue-eimzo

## Installation
https://www.npmjs.com/package/vue3-eimzo
```sh
npm i vue3-eimzo
# or
yarn add vue3-eimzo
```

## Installing as a plugin
```js
import VueEimzo from 'vue3-eimzo'

app.use(VueEimzo) 

// you can access EIMZO client as $eimzo inside vue instance
```

## Methods
```js
await this.$eimzo.install()

this.certs = await this.$eimzo.listAllUserKeys()

let loadKeyResult = await this.$eimzo.loadKey(key)
let cert = await this.$eimzo.getMainCertificate(loadKeyResult.id)
let certInfo = await this.$eimzo.getCertInfo(cert)

let result = await this.$eimzo.signPkcs7(key, 'Hello world')
let token = await this.$eimzo.getTimestampToken(result.signature_hex)

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
