# Heartbeat

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
docker container cp config.json heartbeat
docker contianer restart heartbeat
```

## Contributors

* Mohamed Anas Ben Othman

## License

© 2017 - MIT License