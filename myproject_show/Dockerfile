FROM python:3

RUN python3 -m pip install --upgrade pip 

WORKDIR /home/anika/myWorkingSpace/docker-gunicorn/myproject_create

COPY . /home/anika/myWorkingSpace/docker-gunicorn/myproject_create

RUN pip3 install -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:9090", "-w", "4", "app:app"]