# Odoo With vsf

```sh
1. git clone https://github.com/caipi-germany/caipi3.de.git
2. create a new file named as .env
3. Add below codee
```sh
BASE_URL: https://caipi.de/
NODE_ENV: production (for server)
NODE_ENV: dev (for local)
```
4. run command : yarn
5. run command : yarn dev
6. You can access with http://localhost:3000
```

## Tech stack

1. Nuxt
2. VSF 2
3. SFUI
4. ODOO

## Running on Local Machine Ubuntu

Comment out the storage and devStorage object because it is giving me the following error

```sh
I am getting the redis error so I can remove the Redis Array
[
  '~/helpers/cache/nuxt',
  {
    invalidation: {
      endpoint: '/cache-invalidate',
      key: '0ead60c3-d118-40be-9519-d531462ddc60',
      handlers: ['./helpers/cache/defaultHandler']
    },
    driver: [
      './helpers/cache.js',
      {
        isDev,
        redis: {
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
          password: process.env.REDIS_PASSWORD,
          defaultTimeout: 86400
        }
      }
    ]
  }
]
```

## ODOO Server

Default: [Default come with repo](https://vsfdemo17.labs.odoogap.com/)

OUR: [caipi.de](https://caipi.de/)
