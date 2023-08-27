## SebassNoob-website

![Vercel](https://vercelbadge.vercel.app/api/SebassNoob/sebassnoob-website)
![UptimeRobot](https://img.shields.io/uptimerobot/ratio/m795160693-40f9fffe08c09e60542ce090)

A repo for my personal website (reworked). Written with Next.js and Flask. Deployed with Vercel.

### Setup (Dev)

Prerequisites:

```
    python >=3.11
    typescript
    make
    docker compose
    npm, pip
```

Run the following commands in order:

```
    make build
    make run
```

This will build the containers and start a network on your local machine. Then go to `http://localhost:3000` to access frontend.

To stop the container,

```
    make fuckoff
```

### Deployment

Vercel makes a new deploy on every push to the `master` branch. For manual deployment, `make deploy`.

`vercel` to create a preview build. Note that API/backend changes may fail unless you modify `.env.production` to a correct url.
