# Dokku (для деплоя, локалка)
0. Убедиться, что существую ключи "id_rsa_apps" в "C:/Users/User_Folder/.ssh/"

1. Добавить удаленный репозиторий 
```
git remote add dokku dokku@188.166.119.86:greenenergyfront
```
2. Установить связь с SSH ключем для репозитория:
git config core.sshCommand 'ssh -i $HOME/.ssh/id_rsa_apps' 
3. Настройки завершены, можно пушить на сервер!
```
git push dokku master
```

# Полезные команды для управления приложением на сервере

### Перезагрузка, стоп и старт приложения
```
dokku ps:restart greenenergyfront
dokku ps:start greenenergyfront
dokku ps:stop greenenergyfront
```
### Просмотр логов:
```
dokku logs greenenergyfront
```
### Установка переменных окружения
```
dokku config:set greenenergyfront ENVKEY=VALUE
dokku config:show greenenergyfront
```




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
