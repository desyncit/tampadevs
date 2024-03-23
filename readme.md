# Tampa Devs

![GtuNm3R1yV](https://user-images.githubusercontent.com/10290348/162232393-26045f1f-7f79-466b-9686-47a77b72bd58.gif)

## Local Development Environment

To run the site locally, you will need to have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine. Once you have Docker installed, you can run the following command to start the site locally:

```bash
docker-compose up
```

This will start the site locally and you should see output similar to the following:

```
website-docker-11ty-1  | [11ty] Writing dist/talks/2022/20220803-cybersecurity/index.html from ./src/talks/2022/20220803-cybersecurity.md (liquid)
website-docker-11ty-1  | [11ty] Writing dist/talks/2023/20230201-mobile-development/index.html from ./src/talks/2023/20230201-mobile-development.md (liquid)
website-docker-11ty-1  | [11ty] Writing dist/talks/2023/20230315-career-forum/index.html from ./src/talks/2023/20230315-career-forum.md (liquid)
website-docker-11ty-1  | [11ty] Copied 37 files / Wrote 54 files in 19.99 seconds (370.2ms each, v1.0.2)
website-docker-11ty-1  | [11ty] Watching…
website-docker-11ty-1  | [Browsersync] Access URLs:
website-docker-11ty-1  |  --------------------------------
website-docker-11ty-1  |     Local: http://localhost:8080
website-docker-11ty-1  |  External: http://172.30.0.2:8080
website-docker-11ty-1  |  --------------------------------
website-docker-11ty-1  | [Browsersync] Serving files from: dist
```

You can then open your browser to [http://localhost:8080](http://localhost:8080) to view the site!

_Note: The first time you run this container, it will take a few minutes to download the Docker image and install the dependencies. Be patient, and the environment will be ready once you see the output above._

_Note: If you are using Docker Desktop on Windows, you may need to add the project directory to the list of shared directories in Docker Desktop. See [this tutorial](https://dev.to/bogicevic7/windows-docker-shared-volume-folder-46d1)._


## Testing

This project is tested with [BrowserStack](https://www.browserstack.com/).
