# Docker

## コンテナ系メモ

- Docker コンテナの場所に移動

```bash
cd ./docker_tanext3d
```

- 起動
  - [ローカルアクセス](http://localhost:8039/)

```bash
docker-compose up -d
```

- 停止

```bash
docker-compose down
```

- リビルド（キャッシュ未使用）

```bash
docker-compose build --no-cache tanext3d
```
