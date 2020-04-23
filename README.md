# prometheus
Prometheus is a monitoring solution that collects metrics from client servers.

As a monitoring service, Prometheus servers monitor a particular thing.
That thing could be anything: it could be an entire Linux server, a stand-alone Apache server, a single process, a database service or some other system unit that you want to monitor.
In Prometheus terms, we call the main monitoring service the Prometheus Server and the things that Prometheus monitors are called Targets.

![how prom works](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/promDiagram.png)


## Prometheus as a docker container
I am using prometheus as a Docker images here
![prometheus container](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/promContainer.png)

## Prometheus.yml file
In order to run a Prometheus instance one need to create a prometheus.yml file. This file describes the jobs and the target port from where the metrics are to be scraped.

Here my webservers or api's run on port 5000 and prometheus run on port 9090

![prometheus.yml](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/promYml.png)

## Prometheus and promql
After building and running the docker container go to <ip_of_running_container>:9090/metrics to check if the prometheus monitoring is working

![prometheus metrics](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/promMetrics.png)

go to <ip_of_running_container>:9090/graphs
and you can see a text box whrere you can write your promql queries and execute

![prometheus interface](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/promInterface.png)

query: prom_http_requests_total

[prom_http_requests_total](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_http_requests_total.png) 

[prom_http_requests_total_graph]
(https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_http_requests_total_graph.png)

query: prom_http_duration_seconds_sum

[prom_http_duration_seconds_sum](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_http_duration_seconds_sum.png) 

[prom_http_duration_seconds_sum_graph]
(https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_http_duration_seconds_sum_graph.png)

query: prom_scrape_duration_seconds

[prom_scrape_duration_seconds](https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_scrape_duration_seconds.png) 

[prom_scrape_duration_seconds_graph]
(https://github.com/anifaiza/docker-gunicorn/tree/prometheus/screenshots/prom_scrape_duration_seconds_graph.png)

