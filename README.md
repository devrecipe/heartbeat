# Heartbeat

![Travis CI build status](https://img.shields.io/travis/devrecipe/heartbeat.svg)
![Docker build status](https://img.shields.io/docker/build/devrecipe/heartbeat.svg)
![Docker pulls count](https://img.shields.io/docker/pulls/devrecipe/heartbeat.svg)
![Docker stars count](https://img.shields.io/docker/stars/devrecipe/heartbeat.svg)
![License](https://img.shields.io/github/license/devrecipe/heartbeat.svg)

A very basic minimal web app that keeps an eye on running nodes

## Deployment using Docker

In your docker host, run a new container

```
docker run -d -p 8081:80 --name heartbeat devrecipe/heartbeat
```

## Configuration

Create a `config.json` file that contains an array with documents in the following format that contains the node name and its ip specified within the address key

```
{
    "name": "My Node",
    "address": "127.0.0.1"
}
```

After writing the configuration file, copy it to the heartbeat container and restart it so changes can take effect

```
docker container cp config.json heartbeat:/usr/src/app/config.json
docker container restart heartbeat
```

## Contributors

* Mohamed Anas Ben Othman

## License

© 2017 - MIT License