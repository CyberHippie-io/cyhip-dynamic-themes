
##### STEP 1: DEPENDENCIES

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies With Yarn
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

##### STEP 2: BUILDER
FROM node:20-alpine AS builder

ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR

WORKDIR /app


COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

##### STEP 3: RUNNER (DEV MODE)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=development
ENV PORT=3000

COPY --from=builder /app /app

EXPOSE 3000
ENV PORT 3000
